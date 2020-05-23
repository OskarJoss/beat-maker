"use_strict";

//does not account for being able to change number of beats or tracks
const saveLoop = () => {
  const tracks = {};

  for (let i = 0; i < player.tracks.length; i++) {
    tracks[i] = [];
    for (let j = 0; j < player.tracks[i].beats.length; j++) {
      tracks[i].push(player.tracks[i].beats[j].soundIcons);
    }
  }

  localStorage.setItem("savedLoop", JSON.stringify(tracks));
};

const loadLoop = () => {
  const tracks = JSON.parse(localStorage.getItem("savedLoop"));

  for (let i = 0; i < player.tracks.length; i++) {
    for (let j = 0; j < player.tracks[i].beats.length; j++) {
      player.tracks[i].beats[j].soundIcons = tracks[i][j];
    }
  }
};
