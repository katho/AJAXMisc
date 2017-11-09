package com.ajax.misc;

import java.sql.DriverManager;
import java.sql.SQLException;

import com.mysql.jdbc.Connection;

public class MySQLConnection 
{
	public static Connection connect()
	{
		Connection conn1 = null;
        try {
            Class.forName("com.mysql.jdbc.Driver").newInstance();
            String stringConnection = "jdbc:mysql://localhost:3306/sandia";
            conn1 = (Connection) DriverManager.getConnection(stringConnection, "root", "rootjs");

        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (InstantiationException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return conn1;
	}

}
