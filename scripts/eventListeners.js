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
}

function togglePlaying() {
  isPlaying = !isPlaying;
}
