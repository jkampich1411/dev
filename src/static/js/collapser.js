function collapser_(element, element2) {
  var coll = element;
  var i;

  for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
/*
          this.classList.toggle("active");
          var content = document.getElementsByClassName("collapser-content");
          if (content.style.display === "block") {
              content.style.display = "none";
          } else {
              content.style.display = "block";
          } */alert(element2);
      });
  }
}