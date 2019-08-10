function addTask(){
	var filltasks = document.getElementById("tasks")
	var p = document.createElement("p");
	var inputValue = document.getElementById("taskvalue").value;
	var t = document.createTextNode(inputValue);
	p.appendChild(t);
	if (inputValue === "") {
		alert("You have to enter a task here");
	} else{
		filltasks.innerHTML += `<div class="task task7 draggable"><p>${inputValue}</p><button class="delete delete7" type="button">X
		</button><button class="done done7" type="button">&#10003</button></div>`;
	}
	document.getElementById("taskvalue").value="";
}

document.getElementById("taskbutton").addEventListener("click", addTask, false);


$( document ).ready(function() {

	
	
	$(document).on('click', '.done1', function(){
		$(".task1").css("background", "#B5B5B5");
		$(this).remove();
	});

	$(document).on('click', '.delete1', function(){
		$(".task1").css("background", "#65B25F").hide(2000);
	});


	$(document).on('click', '.done2', function(){
		$(".task2").css("background", "#B5B5B5");
		$(this).remove();
	});

	$(document).on('click', '.delete2', function(){
		$(".task2").css("background", "#65B25F").hide(2000);
	});


	$(document).on('click', '.done3', function(){
		$(".task3").css("background", "#B5B5B5");
		$(this).remove();
	});

	$(document).on('click', '.delete3', function(){
		$(".task3").css("background", "#65B25F").hide(2000);
	});


	$(document).on('click', '.done4', function(){
		$(".task4").css("background", "#B5B5B5");
		$(this).remove();
	});

	$(document).on('click', '.delete4', function(){
		$(".task4").css("background", "#65B25F").hide(2000);
	});


	$(document).on('click', '.done5', function(){
		$(".task5").css("background", "#B5B5B5");
		$(this).remove();
	});

	$(document).on('click', '.delete5', function(){
		$(".task5").css("background", "#65B25F").hide(2000);
	});


	$(document).on('click', '.done6', function(){
		$(".task6").css("background", "#B5B5B5");
		$(this).remove();
	});

	$(document).on('click', '.delete6', function(){
		$(".task6").css("background", "#65B25F").hide(2000);
	});

	$(document).on('click', '.done7', function(){
		$('.task7').css("background", "#B5B5B5");
		$(this).remove();
	});


	$(document).on('click', '.delete7', function(){
		$(".task7").css("background", "#65B25F").hide(2000);
	});


	$(".draggable").draggable();

});