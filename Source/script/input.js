/*window.addEventListener(
  "keydown",
  function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
    switch (event.code) {
      case "ArrowDown":
      case "Numpad2":
      case "KeyS":
        // code for "down arrow" key press.
        handleInput("down");
        break;
      case "ArrowUp":
      case "Numpad8":
      case "KeyW":
        // code for "up arrow" key press.
        handleInput("up");
        break;
      case "ArrowLeft":
      case "Numpad4":
      case "KeyA":
        // code for "left arrow" key press.
        handleInput("left");
        break;
      case "ArrowRight":
      case "Numpad6":
      case "KeyD":
        // code for "right arrow" key press.
        handleInput("right");
        break;
      case "Enter":
      case "Space":
      case "Numpad5":
        // code for "confirm" key press.
        handleInput("confirm");
        break;
      case "KeyL":
      case "KeyT":
        handleInput("target");
        break;
      case "Escape":
        handleInput("escape");
        break;
      case "Digit1":
        handleInput(1);
        break;
      case "Digit2":
        handleInput(2);
        break;
      case "Digit3":
        handleInput(3);
        break;
      case "Digit4":
        handleInput(4);
        break;
      case "Digit5":
        handleInput(5);
        break;
      case "Digit6":
        handleInput(6);
        break;
      case "Digit7":
        handleInput(7);
        break;
      case "Digit8":
        handleInput(8);
        break;
      case "Digit9":
        handleInput(9);
        break;
      case "Digit0":
        handleInput(0);
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  },
  true
);
// the last option dispatches the event to the listener first,
// then dispatches event to window
/*
let touchstartX, touchstartY, x_delta, y_delta, numfingers;

window.addEventListener(
  "touchstart",
  function (event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
  },
  false
);

window.addEventListener(
  "touchend",
  function (event) {
    x_delta = event.changedTouches[0].screenX - touchstartX;
    y_delta = event.changedTouches[0].screenY - touchstartY;
    numfingers = event.targetTouches.length + 1;
    handleGesture();
  },
  false
);*/
/*
function handleGesture() {
  const swipedist = 80;
  if (Math.abs(x_delta) > Math.abs(y_delta) && Math.abs(x_delta) > swipedist) {
    if (x_delta > 0) {
      // swiped right
      handleInput("right");
    }
    if (x_delta < 0) {
      // swiped left
      handleInput("left");
    }
  } else if (
    Math.abs(x_delta) < Math.abs(y_delta) &&
    Math.abs(y_delta) > swipedist
  ) {
    if (y_delta > 0) {
      // swiped down
      handleInput("down");
    }
    if (y_delta < 0) {
      // swiped up
      handleInput("up");
    }
  } else if (x_delta < swipedist * 0.5 && y_delta < swipedist * 0.5) {
    if (numfingers == 1) {
      handleInput("confirm");
    } else if (numfingers == 2) {
      handleInput("escape");
    }
  } else {
  }
}
*/
/*function handleInput(key) {
  let newX = player.x,
    newY = player.y;
  if (key == "up") {
    newY--;
  } else if (key == "right") {
    newX++;
  } else if (key == "down") {
    newY++;
  } else if (key == "left") {
    newX--;
  }
  player.move(newX, newY);
}*/

window.addEventListener("resize", (event) => {
  updateCamera();
});

