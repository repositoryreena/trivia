// Function to navigate to the respective trivia page
function goToTriviaPage(category) {
    localStorage.setItem('selectedCategory', category);
    window.location.href = `${category}.html`;
  }
  
  // Wait for the page to load before adding event listeners to buttons
  document.addEventListener('DOMContentLoaded', () => {
    const generalKnowledgeButton = document.getElementById('generalKnowledgeButton');
    generalKnowledgeButton.addEventListener('click', () => {
      goToTriviaPage('generalknowledge');
    });
  
    const computersButton = document.getElementById('computersButton');
    computersButton.addEventListener('click', () => {
      goToTriviaPage('computers');
    });
  
    const booksButton = document.getElementById('booksButton');
    booksButton.addEventListener('click', () => {
      goToTriviaPage('books');
    });
  
    const filmButton = document.getElementById('filmButton');
    filmButton.addEventListener('click', () => {
      goToTriviaPage('film');
    });
  
    const musicButton = document.getElementById('musicButton');
    musicButton.addEventListener('click', () => {
      goToTriviaPage('music');
    });
  
    // const musicalsButton = document.getElementById('musicalsButton');
    // musicalsButton.addEventListener('click', () => {
    //   goToTriviaPage('musicals');
    // });
  
    const televisionButton = document.getElementById('televisionButton');
    televisionButton.addEventListener('click', () => {
      goToTriviaPage('television');
    });
  
    const videoGamesButton = document.getElementById('videoGamesButton');
    videoGamesButton.addEventListener('click', () => {
      goToTriviaPage('videogames');
    });
  
    const boardGamesButton = document.getElementById('boardGamesButton');
    boardGamesButton.addEventListener('click', () => {
      goToTriviaPage('boardgames');
    });
  
    const scienceNatureButton = document.getElementById('scienceNatureButton');
    scienceNatureButton.addEventListener('click', () => {
      goToTriviaPage('science-nature');
    });
  
    const mathButton = document.getElementById('mathButton');
    mathButton.addEventListener('click', () => {
      goToTriviaPage('math');
    });
  
    const mythologyButton = document.getElementById('mythologyButton');
    mythologyButton.addEventListener('click', () => {
      goToTriviaPage('mythology');
    });
  
    const sportsButton = document.getElementById('sportsButton');
    sportsButton.addEventListener('click', () => {
      goToTriviaPage('sports');
    });
  
    const geographyButton = document.getElementById('geographyButton');
    geographyButton.addEventListener('click', () => {
      goToTriviaPage('geography');
    });
  
    const historyButton = document.getElementById('historyButton');
    historyButton.addEventListener('click', () => {
      goToTriviaPage('history');
    });
  
    const politicsButton = document.getElementById('politicsButton');
    politicsButton.addEventListener('click', () => {
      goToTriviaPage('politics');
    });
  
    // const artButton = document.getElementById('artButton');
    // artButton.addEventListener('click', () => {
    //   goToTriviaPage('art');
    // });
  
    const celebritiesButton = document.getElementById('celebritiesButton');
    celebritiesButton.addEventListener('click', () => {
      goToTriviaPage('celebrities');
    });
  
    const animalsButton = document.getElementById('animalsButton');
    animalsButton.addEventListener('click', () => {
      goToTriviaPage('animals');
    });
  
    const vehiclesButton = document.getElementById('vehiclesButton');
    vehiclesButton.addEventListener('click', () => {
      goToTriviaPage('vehicles');
    });
  
    const comicsButton = document.getElementById('comicsButton');
    comicsButton.addEventListener('click', () => {
      goToTriviaPage('comics');
    });
  
    // const gadgetsButton = document.getElementById('gadgetsButton');
    // gadgetsButton.addEventListener('click', () => {
    //   goToTriviaPage('gadgets');
    // });
  
    const animeMangaButton = document.getElementById('animeMangaButton');
    animeMangaButton.addEventListener('click', () => {
      goToTriviaPage('anime-manga');
    });
  
    const cartoonAnimationsButton = document.getElementById('cartoonAnimationsButton');
    cartoonAnimationsButton.addEventListener('click', () => {
      goToTriviaPage('cartoon-animations');
    });
  });
  