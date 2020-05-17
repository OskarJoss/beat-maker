"use_strict";

const FPS = 60;

let assets = [];
let isPlaying = false;
let bpm = 140;
let selectedSoundIcon;

//instanses of classes
let player;
let metronome;
let soundIcons;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  fill(255);
  frameRate(FPS);

  setupColors();
  setupSoundIcons();
  setupAssets();

  player = new Player();
  metronome = new Metronome();
}
