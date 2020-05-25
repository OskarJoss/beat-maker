"use_strict";

const FPS = 60;
let bpm = 140;

let assets = [];
let isPlaying = false;
let bottomContainer;
let topContainer;
let soundIconsWrapper;
let selectedSoundIcon;
let soundIconToolTip;

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
  setupAssets();

  // Sound icons
  bottomContainer = createDiv("");
  bottomContainer.addClass("flex-container");
  soundIconToolTip = createDiv("").parent(bottomContainer);
  soundIconToolTip.addClass("tooltip");
  soundIconsWrapper = createDiv("").parent(bottomContainer);
  soundIconsWrapper.addClass("wrapper");
  soundIconsWrapper.size(width * 0.8, 120);
  setupSoundIcons();

  topContainer = createDiv("");
  topContainer.addClass("top-container");

  player = new Player();

  noStroke();
  playPauseButton = createCheckbox("", false);
  playPauseButton.position(width / 2 - playPauseButtonWidth / 2, height / 2);
  playPauseButton.mousePressed(togglePlaying);

  metronome = new Metronome();

  // BPM Slider
  slider = createSlider(10, 200, 140).parent(topContainer);
  slider.position(180, 80);
  displayBPM = createP().parent(topContainer);
  displayBPM.addClass("text");
  displayBPM.position(180, 5);
  slider.input(updateBPM);

  // Title
  title = createElement("h1").parent(topContainer);
  title.addClass("text");
  title.html("beat-maker");

  setupSaveAndLoadDivs();
}

function draw() {
  background(236, 236, 236);

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
