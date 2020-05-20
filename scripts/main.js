"use_strict";

const FPS = 60;

let assets = [];
let isPlaying = false;
let bpm = 140;
let selectedSoundIcon;

let playPauseButton;

//instances of classes
let player;
let metronome;
let soundIcons;

function togglePlaying() {
  isPlaying = !isPlaying;
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  fill(236, 236, 236);
  frameRate(FPS);

  setupColors();
  setupSoundIcons();
  setupAssets();

  textAlign(CENTER, TOP);
  textSize(65);
  fill(122, 122, 122);
  textFont("vibro");
  text("beat-maker", width / 2, 30);

  player = new Player();

  noStroke();
  playPauseButton = createCheckbox("", false);
  playPauseButton.position(width / 2 - 65, height - 195);
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

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  isPlaying = false;
  player.resize();
  metronome.resize();
  metronome.getUpdateSpeed();
}
