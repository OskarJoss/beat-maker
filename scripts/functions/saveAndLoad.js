"use_strict";

const saveLoop = (loopName) => {
  if (localStorage.getItem("loops") === null) {
    const emptyObject = {};
    localStorage.setItem("loops", JSON.stringify(emptyObject));
  }

  const savedLoops = JSON.parse(localStorage.getItem("loops"));
  const loop = {};
  const tracks = {};

  for (let i = 0; i < player.tracks.length; i++) {
    tracks[i] = [];
    for (let j = 0; j < player.tracks[i].beats.length; j++) {
      tracks[i].push(player.tracks[i].beats[j].soundIcons);
    }
  }

  loop.tracks = tracks;
  savedLoops[loopName] = loop;

  localStorage.setItem("loops", JSON.stringify(savedLoops));
};

const loadLoop = (loopName) => {
  if (localStorage.getItem("loops") === null) {
    return;
  }

  const savedLoops = JSON.parse(localStorage.getItem("loops"));
  const loop = savedLoops[loopName];

  for (let i = 0; i < player.tracks.length; i++) {
    for (let j = 0; j < player.tracks[i].beats.length; j++) {
      player.tracks[i].beats[j].soundIcons = loop.tracks[i][j];
    }
  }
};

const setupSaveAndLoadDivs = () => {
  saveDiv = createDiv("save as: ");
  const saveInput = createInput("").parent(saveDiv);
  const saveBtn = createButton("save").parent(saveDiv);
  const saveCancelBtn = createButton("cancel").parent(saveDiv);

  saveDiv.hide();
  saveDiv.position(height / 2 - 300, width / 2 - 300);
  saveDiv.style("background-color", color(136, 136, 136));
  saveDiv.style("color", color(0, 0, 0));
  saveDiv.size(300, 300);

  saveBtn.mouseClicked(() => {
    saveLoop(saveInput.value());
    saveDiv.hide();
  });

  saveCancelBtn.mouseClicked(() => {
    saveDiv.hide();
  });

  loadDiv = createDiv("load: ");
  loadDiv.hide();
  loadDiv.position(height / 2 - 300, width / 2 - 300);
  loadDiv.style("background-color", color(136, 136, 136));
  loadDiv.style("color", color(0, 0, 0));
  loadDiv.size(300, 300);

  let savedLoops;

  if (localStorage.getItem("loops") !== null) {
    savedLoops = JSON.parse(localStorage.getItem("loops"));

    Object.keys(savedLoops).forEach((key) => {
      const div = createDiv(key).parent(loadDiv);

      div.mouseClicked(() => {
        loadLoop(div.elt.innerHTML);
        loadDiv.hide();
      });
    });
  }

  const loadCancelBtn = createButton("cancel").parent(loadDiv);

  loadCancelBtn.mouseClicked(() => {
    loadDiv.hide();
  });
};
