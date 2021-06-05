package com.database.testing;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.Test;

public class DemoDataBaseTesting {
	public static WebDriver driver; 
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
       // This will create statement  
	         Statement smt=con.createStatement();
	         
	         System.out.println("Statement created");
	     	System.setProperty("webdriver.chrome.driver", "E:\\OXYGENWORKSPACE\\DATABASETESTING\\Drivers\\chromedriver.exe");
			   driver=new ChromeDriver();
	         driver.manage().window().maximize();
	         driver.get("https://opensource-demo.orangehrmlive.com/");
	         
	         ResultSet rs=  smt.executeQuery("select * from persons");
	    	 
	    	 System.out.println("Query Executed");
	    	 
	    	  // Iterate the resultset now
	    	 
	    	 while(rs.next()){
	    	   
	    	 int eno=rs.getInt("PERSONID");
	    	 String efname= rs.getString("FIRSTNAME");
	    	 String elname= rs.getString("LASTNAME");
	    	 String eaddress= rs.getString("ADDRESS");
	    	 System.out.println("Empno is "+eno+" Empfirstname is "+efname+" Emplastname is "+elname+" Empadress is "+eaddress);
	    	   
	    	 driver.findElement(By.id("txtUsername")).sendKeys(efname);
	    	 driver.findElement(By.id("txtPassword")).sendKeys(elname);
	    	   Thread.sleep(4000);
	    	 driver.findElement(By.id("txtUsername")).clear();
	    	 Thread.sleep(4000);
	    	 driver.findElement(By.id("txtPassword")).clear();
	    	 }
	    	}
	    	
	  catch (Exception e) {
	   System.out.println(e.getMessage());
	  }
	   
	  
	 }
}
