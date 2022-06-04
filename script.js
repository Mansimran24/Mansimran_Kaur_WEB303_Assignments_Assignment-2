// WEB303 Assignment 2
// Mansimran Kaur
$(document).ready(function () {
    $("#prospect").on("click", function () {
      let abcd = new XMLHttpRequest();
  
      abcd.open("GET", "prospect.html", true);
  
      abcd.onload = function () {
        if (abcd.status == 200) {
          let Pro = document.getElementById("content");
          Pro.style.display = "block";
          Pro.innerHTML = abcd.responseText;
        }
      };
      abcd.send();
    });
    $("#convert").on("click", function () {
        let abcd = new XMLHttpRequest();
    
        abcd.open("GET", "convert.html", true);
    
        abcd.onload = function () {
          if (abcd.status == 200) {
            let convrt = document.getElementById("content");
            convrt.style.display = "block";
            convrt.innerHTML =abcd.responseText;
          }
        };
        abcd.send();
      });
      $("#retain").on("click", function () {
        let abcd = new XMLHttpRequest();
    
        abcd.open("GET", "retain.html", true);
    
        abcd.onload = function () {
          if (abcd.status == 200) {
            let ret = document.getElementById("content");
            ret.style.display = "block";
            ret.innerHTML = abcd.responseText;
          }
        };
        abcd.send();
      });
  
    
  });
