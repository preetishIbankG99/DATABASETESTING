package com.database.testing;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class SimpleOracleJavaConnectivity {
public static void main(String[]args) {
	try{
		Class.forName("oracle.jdbc.driver.OracleDriver");
		 System.out.println("Driver Loaded");
	
 Connection con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","SYSTEM","tiger");
			System.out.println("Connection created");
		// This will create statement  
	         Statement smt=con.createStatement();
	         System.out.println("Statement created");
	 ResultSet rs=  smt.executeQuery("select * from temp_emp");
	 
	 System.out.println("Query Executed");
	 
	  // Iterate the resultset now
	 
	 while(rs.next()){
	   
	 int eno=rs.getInt("ENO");
	 String ename= rs.getString("ENAME");
	
	 System.out.println("Empno is "+eno+" Empname is "+ename);
	   
	 }
	}
	

catch(Exception e) {
	System.out.println(e);
}
}

}
