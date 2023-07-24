// Function to handle category button clicks
function handleCategoryClick(category) {
    // Store the selected category in localStorage
    localStorage.setItem('selectedCategory', category);
  
    // Redirect the user to the corresponding trivia game page for the selected category
    window.location.href = `${category}.html`;
  }
  
  // Wait for the page to load before attaching event listeners
  document.addEventListener('DOMContentLoaded', function () {
    // Get the General Knowledge button element
    const generalKnowledgeButton = document.getElementById('general-knowledge');
  
    // Attach click event listener to the General Knowledge button
    generalKnowledgeButton.addEventListener('click', function () {
      handleCategoryClick('generalknowledge');
    });
  });
  