function mainLoop() {}

function updateCamera() {
  document.querySelector(".mapcell.player").scrollIntoView({
    behavior: "smooth",
    block: "center",
    container: "nearest",
    inline: "center",
  });
}
function playerTurn() {}
function enemyTurn() {}


function reset() {
  player.progress = 0;
  player.inventory = [];
  player.seen = {};
  pois_lut_keys.forEach((item) => {
    player.seen[item] = 0;
  });
  document.querySelector(".maplayer").remove();
  map = new newMap(80, 60);
  map.create();
  renderMap(map);
  
}