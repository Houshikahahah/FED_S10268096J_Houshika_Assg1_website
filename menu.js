// Typing effect for the search bar
const searchInput = document.getElementById("searchInput");
const words = ["Foods", "Drinks", "Stores"]; // Words to cycle through
let wordIndex = 0; // Index of the current word
let charIndex = 0; // Index of the current character
let isDeleting = false; // Tracks if backspacing
let typingSpeed = 150; // Typing speed in milliseconds
let deletingSpeed = 100; // Deleting speed in milliseconds
let delayBetweenWords = 1000; // Delay before switching to next word

function type() {
  if (!searchInput) return; // Ensure the input exists

  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    // Remove characters if deleting
    charIndex--;
  } else {
    // Add characters if typing
    charIndex++;
  }

  // Update the placeholder with "Search " + the typed portion of the current word
  searchInput.placeholder = `Search ${currentWord.substring(0, charIndex)}`;

  if (!isDeleting && charIndex === currentWord.length) {
    // When a word is fully typed, start deleting after a delay
    setTimeout(() => (isDeleting = true), delayBetweenWords);
  } else if (isDeleting && charIndex === 0) {
    // When word is fully deleted, move to the next word
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // Loop to the first word
  }

  // Adjust speed based on typing or deleting
  const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
  setTimeout(type, currentSpeed);
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", type);