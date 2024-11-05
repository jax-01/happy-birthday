window.onload = () => {
  const flame = document.getElementById('flame');
  const birthdayMessage = document.getElementById('birthdayMessage');
  const birthdayCelebrant = document.getElementById('birthdayCelebrant');
  const candleSound = document.getElementById('candleSound');
  const birthdayMusic = document.getElementById('birthdayMusic');
  const startButton = document.getElementById('startButton');
  const startOverlay = document.getElementById('startOverlay');

  // Add a click event to the start button
  startButton.addEventListener('click', () => {
    // Hide the overlay after clicking start
    startOverlay.style.display = 'none';
    
    // Play the candle sound when the user interacts
    candleSound.play();

    // Set a timeout to extinguish the candle's flame and show the birthday message
    setTimeout(() => {
      // Stop the candle sound
      candleSound.pause();
      
      // Remove the flame
      flame.style.display = 'none';
      
      // Display the birthday message and play the music
      birthdayMessage.classList.remove('hidden');
      birthdayCelebrant.classList.remove('hidden');
      birthdayMusic.play();
    }, 3000); // Flame extinguishes after 3 seconds
  });
};