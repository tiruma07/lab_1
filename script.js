document.addEventListener("DOMContentLoaded", function () {
    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");
    const result = document.getElementById("result");
    const playButton = document.getElementById("playButton");

    playButton.addEventListener("click", function () {
        const random1 = Math.floor(Math.random() * 3) + 1;
        const random2 = Math.floor(Math.random() * 3) + 1;

        const choices = {
            1: "rock",
            2: "scissor",
            3: "paper"
        };

        image1.setAttribute("src", "images/" + choices[random1] + ".png");
        image2.setAttribute("src", "images/" + choices[random2] + ".png");

        if (random1 === random2) {
            result.textContent = "It's a tie!";
        } else if ((random1 === 1 && random2 === 3) || (random1 === 2 && random2 === 1) || (random1 === 3 && random2 === 2)) {
            result.textContent = "Player 1 wins!";
        } else {
            result.textContent = "Player 2 wins!";
        }
    });
});
