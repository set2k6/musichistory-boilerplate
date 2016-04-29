// Use JavaScript arrays, loops, and innerHTML to show the music you love.

// Students must use JavaScript to create a list of songs in the index.html file for their Music History project. Have them download the songs.js file, which contains an array of strings with song information.

// Each student must add one song to the beginning and the end of the array.
// Loop over the array and remove any words or characters that obviously don't belong.
// Students must find and replace the > character in each item with a - character.
// Must add each string to the DOM in index.html in the main content area.

// {Song name} by {Artist} on the album {Album}

var songs = [];
var newSongs = [];
var text = "";
var loopCount= 5;

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("Legs");
songs.unshift("The Logical Song");
var newSongs = document.getElementById("songContainer");

for (var loopTracker = 0; loopTracker < songs.length; loopTracker += 1) {
  songs[loopTracker] = songs[loopTracker].replace("*", "");
  songs[loopTracker] = songs[loopTracker].replace("@", "");
  songs[loopTracker] = songs[loopTracker].replace("(", "");
  songs[loopTracker] = songs[loopTracker].replace("!", "");
  songs[loopTracker] = songs[loopTracker].replace(">", "-");
  newSongs.innerHTML += "<p>" + songs[loopTracker] + "</p>";
};

console.log("Music: " + (loopTracker +1) + " " + songs[loopTracker]);





console.log("songs",songs);
