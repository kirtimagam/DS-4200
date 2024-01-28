const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/playlist.png") {
    myImage.setAttribute("src", "images/note.png");
  } else {
    myImage.setAttribute("src", "images/playlist.png");
  }
};


document.getElementById('myButton').addEventListener('click', function() {
  alert('Hope your day is going well!');
});

