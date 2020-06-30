
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.hc.client5.http.classic.methods.HttpPost;
import org.apache.hc.client5.http.impl.classic.CloseableHttpClient;
import org.apache.hc.client5.http.impl.classic.CloseableHttpResponse;
import org.apache.hc.client5.http.impl.classic.HttpClients;
import org.apache.hc.core5.http.ParseException;
import org.apache.hc.core5.http.io.entity.EntityUtils;
import org.json.JSONArray;

/**
 * Servlet implementation class ExportRequest
 */
@WebServlet("/ExportRequest")
public class ExportRequest extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public ExportRequest() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String name = "defaultName";
		String polygon = "52.0,13.0_52.0,14.0_53.0,14.0_53.0,13.0_52.0,13.0";
		String date = "2020-05-13";
		String datatype = "OSM";

		name = request.getParameter("name");
		polygon = request.getParameter("polygon");
		date = request.getParameter("date");
		datatype = request.getParameter("datatype");

		String resultID = "42";

		HttpPost post;

		if (request.getParameter("status").equals("true")) {

			post = new HttpPost("http://141.45.146.200:5001/statusByID");

		} else {

			post = new HttpPost("http://141.45.146.200:5001/request?name=" + name.replace(" ", "+") + "&coords="
					+ polygon + "&date=" + date);

		}

		CloseableHttpClient httpClient = HttpClients.createDefault();
		CloseableHttpResponse postResponse = httpClient.execute(post);

		try {
			InputStream iS = postResponse.getEntity().getContent();
			resultID = new String(iS.readAllBytes(), StandardCharsets.UTF_8);
		} catch (IOException e) {
			System.err.println("Stream not available.");
			e.printStackTrace();
		}

		JSONArray array = new JSONArray(resultID);

		String list = "";

		for (var i = 0; i < array.length(); i++) {
			String state = "";
			switch (array.getJSONObject(i).getString("status")) {
			case "REQUESTED":
				state = "Angefragt";
				break;
			case "DOWNLOADING":
				state = "Lädt herunter";
				break;
			case "CONVERTING":
				state = "Konvertiert";
				break;
			case "DONE":
				state = "Fertig";
				break;
			case "ERROR":
				state = "Fehlerhaft";
				break;
			default:
				state = null;
				break;
			}
			list += ("<div class=\"list-container\">" + "<div class=\"list-entry\" id=\"name\"><p>"
					+ array.getJSONObject(i).getString("mapName") + "</p></div>"
					+ "<div class=\"list-entry\" id=\"date\"><p>" + array.getJSONObject(i).getString("date")
					+ "</p></div>" + "<div class=\"list-entry\" id=\"status\"><p>" + state + "</p></div>'"
					+ "<div class=\"list-entry\" id=\"poly-btn-container\"> <button class=\"poly-btn\"> Herunterladen </button> </div>"
					+ "</div>");

			
		}

		request.getSession().setAttribute("exportStatus", list);
		request.getRequestDispatcher("status.jsp").forward(request, response);

	}
}
