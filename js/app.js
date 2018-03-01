// function Furry() {
//     this.x = 0;
//     this.y = 0;
//     this.direction = "right";
// }

// function Coin() {
//     this.x = Math.floor(Math.random() * 10);
//     this.y = Math.floor(Math.random() * 10);
// }


// function Game() {
//     this.board = document.getElementById("board").querySelectorAll("div");
//     this.furry = new Furry();
//     this.coin = new Coin();
//     this.score = 0;
//     var self = this;
//
//     this.index = function (x, y) {
//         return x + (y * 10);
//     }
//     this.showFurry = function () {
//         this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
//     }
//
//     this.hideVisibleFurry = function () {
//         var findDivClass = document.querySelector('.furry');
//         findDivClass.classList.remove("furry");
//     }
//
//     this.hideVisibleCoin = function () {
//         var findDivCoin = document.querySelector('.coin');
//         findDivCoin.classList.remove("coin");
//     }
//
//     this.showCoin = function () {
//         this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
//     }
//
//     this.moveFurry = function () {
//         this.hideVisibleFurry();
//         // this.showFurry();
//         if (this.furry.direction === "right") {
//             this.furry.x = this.furry.x + 1;
//         } else if (this.furry.direction === "left") {
//             this.furry.x = this.furry.x - 1;
//         } else if (this.furry.direction === "up") {
//             this.furry.y = this.furry.y + 1;
//         } else if (this.furry.direction === "down") {
//             this.furry.y = this.furry.y - 1;
//         };
//         this.gameOver();
//         this.showFurry();
//         this.checkCoinCollision();
//     }
//     this.turnFurry = function (event) {
//         switch (event.which) {
//             case 37:
//                 this.furry.direction = 'left';
//                 break;
//             case 39:
//                 this.furry.direction = 'right';
//                 break;
//             case 40:
//                 this.furry.direction = 'up';
//                 break;
//             case 38:
//                 this.furry.direction = 'down';
//                 break;
//         }
//     }
//
//     this.checkCoinCollision = function () {
//         if (this.furry.x === this.coin.x && this.furry.y === this.coin.y)
//         {
//             document.getElementById("smoke").play();
//             this.hideVisibleCoin();
//             var score = document.querySelector("strong");
//             score.textContent = parseInt(score.textContent)+1;
//             this.coin = new Coin();
//             this.showCoin();
//         }
//
//     }
//
//     this.gameOver = function () {
//         if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9){
//             document.getElementById("scream").play();
//             clearInterval(this.idSetInterval);
//             this.hideVisibleCoin();
//             document.querySelector("#board").classList.add("invisible");
//             document.querySelector("#score").classList.add("invisible");
//
//             document.querySelector("#over").classList.remove("invisible");
//             // var smoked = document.querySelector("span");
//             // smoked.innerText = this.score;
//             this.hideVisibleFurry();
//         };
//     }
//
//     this.startGame = function () {
//         this.idSetInterval = setInterval(()=> {
//             this.showFurry();
//         this.showCoin();
//         self.moveFurry();
//     }, 150);
//     }
//
//
// }

var Game = require("./game.js");

document.addEventListener('keydown', function (event) {
    Game.turnFurry;
});


var game = new Game();
document.addEventListener('keydown', function (event) {
    game.turnFurry(event);
});
game.startGame();




var Game = require("./game.js");
