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

