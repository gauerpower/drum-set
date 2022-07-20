const drumName = $("#display");

function makeSound(letter) {
  switch (letter) {
    case "w":
      const crashCym = new Audio("sounds/crash-cym.mp3");
      crashCym.play();
      drumName.html("Crash Cymbal");
      break;
    case "a":
      const hhOpen = new Audio("sounds/hi-hat-open.mp3");
      hhOpen.play();
      drumName.html("Open Hi-Hat");
      break;
    case "s":
      const hhClosed = new Audio("sounds/hi-hat-closed.mp3");
      hhClosed.play();
      drumName.html("Closed Hi-Hat");
      break;
    case "d":
      const snareDrum = new Audio("sounds/snare-drum.mp3");
      snareDrum.play();
      drumName.html("Snare Drum");
      break;
    case "i":
      const rideCym = new Audio("sounds/ride-cym.mp3");
      rideCym.play();
      drumName.html("Ride Cymbal");
      break;
    case "j":
      const highTom = new Audio("sounds/high-tom.mp3");
      highTom.play();
      drumName.html("Small Rack Tom");
      break;
    case "k":
      const midTom = new Audio("sounds/mid-tom.mp3");
      midTom.play();
      drumName.html("Large Rack Tom");
      break;
    case "l":
      const lowTom = new Audio("sounds/low-tom.mp3");
      lowTom.play();
      drumName.html("Floor Tom");
      break;
    case "x":
      const hhFoot = new Audio("sounds/hi-hat-foot.mp3");
      hhFoot.play();
      drumName.html("Foot Hi-Hat");
      break;
    case " ":
      const bassDrum = new Audio("sounds/kick_drum.mp3");
      bassDrum.play();
      drumName.html("Bass Drum");
      break;
    default:
      break;
  }
}

function animateButton(key) {
  if (key == " ") {
    var activeButton = document.querySelector(".spacebar");
  } else {
    var activeButton = document.querySelector("."+key);
  }
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

$(".drum-pad").click(function () {
  let buttonText = this.innerHTML;
  if (this.innerHTML === "spacebar") {
    buttonText = " ";
  }
  makeSound(buttonText);
  animateButton(buttonText);
});

$(document).keydown(function (event) {
  makeSound(event.key);
  animateButton(event.key);
});
