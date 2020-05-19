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
