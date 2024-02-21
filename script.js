//Get the query string parameter
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const section = params.get("section");

// Smooth scrolling based on section parameter
if (section === "projects") {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
} else if (section === "skills") {
  document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
}


document.addEventListener("DOMContentLoaded", function () {
  var toggleElements = document.querySelectorAll(".toggle");

  toggleElements.forEach(function (element) {
      element.addEventListener("click", function () {
          var siblingElements = this.parentElement.querySelectorAll(".hidden");

          siblingElements.forEach(function (sibling) {
              sibling.style.display = (sibling.style.display === "none" || sibling.style.display === "") ? "block" : "none";
          });
      });
  });
});

