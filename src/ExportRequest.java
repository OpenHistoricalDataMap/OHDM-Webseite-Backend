

import java.io.IOException;
import java.io.PrintWriter;

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
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String name = "defaultName";
		String polygon = "52.0,13.0_52.0,14.0_53.0,14.0_53.0,13.0_52.0,13.0";
		String date = "2020-05-13";
		
		name = request.getParameter("name");
		polygon = request.getParameter("polygon");
		date = request.getParameter("date");
		
		String resultID = "42";
		
		HttpPost post;
		
		if(request.getParameter("status").equals("true")) {
			
			post = new HttpPost("http://141.45.146.200:5001/statusByID");

		} else {
			
			
			post = new HttpPost("http://141.45.146.200:5001/request?name=" + name.replace(" ", "+") + "&coords=" + polygon + "&date=" + date);
		
		}
		
		CloseableHttpClient httpClient = HttpClients.createDefault();
		CloseableHttpResponse postResponse = httpClient.execute(post);
		
		
		
		try {
			resultID = EntityUtils.toString(postResponse.getEntity());
		} catch (ParseException e) {
			System.err.println("Could not parse a string from the response");
			e.printStackTrace();
		} catch (IOException e) {
			System.err.println("Stream not available.");
			e.printStackTrace();
		}
		
		PrintWriter writer;
		if(request.getParameter("status").equals("true")) {
			response.setStatus(200);
			response.setContentType("application/json");
			writer = response.getWriter();
			if(writer != null) {
				writer.append(resultID);
			} else {
				System.err.println("writer is null");
			}
			
		} else {
			response.setStatus(201);
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
