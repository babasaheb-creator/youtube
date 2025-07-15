let buttons = document.querySelectorAll(".box");
let reset_button = document.querySelector("#reset_btn");

let msg = document.querySelector("#msg");
let new_game_btn = document.querySelector("#new_btn");
let msgContainer = document.querySelector(".msgcontainer");

let turnO = "true";

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
}

buttons.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWiner();
  });
});

const disabledBoxes=()=>
{
  for(let box of buttons)
  {
    box.disabled = true;
  }
}

const enableBoxes=()=>
{
  for(let box of buttons)
  {
    box.disabled = false;
    box.innerText = "";
  }
}

const showwinner = (winner) => {
  msg.innerText = `Congratulations ,winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};
const checkWiner = () => {
  for (let pattern of winpatterns) {
    let pos1 = buttons[pattern[0]].innerText;
    let pos2 = buttons[pattern[1]].innerText;
    let pos3 = buttons[pattern[2]].innerText;
    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        
        showwinner(pos1);
      }
    }
  }
};

// Check for a draw
  let isDraw = true;
      buttons.forEach((box) => {
        if (box.innerText === "") {
          isDraw = false;
        }
      });

      if (isDraw) {
        msg.innerText = "😅 It's a Draw!";
        msgContainer.classList.remove("hide");
      }
    


new_game_btn.addEventListener("click", resetGame);
reset_button.addEventListener("click", resetGame);