<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<link rel="stylesheet" href="Views/styles.css">
<style>
div.scrollmenu {
  background-color: #e6f5ff;
  overflow: auto;
  height:800px; ssg
}
</style>
</head>
<body>
    <div class="container">
<div class="row">
	<div class="col-sm-4">
    
     
    </div>

	<div class="col-sm-4">
	<form id="formProduct" name="formProduct" method="post" action="Product.jsp" ><br>
	
		<h3 class="text-center">Product Page</h3><br>
	
		<input type="text" id="productName" name="productName" class="form-control form-control-sm" placeholder="Product Name" ><br>
		<input type="text" id="rpaperType" name="rpaperType" class="form-control form-control-sm" placeholder="Rpaper Type"><br>
		<input type="text" id="price" name="price" class="form-control form-control-sm" placeholder="Price"><br>
		
		  <div class="container text-center">
			<div id="alertSuccess" class="alert alert-success"></div>
			<div id="alertError" class="alert alert-danger"></div>
	      </div>
			
		<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-info my-4 btn-block">
		
	</form>
	</div>
	
	


	
<div class="scrollmenu">
	<div class="row">
			<ul style="list-style: none;" id="apps" class="row" ></ul>
	</div>
</div>
   </div>
	
</div>


<script src="Components/jquery-3.5.0.min.js"></script>
<script src="Components/main.js"></script>


</body>

</body>
</html>

