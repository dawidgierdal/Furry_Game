function Furry() {
    this.x = 0,
        this.y = 0,
        this.direction = "right"
}

function Coin() {
    this.x = Math.floor(Math.random() * (10));
    this.y = Math.floor(Math.random() * (10));
}

function Game() {
    this.furry = new Furry(),
        this.coin = new Coin(),
        this.board = document.querySelectorAll("#board div"),
        this.score = 1,

        this.index = function (x, y) {
            return x + (y * 10);
        },

        this.showFurry = function () {
            this.hideVisibleFurry();
            this.board [this.index(this.furry.x, this.furry.y)].classList.add('furry');
        },

        this.hideVisibleFurry = function () {
            var visible = document.querySelector(".furry");
            if (visible !== null) {
                visible.classList.remove("furry");
            }
        },

        this.showCoin = function () {
            this.board [this.index(this.coin.x, this.coin.y)].classList.add('coin');
        },

        this.moveFurry = function () {

            if (this.furry.direction === "right") {
                this.furry.x = this.furry.x + 1;
            } else if (this.furry.direction === "left") {
                this.furry.x = this.furry.x - 1;
            } else if (this.furry.direction === "up") {
                this.furry.y = this.furry.y + 1;
            } else if (this.furry.direction === "down") {
                this.furry.y = this.furry.y - 1;
            }

            if (this.gameOver() === false) {
                this.showFurry();
                this.checkCoinCollision();
            };
        },

        this.turnFurry = (key) => {
            switch (key) {
                case 37:
                    this.furry.direction = 'left';
                    break;
                case 38:
                    this.furry.direction = 'down';
                    break;
                case 39:
                    this.furry.direction = 'right';
                    break;
                case 40:
                    this.furry.direction = 'up';
                    break;
            };

        };

    this.checkCoinCollision = () => {
        if (document.querySelector(".furry") === document.querySelector(".coin")) {
            document.querySelector(".coin").classList.remove("coin");
            this.coin = new Coin();
            this.showCoin();

            document.querySelector("#score strong").innerText = this.score++;
        }
    },

        this.gameOver = () => {
            if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
                document.getElementById("board").classList.add("invisible");
                document.getElementById("game_over").classList.remove("invisible");
                this.hideVisibleFurry();
                clearInterval(this.idSetInterval);
                return true;
            }
            return false;
        },

        this.startGame = function () {
            this.idSetInterval = setInterval(() => {
                this.moveFurry()
            }, 250),

                document.addEventListener('keydown', (event) => {
                    this.turnFurry(event.which);
                })
        };
}
const g = new Game();
g.showFurry();
g.showCoin();
g.startGame();
g.hideVisibleFurry();