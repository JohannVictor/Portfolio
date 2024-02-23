// //Get the query string parameter
// const queryString = window.location.search;
// const params = new URLSearchParams(queryString);
// const section = params.get("section");

document.addEventListener('DOMContentLoaded', function () {
  // Get all elements with class 'toggle'
  const toggles = document.querySelectorAll('.toggle');

  // Add click event listener to each 'toggle' element
  toggles.forEach(toggle => {
      toggle.addEventListener('click', function () {
          // Toggle the 'hidden' class on the next siblings (image and description)
          const image = this.nextElementSibling;
          const description = image.nextElementSibling;

          image.classList.toggle('hidden');
          description.classList.toggle('hidden');
      });
  });
});

// // Smooth scrolling based on section parameter
// if (section === "projects") {
//   document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
// } else if (section === "skills") {
//   document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
// }


// document.addEventListener('DOMContentLoaded', function () {
//   const menuToggle = document.getElementById('menu-toggle');
//   const navigation = document.querySelector('.header');

//   menuToggle.addEventListener('click', function () {
//       navigation.classList.toggle('show-menu');
//   });
// });