// Get the query string parameter
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const section = params.get("section");

// Smooth scrolling based on section parameter
if (section === "projects") {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
} else if (section === "skills") {
  document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
}
