"use_strict";

const FPS = 60;
let bpm = 140;

let assets = [];
let isPlaying = false;
let selectedSoundIcon;

let playPauseButton;
const playPauseButtonWidth = 130;
const beatDivMargin = 5;
let slider;
let saveDiv;
let loadDiv;

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

  // Title
  title = createElement("h1");
  title.addClass("text");
  title.html("beat-maker");
  title.position(width - 410, 0);

  player = new Player();

  noStroke();
  playPauseButton = createCheckbox("", false);
  playPauseButton.position(width / 2 - playPauseButtonWidth / 2, height - 195);
  playPauseButton.mousePressed(togglePlaying);

  metronome = new Metronome();

  // BPM Slider
  slider = createSlider(10, 200, 140);
  slider.position(180, 80);
  displayBPM = createP();
  displayBPM.addClass("text");
  displayBPM.position(180, 5);
  slider.input(updateBPM);

  // Sound icons
  // All sound icons need to be children inside of flex wrapper

  // soundIconsWrapper = createDiv("");
  // soundIconsWrapper.addClass("flex-wrapper");
  // let sounds = selectAll(".sound-icon");
  // console.log(sounds);
  // soundIconsWrapper.child(sounds);

  setupSaveAndLoadDivs();
}

function draw() {
  background(236, 236, 236);

  soundIcons.forEach((soundIcon) => {
    soundIcon.show();
  });

  player.show();
  slider.show();

  displayBPM.html("bpm: " + slider.value());

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

function updateBPM() {
  bpm = slider.value();
  metronome.update();
  metronome.getUpdateSpeed();
  console.log(bpm);
}
