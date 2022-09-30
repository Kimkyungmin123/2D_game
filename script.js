// load event : files when the whole page has been loaded, including all dependent resources such as stylesheets and images
window.addEventListener("load", function () {
  // canvas setup
  const canvas = document.getElementById("canvas1");

  // drowing context : a built in odject that contains all methods and properties that allow us to draw and
  // animate colours, shapes and other araphics on HTML canvas
  const ctx = canvas.getContext("2d");

  canvas.width = 500;
  canvas.height = 500;

  class InputHandler {
    constructor(game) {
      this.game = game;
      // Regular Function ->ERROR
      window.addEventListener("keydown", (e) => {
        if (
          (e.key === "ArrowUp" || e.key === "ArrowDown") &&
          this.game.keys.indexOf(e.key) === -1
        ) {
          this.game.keys.push(e.key);
        }

        console.log("ArrowUp", this.game.keys);
      });
      window.addEventListener("keyup", (e) => {
        if (this.game.keys.indexOf(e.key) > -1) {
          this.game.keys.splice(this.game.keys.indexOf(e.key), 1);
          console.log("keyup", this.game.keys);
        }
      });
    }
  }

  class projectTile {}

  class Particle {}

  class Player {
    constructor(game) {
      this.game = game;
      this.width = 120;
      this.height = 190;
      this.x = 20;
      this.y = 100;
      this.speedY = 0; // orientation settings (up, down)  + -
      this.maxSpeed = 2;
    }
    update() {
      if (this.game.keys.includes("ArrowUp")) this.speedY = -this.maxSpeed;
      else if (this.game.keys.includes("ArrowDown"))
        this.speedY = this.maxSpeed;
      else this.speedY = 0;
      this.y += this.speedY;
    }
    draw(context) {
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  class Enemy {}

  class Layer {}

  class Background {}

  class UI {}

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.player = new Player(this);
      this.input = new InputHandler(this);
      this.keys = [];
    }
    update() {
      this.player.update();
    }
    draw(context) {
      this.player.draw(context);
    }
  }

  const game = new Game(canvas.width, canvas.height);
  // animate loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update();
    game.draw(ctx);

    // requestAnimationFrame() : tells the broswer that we wish to perform an animation and it requests that the browser calls a specified
    // function to update an animation before the next repaint.
    requestAnimationFrame(animate);
  }
  animate();
});
