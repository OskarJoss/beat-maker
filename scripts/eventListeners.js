"use_strict";

function mousePressed() {
  soundIcons.forEach((soundIcon) => {
    soundIcon.clicked();
  });

  player.clicked();
}

function keyPressed() {
  if (keyCode === 32) {
    isPlaying = !isPlaying;
  }
}
