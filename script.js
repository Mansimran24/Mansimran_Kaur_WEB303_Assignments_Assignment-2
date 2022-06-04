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
  });
