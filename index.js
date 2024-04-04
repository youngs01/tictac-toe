const boxes = document.querySelectorAll(".box");
const resultElement = document.querySelector(".result");
var turnO = true;

let gamePattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", function () {
        if (turnO) {
            box.style.color = "blue"
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.style.color = "red";
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        winCheck()
    })
})

function winCheck() {
    for (let pattern of gamePattern) {
        let pat1 = boxes[pattern[0]].innerHTML;
        let pat2 = boxes[pattern[1]].innerHTML;
        let pat3 = boxes[pattern[2]].innerHTML;

        if (pat1 != "" && pat2 != "" && pat3 != "") {
            if (pat1 == pat2 && pat2 == pat3) {
                resultElement.innerText = `Winner is ${pat1}`

            }
        }
    }
}

function reset() {
    boxes.forEach((box) => {
        box.innerText = "";
        resultElement.innerText = "winner is"
        box.disabled = false
    });
    turnO = true;
}

