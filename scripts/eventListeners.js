"use_strict";

function mousePressed() {
  if (keyIsDown(SHIFT)) {
    player.shiftClicked();
  } else {
    player.clicked();
  }
}

function keyPressed() {
  if (keyCode === 32) {
    isPlaying = !isPlaying;
  }

  if (keyCode === 83) {
    loadDiv.hide();
    saveDiv.show();
    // saveLoop();
  }

  if (keyCode === 76) {
    saveDiv.hide();
    loadDiv.show();
    // loadLoop();
  }
}

function togglePlaying() {
  isPlaying = !isPlaying;
}
