package com.database.testing;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import org.testng.annotations.Test;

public class DemoDataBaseTesting {
	 @Test
	 public void TestVerifyDB(){
	  
	  try {
	                          
	                         // This will load the driver
		  Class.forName("oracle.jdbc.driver.OracleDriver");
		  // Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
	   System.out.println("Driver Loaded");
	   
	   Connection con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","SYSTEM","tiger");
		System.out.println("Connection created");
	// This will create statement  
       
	
	   System.out.println("Connection created");
	   
	  // This will create statement  
	         Statement smt=con.createStatement();
	         
	         System.out.println("Statement created");
	 
	         ResultSet rs=  smt.executeQuery("select * from persons");
	    	 
	    	 System.out.println("Query Executed");
	    	 
	    	  // Iterate the resultset now
	    	 
	    	 while(rs.next()){
	    	   
	    	 int eno=rs.getInt("PERSONID");
	    	 String efname= rs.getString("FIRSTNAME");
	    	 String elname= rs.getString("LASTNAME");
	    	 String eaddress= rs.getString("ADDRESS");
	    	 System.out.println("Empno is "+eno+" Empfirstname is "+efname+" Emplastname is "+elname+" Empadress is "+eaddress);
	    	   
	    	 }
	    	}
	    	
	  catch (Exception e) {
	   System.out.println(e.getMessage());
	  }
	   
	  
	 }
}
