class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2 + 100;
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY
    });
  }
/*Let’s create the getDistance method inside the player.js file.
Here first we are getting the position values from the
database using database.ref(). Then we are storing the
data in the data variable. Data coming from the database
is in the form of a JavaScript object so you need to extract
the x and y position of the car.
Create 2 variables this.positionX and this.positionY and we
assign these to the x and y position values from the
database*/

  // getDistance() {
  //   var playerDistanceRef = database.ref("players/player" + this.index);
  //   playerDistanceRef.on("value", data => {
  //     var data = data.val();
  //     this.positionX = data.positionX;
  //     this.positionY = data.positionY;
  //   });
  // }

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }
/*create the update() method; in this, we are using playerIndex to update the x and y position of the player.
In the update() method, we are referring to player1 &
player2 to update their respective position on the canvas.
We use .ref() to refer to location in the database.
.update() is used to update an existing field in the database with a new value.
Here we are updating the x & y positions of the car.
*/

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      positionX: this.positionX,
      positionY: this.positionY,
 
    });
  }

  static getPlayersInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", data => {
      allPlayers = data.val();
    });
  }
}
