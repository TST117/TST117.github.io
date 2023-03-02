//selectors - const is used for these.
const p1 = {
  score: 0,
  button: document.querySelector("#p1_button"),
  display: document.querySelector("#p1_score_text"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2_button"),
  display: document.querySelector("#p2_score_text"),
};

const reset_button = document.querySelector("#reset");
const play_to = document.querySelector("#play_to");

//global variables
let winning_score = 3;
let game_over = false;

//functions

function update_scores(player, opponent) {
  if (!game_over) {
    player.score += 1;
    if (player.score === winning_score) {
      game_over = true;
      player.display.classList.add("winner");
      opponent.display.classList.add("loser");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

/*on click of p1_button, increase p1_score by 1 and change the text of
p1_score_text to whatever p1_score currently is, the if statement stops this
if the winning_score variable is reached.*/
p1.button.addEventListener("click", function () {
  update_scores(p1, p2);
});

/*on click of p2_button, increase p1_score by 1 and change the text of
p2_score_text to whatever p2_score currently is, the if statement stops this
if the winning_score variable is reached.*/
p2.button.addEventListener("click", function () {
  update_scores(p2, p1);
});

play_to.addEventListener("change", function () {
  winning_score = parseInt(this.value);
  reset();
});

reset_button.addEventListener("click", reset);

function reset() {
  game_over = false;
  p1.score = 0;
  p2.score = 0;
  p1.display.textContent = p1.score;
  p2.display.textContent = p2.score;
  p1.display.classList.remove("winner", "loser");
  p2.display.classList.remove("winner", "loser");
  p1.button.disabled = false;
  p2.button.disabled = false;
}
