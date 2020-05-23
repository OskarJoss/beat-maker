"use_strict";

function mousePressed() {
  soundIcons.forEach((soundIcon) => {
    soundIcon.clicked();
  });

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
    saveLoop();
  }

  if (keyCode === 76) {
    loadLoop();
  }
}

function togglePlaying() {
  isPlaying = !isPlaying;
}
