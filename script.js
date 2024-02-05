// Haetaan kaikki kuvat ja laitetaan ne taulukkoon
var allImages = document.querySelectorAll('#allImages img');

function rollDice() {
    // Arvotaan satunnaisluku välillä 0-5 (indeksit taulukossa)
    var randomNumber = Math.floor(Math.random() * 6);

    // Päivitetään nopan kuva
    var diceImage = document.getElementById('diceImage');
    diceImage.src = allImages[randomNumber].src;
}
