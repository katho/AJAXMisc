package com.ajax.misc;

import java.io.BufferedReader;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

public class JSONHandler {

	public static JsonObject getJsonObject(BufferedReader reqReader) {
        StringBuilder jb = new StringBuilder();
        String line = null;
        
        try {
            BufferedReader reader = reqReader;
            while ((line = reader.readLine()) != null) {
                jb.append(line);
                System.out.println(line);
            }
        } catch (Exception e) {
        }
        
        String jsonString = jb.toString();
        System.out.println(jsonString);
        
        /*
        JsonParser jsonParser = new JsonParser();
        JsonObject jsonObject = (JsonObject)jsonParser.parse(jsonString);
        return jsonObject;
        */
        
        JsonObject jsonObject = new Gson().fromJson(jsonString, JsonObject.class);
        return jsonObject;
    }
	
	public static JsonArray getJsonArray(BufferedReader reqReader)
	{
		JsonArray jArray = new JsonArray();
		StringBuilder jb = new StringBuilder();
        String line = null;
		Gson gson = new Gson();
		jArray = gson.fromJson(reqReader, JsonArray.class);
		System.out.println("ZZ: "+jArray.toString());
		return jArray;
	}
}
