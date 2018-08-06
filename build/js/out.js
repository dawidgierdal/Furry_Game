/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Furry() {
    this.x = 0, this.y = 0, this.direction = "right";
}

function Coin() {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
}

function Game() {
    var _this = this;

    this.furry = new Furry(), this.coin = new Coin(), this.board = document.querySelectorAll("#board div"), this.score = 1, this.index = function (x, y) {
        return x + y * 10;
    }, this.showFurry = function () {
        this.hideVisibleFurry();
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
    }, this.hideVisibleFurry = function () {
        var visible = document.querySelector(".furry");
        if (visible !== null) {
            visible.classList.remove("furry");
        }
    }, this.showCoin = function () {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    }, this.moveFurry = function () {

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
    }, this.turnFurry = function (key) {
        switch (key) {
            case 37:
                _this.furry.direction = 'left';
                break;
            case 38:
                _this.furry.direction = 'down';
                break;
            case 39:
                _this.furry.direction = 'right';
                break;
            case 40:
                _this.furry.direction = 'up';
                break;
        };
    };

    this.checkCoinCollision = function () {
        if (document.querySelector(".furry") === document.querySelector(".coin")) {
            document.querySelector(".coin").classList.remove("coin");
            _this.coin = new Coin();
            _this.showCoin();

            document.querySelector("#score strong").innerText = _this.score++;
        }
    }, this.gameOver = function () {
        if (_this.furry.x < 0 || _this.furry.x > 9 || _this.furry.y < 0 || _this.furry.y > 9) {
            document.getElementById("board").classList.add("invisible");
            document.getElementById("game_over").classList.remove("invisible");
            _this.hideVisibleFurry();
            clearInterval(_this.idSetInterval);
            return true;
        }
        return false;
    }, this.startGame = function () {
        var _this2 = this;

        this.idSetInterval = setInterval(function () {
            _this2.moveFurry();
        }, 250), document.addEventListener('keydown', function (event) {
            _this2.turnFurry(event.which);
        });
    };
}
var g = new Game();
g.showFurry();
g.showCoin();
g.startGame();
g.hideVisibleFurry();

/***/ })
/******/ ]);
//# sourceMappingURL=out.js.map