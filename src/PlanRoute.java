import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.hc.client5.http.classic.methods.HttpPost;
import org.apache.hc.client5.http.impl.classic.CloseableHttpClient;
import org.apache.hc.client5.http.impl.classic.CloseableHttpResponse;
import org.apache.hc.client5.http.impl.classic.HttpClients;
import org.apache.hc.core5.http.NameValuePair;
import org.apache.hc.core5.http.ParseException;
import org.apache.hc.core5.http.io.entity.EntityUtils;
import org.apache.hc.core5.http.io.entity.StringEntity;
import org.json.simple.JSONObject;

/**
 * Servlet implementation class PlanRoute
 */
@WebServlet("/PlanRoute")
public class PlanRoute extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PlanRoute() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		JSONObject jsonRequest = new JSONObject();
		JSONObject jsonStartPoint = new JSONObject();
		JSONObject jsonEndPoint = new JSONObject();
		JSONObject restrictedArea = new JSONObject();
		 
		String classOfPerson = request.getParameter("class-of-person");
		String transportType = request.getParameter("transport-type");
		
		String waterwayIncluded = request.getParameter("waterwayincl");
		
		String startLatitude = request.getParameter("start-lat");
		String startLongitude = request.getParameter("start-lon");
		String endPointLatitude = request.getParameter("ziel-lat");
		String endPointLongitude = request.getParameter("ziel-lon");
		
		if(waterwayIncluded != null){
			waterwayIncluded = "true";
		} else {
			waterwayIncluded = "false";
		}
		
		jsonRequest.put("classofperson", classOfPerson);
		jsonRequest.put("transporttype", transportType);
		jsonRequest.put("waterwayincl", waterwayIncluded);
		jsonStartPoint.put("latitude",startLatitude);
		jsonStartPoint.put("longitude", startLongitude);
		jsonRequest.put("startpoint", jsonStartPoint);
		jsonEndPoint.put("latitude",endPointLatitude);
		jsonEndPoint.put("longitude", endPointLongitude);
		jsonRequest.put("endpoint", jsonEndPoint);
		jsonRequest.put("day", "2019-9-9");
		jsonRequest.put("restricted_area", restrictedArea);
		
		
		String timeResult = "42";
		/* HttpPost post = new HttpPost("http://localhost:8080/ohdm");*/
		HttpPost post = new HttpPost("http://localhost:5555/ohdm_traveler");
		StringEntity stringEntity = new StringEntity(jsonRequest.toJSONString());	
		
		post.setEntity(stringEntity);
		post.setHeader("Content-type", "application/json");
		try {
			System.out.println(EntityUtils.toString(stringEntity)); 
		} catch (ParseException e) {
			System.err.println("Could not parse a string from the StringEntity");
			e.printStackTrace();
		} catch (IOException e) {
			System.err.println("Stream not available.");
			e.printStackTrace();
		}
		
		CloseableHttpClient httpClient = HttpClients.createDefault();
		CloseableHttpResponse postResponse = httpClient.execute(post);
		try {
			timeResult = EntityUtils.toString(postResponse.getEntity());
		} catch (ParseException e) {
			System.err.println("Could not parse a string from the response");
			e.printStackTrace();
		} catch (IOException e) {
			System.err.println("Stream not available.");
			e.printStackTrace();
		}
		
		
		
	    
	    request.setAttribute("time", timeResult); // This will be available as ${message}
        request.getRequestDispatcher("/index.jsp").forward(request, response);
    }
	

}
