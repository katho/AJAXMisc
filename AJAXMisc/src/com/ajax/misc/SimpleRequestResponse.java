package com.ajax.misc;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;

/**
 * Servlet implementation class SimpleRequestResponse
 */
@WebServlet(name = "/SimpleRequestResponse" , urlPatterns="/simple-request-response")
public class SimpleRequestResponse extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SimpleRequestResponse() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("applicationjson");
		JsonObject joDefault = new JsonObject();
        joDefault.addProperty("mensaje", "error");
        String jsonResult = joDefault.toString();
        
		JsonObject jo = JSONHandler.getJsonObject(request.getReader());
		String mensaje = jo.get("mensaje").getAsString();
		System.out.println(mensaje);
		
		
		 // Escribir el JSON
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
        	joDefault = new JsonObject();
            joDefault.addProperty("mensaje", "Hola AJAX");
            jsonResult = joDefault.toString();
            out.print(jsonResult);
        }
	}
}
