$(document).ready(function()
{
	 $("#alertSuccess").hide();
	 $("#alertError").hide();
}); 


$(function (){
	var $apps = $('#apps');
	var $pid = $('#PID');
	var $productName = $('#ProductName');
	var $rpaperType = $('#RpaperType');
	var $price = $('#Price');

	

	$.ajax({
		type: 'GET',
		url: 'http://localhost:8080/Product/webapi/Product/product',
		success: function(apps){
			//console.log('success',data);
			$.each(apps, function(i, app){
				$apps.append('<li><div class="card shadow-lg p-3 mb-5 bg-white rounded bg-light m-2\" style=\"width: 12rem;float: left;">'
							+'Product Name:<span class="noedit productName">' + app.productName +'</span><input class="edit productName"/>'+'<br>'
							+'Rpaper Type :<span class="noedit rpaperType">'+ app.rpaperType +'</span><input class="edit rpaperType"/> '+'<br>'
							+'Price:<span class="noedit price">'+ app.price +'</span><input class="edit price"/> '+'<br>'
							+'<input type="button" id="'+ app.PID +'" value="Remove" class="btn btn-outline-danger remove">'+'<br>'
							+'<input type="button" " value="Edit" class="editapp btn btn-outline-primary noedit">'+'<br>'
							+'<input type="button" " value="Save" class="saveedit btn btn-outline-success edit">'+'<br>'
							+'<input type="button" " value="Cancel" class="canceledit btn btn-outline-danger edit"></li>');

			});
		},
		error: function() {
			alert('Product loading error...');
		}
	});
	
	
	$('#btnSave').on('click', function(){
		
		//clear status messages
		$("#alertSuccess").text("");
		$("#alertSuccess").hide();
		$("#alertError").text("");
		$("#alertError").hide();
		
		//Form validation
		var status = validateProductForm(); 
		

		
		//Check not valid
		if (status != true)
		 {
			 $("#alertError").text(status);
			 $("#alertError").show();
			 return;
		 } 
		
		
        //IF valid		
		var app = {
				productName: $productName.val(),
				rpaperType: $rpaperType.val(),
				price: $price.val(),
				

		};
		

		
		$.ajax({
			headers: { 
		        'Accept': 'application/json',
		        'Content-Type': 'application/json' 
		    },
			type: 'POST',
			url: 'http://localhost:8080/Product/webapi/Product/product/',
			data: JSON.stringify(app),
			dataType: 'json',
			success: function(newProduct){
				console.log("Inserted");
				$apps.append('<li><div class="card shadow-lg p-3 mb-5 bg-white rounded bg-light m-2\" style=\"width: 12rem;float: left;">'
							+'Product Name:<span class="noedit productName">' + app.productName +'</span><input class="edit productName"/>'+'<br>'
							+'Rpaper Type :<span class="noedit rpaperType">'+ app.rpaperType +'</span><input class="edit rpaperType"/> '+'<br>'
							+'Price:<span class="noedit price">'+ app.price +'</span><input class="edit price"/> '+'<br>'
							+'<input type="button" id="'+ app.PID +'" value="Remove" class="btn btn-outline-danger remove">'+'<br>'
							+'<input type="button" " value="Edit" class="editapp btn btn-outline-primary noedit">'+'<br>'
							+'<input type="button" " value="Save" class="saveedit btn btn-outline-success edit">'+'<br>'
							+'<input type="button" " value="Cancel" class="canceledit btn btn-outline-danger edit"></li>');
				
				//Show Success Message
				$("#alertSuccess").text("Your Product Details Saved Successfully");
				$("#alertSuccess").show();

				$("#formProduct")[0].reset(); 
				
			},
			
			error: function() {
				alert('Product Saving Error');
			}
		});
		
		function validateProductForm()
		{
			// Product Name
			if ($("#prodcutName").val().trim() == "")
			 {
			 return "Insert product name.";
			 }

			//Rpaper Type
			if ($("#rpaperType").val().trim() == "")
			 {
			 return "Insert rpaper type.";
			 }

			//Price
			if ($("#price").val().trim() == "")
			 {
			 return "Insert price.";
			 }
			 

			return true;
		}
		

		
	});
	
	
	$apps.delegate('.remove','click',function(){
		var $li=$(this).closest('li');
		var self = this;
		$.ajax({
			type:'DELETE',
			url:'http://localhost:8080/Product/webapi/Product/product/'+$(this).attr('id'),
			success: function(){
				console.log("Deleted");
				$(self);
				$li.fadeOut(300,function(){
					$(this).remove();
					
					
					
				})
				
			},
		
			error: function() {
				alert('Product Delete Error');
			}
		});
	});
	
	
$apps.delegate('.editapp','click',function(){
		
		var $li=$(this).closest('li');
		
		$li.find('input.pid').val($li.find('span.pid').html());
		$li.find('input.productName').val($li.find('span.productName').html());
		$li.find('input.rpaperType').val($li.find('span.rpaperType').html());
		$li.find('input.price').val($li.find('span.price').html());
		$li.addClass('edit');
	});
	
	$apps.delegate('.canceledit','click',function(){
		$(this).closest('li').removeClass('edit');
		
	});
	
	$apps.delegate('.saveedit','click',function(){
		var $li=$(this).closest('li');
		var app={
				
				productName: $li.find('input.productName').val(),
				rpaperType: $li.find('input.rpaperType').val(),
				price: $li.find('input.price').val(),
					
		};
		
		$.ajax({
			headers:{
				'Accept':'application/json',
				'Content-Type':'application/json'
					
					
			},
			type: 'PUT',
			url: 'http://localhost:8080/Product/webapi/Product/product',
			data: JSON.stringify(app),
			dataType: 'json',
			
			success: function(){

				$li.find('span.productName').html(app.productName);
				$li.find('span.rpaperType').html(app.rpaperType);
				$li.find('span.price').html(app.price);		
				$li.removeClass('edit');
				
				$("#alertSuccess").text("Your Product Details Updated Successfully");
				$("#alertSuccess").show();
				},
		
				error: function(){
				alert('Product Update Error');
			}
			
		});
	});
	
	
	
	
	
	
});