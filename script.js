// WEB303 Assignment 2
// Mansimran Kaur
function makeXHRCallForHTML(){ 

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "retain.html", true);

    xhr.onload=fuction(){
      if(xhr.status == 200){
        let el = document.getElementById("content")
        el.innerHTML= xhr.responseText;
      }
    };
  }
