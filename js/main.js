// creating the function 


function myfunction(){
	var username=document.getElementById('username').value
	var comment=document.getElementById('comment').value
	var date=document.getElementById('date').value //adding the date
	var usernametext=document.createTextNode("username: "+username)
	var commenttext=document.createTextNode('comment: '+comment)
	// creatine the date
	var userdate=document.createTextNode('date: '+date)
	

	
	// creating list 
	var newlistitem=document.createElement('LI')
	newlistitem.className="list-group-item text-center"
	var newusername=document.createElement('h3')
	newusername.appendChild(usernametext)
	var newcomment=document.createElement('p')
	// creating the new date
	var newdate=document.createElement('h6')
	newdate.appendChild(userdate)//this is for the date
	newcomment.appendChild(commenttext)
	newcomment.className="text-primary"
	newusername.className="text-danger"
	// adding the class for the date
	newdate.className="text-success"
	newlistitem.appendChild(newusername)
	newlistitem.appendChild(newcomment)
	// this is for the date
	newlistitem.appendChild(newdate)
    document.getElementById('commentList').appendChild(newlistitem)
    // creating the image
    var newimg=document.createElement('img')
    newimg.setAttribute('src',"img/flower.jpg")
    newlistitem.appendChild(newimg)
    newimg.className="center-block"
    // adding the hyper link
    var newatt=document.createElement('a')
    newatt.setAttribute('href',"http://www.w3schools.com")
    newatt.appendChild(newimg)
    newlistitem.appendChild(newatt)
    
    
}

// this is for delete the button
$(document).ready(function(){
    $("#btn").click(function(){
        $('#commentList').toggle();
    });
});