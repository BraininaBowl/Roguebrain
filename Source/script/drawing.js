function renderMap(map) {
  const width = map.width;
  const height = map.height;

  let mapcontainer = document.querySelector(".mapcontainer");
  let maplayer = document.createElement("div");
  maplayer.classList = "maplayer layer hidden";
  maplayer.style.width = options.cellsize * width + "px";
  maplayer.style.height = options.cellsize * height + "px";

  for (let x = 0; x <= width; x++) {
    for (let y = 0; y <= height; y++) {
      let item = map.checkCell(x, y);
      if (item != undefined) {
        let mapcell = document.createElement("div");
        mapcell.classList = "cell mapcell " + item + " ";
        mapcell.innerHTML = items[item].icon;
        mapcell.style.width = options.cellsize + "px";
        mapcell.style.height = options.cellsize + "px";
        mapcell.style.left = x * options.cellsize + "px";
        mapcell.style.top = y * options.cellsize + "px";
        mapcell.style.color = "var(" + items[item].color + ")";
        maplayer.appendChild(mapcell);
      }
    }
  }

  mapcontainer.appendChild(maplayer);
}
