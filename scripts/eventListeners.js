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
    //save
  }

  if (keyCode === 76) {
    //load
  }
}

function togglePlaying() {
  isPlaying = !isPlaying;
}
