import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
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
import org.json.simple.parser.JSONParser;

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
		
		JSONObject result = new JSONObject();
		
		JSONObject jsonRequest = new JSONObject();
		JSONObject jsonStartPoint = new JSONObject();
		JSONObject jsonEndPoint = new JSONObject();
		JSONObject restrictedArea = new JSONObject();
		 
		String classOfPerson = request.getParameter("classOfPerson");
		String transportType = request.getParameter("transportType");
		
		String waterwayIncluded = request.getParameter("waterwayincl");
		
		String startCoord = request.getParameter("start");
		String targetCoord = request.getParameter("target");
		
		String startLatitude = "00.00000";
		String startLongitude = "00.00000";
		
		String targetLatitude = "00.00000";
		String targetLongitude = "00.00000";
		
		if(startCoord.length() > 8) {
			String[] startPoints = startCoord.split("\\,");
			startLatitude = startPoints[0].substring(0,8);
			startLongitude = startPoints[1].substring(1,9);
		}
		
		if(targetCoord.length() > 8) {
			String[] targetPoints = targetCoord.split("\\,");
			targetLatitude = targetPoints[0].substring(0,8);
			targetLongitude = targetPoints[1].substring(1,9);
		}
		
		if(waterwayIncluded != null){
			waterwayIncluded = "true";
		} else {
			waterwayIncluded = "false";
		}
		
		jsonRequest.put("classofperson", classOfPerson);
		jsonRequest.put("transporttype", transportType);
		jsonRequest.put("waterwayincl", waterwayIncluded);
		jsonStartPoint.put("latitude", startLatitude);
		jsonStartPoint.put("longitude", startLongitude);
		jsonRequest.put("startpoint", jsonStartPoint);
		jsonEndPoint.put("latitude",targetLatitude);
		jsonEndPoint.put("longitude", targetLongitude);
		jsonRequest.put("endpoint", jsonEndPoint);
		jsonRequest.put("day", "2019-9-9");
		jsonRequest.put("restricted_area", restrictedArea);
		
		String timeResult = "{\"geometries\":[{\"coordinates\":[[1505804.6189851,6883349.74062633],[1505836.84137786,6883322.88234181]],\"type\":\"LineString\"},{\"coordinates\":[[1505801.18944959,6883352.54308401],[1505801.64215488,6883352.22189933],[1505804.6189851,6883349.74062633]],\"type\":\"LineString\"},{\"coordinates\":[[1505745.1475133,6883392.30363468],[1505801.18944959,6883352.54308401]],\"type\":\"LineString\"},{\"coordinates\":[[1505745.1475133,6883392.30363468],[1505753.0400652,6883396.72469521],[1505769.13686357,6883417.86178261]],\"type\":\"LineString\"},{\"coordinates\":[[1505769.13686357,6883417.86178261],[1505781.99426475,6883434.17592521]],\"type\":\"LineString\"},{\"coordinates\":[[1505777.89647584,6883437.62856667],[1505781.99426475,6883434.17592521]],\"type\":\"LineString\"},{\"coordinates\":[[1505760.14863128,6883452.5822271],[1505777.89647584,6883437.62856667]],\"type\":\"LineString\"},{\"coordinates\":[[1505700.70877258,6883497.91649271],[1505703.68100298,6883495.65112711],[1505759.98640142,6883452.71891583]],\"type\":\"LineString\"},{\"coordinates\":[[1505700.26361747,6883498.22591189],[1505700.70877258,6883497.91649271]],\"type\":\"LineString\"},{\"coordinates\":[[1505637.00431287,6883542.20069414],[1505655.86928168,6883529.08360353],[1505700.26361747,6883498.22591189]],\"type\":\"LineString\"},{\"coordinates\":[[1505634.42914776,6883543.99124437],[1505637.00431287,6883542.20069414]],\"type\":\"LineString\"},{\"coordinates\":[[1505479.52957487,6883653.69445273],[1505609.53810961,6883561.27391159],[1505634.42914776,6883543.99124437]],\"type\":\"LineString\"},{\"coordinates\":[[1505477.05678362,6883655.45231198],[1505479.52957487,6883653.69445273]],\"type\":\"LineString\"},{\"coordinates\":[[1505325.41708367,6883763.92080082],[1505477.05678362,6883655.45231198]],\"type\":\"LineString\"},{\"coordinates\":[[1505214.03111963,6883842.93225209],[1505325.13907454,6883764.11966188]],\"type\":\"LineString\"},{\"coordinates\":[[1505159.41162211,6883881.67809646],[1505197.72278537,6883854.50029928],[1505214.03111963,6883842.93225209]],\"type\":\"LineString\"},{\"coordinates\":[[1505157.39173386,6883883.1109977],[1505159.41162211,6883881.67809646]],\"type\":\"LineString\"},{\"coordinates\":[[1505079.23802382,6883913.1651605],[1505141.05003261,6883889.39586462],[1505157.39173386,6883883.1109977]],\"type\":\"LineString\"},{\"coordinates\":[[1504954.50082994,6883959.18744946],[1505072.78892086,6883915.59504302],[1505079.00054844,6883913.25647969]],\"type\":\"LineString\"},{\"coordinates\":[[1504941.40965782,6883964.06557503],[1504954.50082994,6883959.18744946]],\"type\":\"LineString\"},{\"coordinates\":[[1504717.55729379,6884046.11718655],[1504941.40965782,6883964.06557503]],\"type\":\"LineString\"},{\"coordinates\":[[1504697.4195979,6884054.0647819],[1504717.55729379,6884046.11718655]],\"type\":\"LineString\"},{\"coordinates\":[[1504544.88963162,6884110.97710216],[1504697.15949056,6884054.16183373]],\"type\":\"LineString\"},{\"coordinates\":[[1504453.56312137,6884146.16610903],[1504468.93634305,6884140.20991116],[1504483.67504363,6884134.50950507],[1504528.29189554,6884117.13425373],[1504544.88963162,6884110.97710216]],\"type\":\"LineString\"},{\"coordinates\":[[1504452.27631829,6884146.66658177],[1504453.56312137,6884146.16610903]],\"type\":\"LineString\"},{\"coordinates\":[[1504381.58393862,6884173.8825847],[1504402.21144027,6884165.93487097],[1504410.34889504,6884162.79232885],[1504419.47709329,6884159.28437631],[1504423.02818505,6884158.04197682],[1504452.27631829,6884146.66658177]],\"type\":\"LineString\"},{\"coordinates\":[[1504360.39983952,6884086.65914012],[1504366.47788372,6884108.03555664],[1504376.05135993,6884143.51687937],[1504381.58393862,6884173.8825847]],\"type\":\"LineString\"},{\"coordinates\":[[1504344.00247853,6884087.93806943],[1504348.97845977,6884086.89665555],[1504353.92104516,6884086.8418443],[1504360.39983952,6884086.65914012]],\"type\":\"LineString\"},{\"coordinates\":[[1504340.9809479,6884088.84688314],[1504344.00247853,6884087.93806943]],\"type\":\"LineString\"},{\"coordinates\":[[1504336.28803782,6884090.25841311],[1504340.9809479,6884088.84688314]],\"type\":\"LineString\"},{\"coordinates\":[[1504317.8423982,6884095.86743566],[1504336.28803782,6884090.25841311]],\"type\":\"LineString\"},{\"coordinates\":[[1504310.41784091,6884098.17092623],[1504317.8423982,6884095.86743566]],\"type\":\"LineString\"},{\"coordinates\":[[1504310.12795748,6884098.26086341],[1504297.65997202,6884059.09107948]],\"type\":\"LineString\"},{\"coordinates\":[[1504297.54885502,6884058.74199111],[1504295.4115208,6884050.22801075]],\"type\":\"LineString\"},{\"coordinates\":[[1504295.4115208,6884050.22801075],[1504288.59876796,6884028.37672044]],\"type\":\"LineString\"},{\"coordinates\":[[1504288.59876796,6884028.37672044],[1504285.48876302,6884018.40794947]],\"type\":\"LineString\"},{\"coordinates\":[[1504285.48876302,6884018.40794947],[1504285.28144714,6884017.74342172]],\"type\":\"LineString\"},{\"coordinates\":[[1504285.28144714,6884017.74342172],[1504281.24054962,6884004.77154711]],\"type\":\"LineString\"},{\"coordinates\":[[1504281.24054962,6884004.77154711],[1504273.97138687,6883981.4587659]],\"type\":\"LineString\"},{\"coordinates\":[[1504273.97138687,6883981.4587659],[1504271.71160121,6883974.20550841]],\"type\":\"LineString\"}],\"travel_time\":\"00:20:23.54172\",\"request_id\":\"20718da0e8c94b0ca67fd4b084f255bc\"}";
		//HttpPost post = new HttpPost("http://localhost:8080/ohdm");
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
			
			InputStream iS = postResponse.getEntity().getContent();
			timeResult = new String(iS.readAllBytes(), StandardCharsets.UTF_8);
		} catch (IOException e) {
			System.err.println("Stream not available.");
			e.printStackTrace();
		}
		
		//timeResult = "{\"geometries\":[{\"coordinates\":[[1505804.6189851,6883349.74062633],[1505836.84137786,6883322.88234181]],\"type\":\"LineString\"},{\"coordinates\":[[1505801.18944959,6883352.54308401],[1505801.64215488,6883352.22189933],[1505804.6189851,6883349.74062633]],\"type\":\"LineString\"},{\"coordinates\":[[1505745.1475133,6883392.30363468],[1505801.18944959,6883352.54308401]],\"type\":\"LineString\"},{\"coordinates\":[[1505745.1475133,6883392.30363468],[1505753.0400652,6883396.72469521],[1505769.13686357,6883417.86178261]],\"type\":\"LineString\"},{\"coordinates\":[[1505769.13686357,6883417.86178261],[1505781.99426475,6883434.17592521]],\"type\":\"LineString\"},{\"coordinates\":[[1505777.89647584,6883437.62856667],[1505781.99426475,6883434.17592521]],\"type\":\"LineString\"},{\"coordinates\":[[1505760.14863128,6883452.5822271],[1505777.89647584,6883437.62856667]],\"type\":\"LineString\"},{\"coordinates\":[[1505700.70877258,6883497.91649271],[1505703.68100298,6883495.65112711],[1505759.98640142,6883452.71891583]],\"type\":\"LineString\"},{\"coordinates\":[[1505700.26361747,6883498.22591189],[1505700.70877258,6883497.91649271]],\"type\":\"LineString\"},{\"coordinates\":[[1505637.00431287,6883542.20069414],[1505655.86928168,6883529.08360353],[1505700.26361747,6883498.22591189]],\"type\":\"LineString\"},{\"coordinates\":[[1505634.42914776,6883543.99124437],[1505637.00431287,6883542.20069414]],\"type\":\"LineString\"},{\"coordinates\":[[1505479.52957487,6883653.69445273],[1505609.53810961,6883561.27391159],[1505634.42914776,6883543.99124437]],\"type\":\"LineString\"},{\"coordinates\":[[1505477.05678362,6883655.45231198],[1505479.52957487,6883653.69445273]],\"type\":\"LineString\"},{\"coordinates\":[[1505325.41708367,6883763.92080082],[1505477.05678362,6883655.45231198]],\"type\":\"LineString\"},{\"coordinates\":[[1505214.03111963,6883842.93225209],[1505325.13907454,6883764.11966188]],\"type\":\"LineString\"},{\"coordinates\":[[1505159.41162211,6883881.67809646],[1505197.72278537,6883854.50029928],[1505214.03111963,6883842.93225209]],\"type\":\"LineString\"},{\"coordinates\":[[1505157.39173386,6883883.1109977],[1505159.41162211,6883881.67809646]],\"type\":\"LineString\"},{\"coordinates\":[[1505079.23802382,6883913.1651605],[1505141.05003261,6883889.39586462],[1505157.39173386,6883883.1109977]],\"type\":\"LineString\"},{\"coordinates\":[[1504954.50082994,6883959.18744946],[1505072.78892086,6883915.59504302],[1505079.00054844,6883913.25647969]],\"type\":\"LineString\"},{\"coordinates\":[[1504941.40965782,6883964.06557503],[1504954.50082994,6883959.18744946]],\"type\":\"LineString\"},{\"coordinates\":[[1504717.55729379,6884046.11718655],[1504941.40965782,6883964.06557503]],\"type\":\"LineString\"},{\"coordinates\":[[1504697.4195979,6884054.0647819],[1504717.55729379,6884046.11718655]],\"type\":\"LineString\"},{\"coordinates\":[[1504544.88963162,6884110.97710216],[1504697.15949056,6884054.16183373]],\"type\":\"LineString\"},{\"coordinates\":[[1504453.56312137,6884146.16610903],[1504468.93634305,6884140.20991116],[1504483.67504363,6884134.50950507],[1504528.29189554,6884117.13425373],[1504544.88963162,6884110.97710216]],\"type\":\"LineString\"},{\"coordinates\":[[1504452.27631829,6884146.66658177],[1504453.56312137,6884146.16610903]],\"type\":\"LineString\"},{\"coordinates\":[[1504381.58393862,6884173.8825847],[1504402.21144027,6884165.93487097],[1504410.34889504,6884162.79232885],[1504419.47709329,6884159.28437631],[1504423.02818505,6884158.04197682],[1504452.27631829,6884146.66658177]],\"type\":\"LineString\"},{\"coordinates\":[[1504360.39983952,6884086.65914012],[1504366.47788372,6884108.03555664],[1504376.05135993,6884143.51687937],[1504381.58393862,6884173.8825847]],\"type\":\"LineString\"},{\"coordinates\":[[1504344.00247853,6884087.93806943],[1504348.97845977,6884086.89665555],[1504353.92104516,6884086.8418443],[1504360.39983952,6884086.65914012]],\"type\":\"LineString\"},{\"coordinates\":[[1504340.9809479,6884088.84688314],[1504344.00247853,6884087.93806943]],\"type\":\"LineString\"},{\"coordinates\":[[1504336.28803782,6884090.25841311],[1504340.9809479,6884088.84688314]],\"type\":\"LineString\"},{\"coordinates\":[[1504317.8423982,6884095.86743566],[1504336.28803782,6884090.25841311]],\"type\":\"LineString\"},{\"coordinates\":[[1504310.41784091,6884098.17092623],[1504317.8423982,6884095.86743566]],\"type\":\"LineString\"},{\"coordinates\":[[1504310.12795748,6884098.26086341],[1504297.65997202,6884059.09107948]],\"type\":\"LineString\"},{\"coordinates\":[[1504297.54885502,6884058.74199111],[1504295.4115208,6884050.22801075]],\"type\":\"LineString\"},{\"coordinates\":[[1504295.4115208,6884050.22801075],[1504288.59876796,6884028.37672044]],\"type\":\"LineString\"},{\"coordinates\":[[1504288.59876796,6884028.37672044],[1504285.48876302,6884018.40794947]],\"type\":\"LineString\"},{\"coordinates\":[[1504285.48876302,6884018.40794947],[1504285.28144714,6884017.74342172]],\"type\":\"LineString\"},{\"coordinates\":[[1504285.28144714,6884017.74342172],[1504281.24054962,6884004.77154711]],\"type\":\"LineString\"},{\"coordinates\":[[1504281.24054962,6884004.77154711],[1504273.97138687,6883981.4587659]],\"type\":\"LineString\"},{\"coordinates\":[[1504273.97138687,6883981.4587659],[1504271.71160121,6883974.20550841]],\"type\":\"LineString\"}],\"travel_time\":\"00:20:23.54172\",\"request_id\":\"20718da0e8c94b0ca67fd4b084f255bc\"}";
		
		PrintWriter writer;
		
		response.setStatus(200);
		response.setContentType("text/string");
		writer = response.getWriter();
		if(writer != null) {
			writer.append(timeResult);
		} else {
			System.err.println("writer is null");
		}
		/*
		String jsonString = timeResult;
		org.json.JSONObject resultObject = new org.json.JSONObject(jsonString);
		
		timeResult = resultObject.getString("travel_time");
	    
	    request.setAttribute("time", timeResult); // This will be available as ${message}
        request.getRequestDispatcher("/index.jsp").forward(request, response);*/
    }
	

}
