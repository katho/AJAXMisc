package com.java.bean;

import java.util.ArrayList;

public class ListaPunto 
{
	private ArrayList<Punto> listaPunto;
	
	public ListaPunto()
	{
		
	}
	
	public ListaPunto(ArrayList<Punto> listaPunto)
	{
		setListaPunto(listaPunto);
	}
	
	public ArrayList<Punto> getListaPunto() {
		return listaPunto;
	}

	public void setListaPunto(ArrayList<Punto> listaPunto) {
		this.listaPunto = listaPunto;
	}

	
	
	
	
	
}
