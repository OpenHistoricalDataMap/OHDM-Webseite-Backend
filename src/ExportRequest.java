
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;

import javax.servlet.ServletContext;
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
	 * Servlet which is called by export.js gets data from the Website and writes a POST Request to a (private) port. 
	 * Based on the request parameter status it will either 
	 * (false) request a new export, which collects a request id or 
	 * (true) request a list of all exports, this list includes: name, date, state and polygon
	 * Response is given funneled trough route.js which visualizes the outcome.
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
		System.out.println(resultID);
		
		if (request.getParameter("status").equals("true")) {
		
		JSONArray array = new JSONArray(resultID);
		/*
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
					+ "</p></div>" + "<div class=\"list-entry\" id=\"status\"><p>" + state + "</p></div>"
					+ "<div class=\"list-entry\" id=\"poly-btn-container\"> <button onClick=\"getDownload("+array.getJSONObject(i).getString("mapName")+")\" class=\"poly-btn\"> Herunterladen </button> </div>"
					+ "</div>");
		}*/
			
			
		PrintWriter writer;
		
		org.json.JSONObject resultObject = new org.json.JSONObject();
		resultObject.put("data", array);
		resultObject.put("status", 200);
		
		response.setContentType("application/json");
		writer = response.getWriter();
		if(writer != null) {
			writer.append(resultObject.toString());
		} else {
			System.err.println("writer is null");
		}
		
		
		/*
		ServletContext context = request.getSession().getServletContext();
		context.setAttribute("exportStatus", list);
		request.getRequestDispatcher("status.jsp").forward(request, response);*/
			
		} else {
			PrintWriter writer;
			
			response.setStatus(200);
			response.setContentType("text/string");
			writer = response.getWriter();
			if(writer != null) {
				writer.append(resultID);
			} else {
				System.err.println("writer is null");
			}
		}

		

	}
}
