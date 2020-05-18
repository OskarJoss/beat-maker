"use_strict";

const FPS = 60;

let assets = [];
let isPlaying = false;
let bpm = 140;
let selectedSoundIcon;

let playPauseButton;

//instanses of classes
let player;
let metronome;
let soundIcons;

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

function togglePlaying() {
  isPlaying = !isPlaying;
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  fill(255);
  frameRate(FPS);

  setupColors();
  setupSoundIcons();
  setupAssets();

  player = new Player();
  player.updateMetronome();

  noStroke();
  playPauseButton = createCheckbox("", false);
  playPauseButton.position(width / 2 - 65, height / 2 - 65);
  playPauseButton.mousePressed(togglePlaying);
  metronome = new Metronome();
}

function draw() {
  soundIcons.forEach((soundIcon) => {
    soundIcon.show();
  });

  player.show();

  if (isPlaying) {
    player.play();
    metronome.update();
  } else {
    player.reset();
    metronome.reset();
  }
}
