class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.07;

    cars = [car1, car2];
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play() {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      image(track, 0, -height * 5, width, height * 6);
/*We need to set the position of the players (cars) based on
the position from the database.
We will use player.getDistance() to get the positions of 
the players (cars) from the database. These functions, we
will write later in the session.
For now, I will create a variable index as var index = 0.
We will use the for-in loop to extract the positions of the
players from the allPlayers object. 
In the first iteration, plr value will be player1 and next iteration, plr value will be player2.
The for-in loop runs for a number of elements in the object.
Here allPlayers variables contain the information of all the
players, but we need to extract the info of each player so that we can set their position.
So we write for(var plr in allPlayers).
Inside the for loop, we need to manually increase the index
by one. We need to define 2 variables x and y to store the
positions.
To access the data from the allPlayers object we write the
name of the object[plr].positionX. This value will go in
var x.
The same process we will do for the y-direction but we
need to subtract the y position from the height because we
want to place the player at the bottom of the screen.
Then we need to set these positions to the position of the
car's sprite as well. ‘Cars’ is an array containing 2 car
sprites; we need to set the position to both of them.
The index value is 1 now, but we need to keep it 0
because the first element of the array is at 0. That's why
we need to subtract 1 from the index.
Hence using cars[index-1] we assign x and y positions to
each car.
*/


       //index of the array
      // var index = 0;
      // for (var plr in allPlayers) {
         //add 1 to the index for every loop
      //   index = index + 1;

        //use data form the database to display the cars in x and y direction
      //   var x = allPlayers[plr].positionX;
      //   var y = height - allPlayers[plr].positionY;

      //   cars[index - 1].position.x = x;
      //   cars[index - 1].position.y = y;

/*Let's draw a small circle below the playerCar to highlight the active player in a window.
We identify the current player by matching index with player.index inside the condition -
if(index===player.index).
Give instructions to add the circle at the x and y position of the car using ellipse() when the condition is
true.
We can also use fill() to make an identifier red in color and stroke() to give its border width.
*/

        // if (index === player.index) {
        //   stroke(10);
        //   fill("red");
        //   ellipse(x, y, 60, 60);

        /*When we keep pressing the up arrow till the car goes out of the screen and we are not able to see the cars.
All the players see the same thing in the game. This is where the concept of a Game Camera comes in.
The game camera allows us to change how and from where we are viewing the game.
We want the Game Camera to be focused on each player's car. We can set the camera position in the game
differently for each player.
Here we are setting the camera position x and position y 
according to the player’s car position. We will restrict the
movement of cars to stay on track. For that, we can keep
the x position of the camera to align with the x position of a
car. Our cars move forward, so we will align the position of the camera with the position of the car.
*/


          // Changing camera position in y direction
          // camera.position.x = cars[index - 1].position.x;
          // camera.position.y = cars[index - 1].position.y;
      //   }
      // }
          this.handlePlayerControls();

      drawSprites();
      
    }
  }
 
  

 /* The condition checks for the keypress event and once the
key is pressed we are changing the y position of the player
and we are calling the player.update() function so that player’s position will be updated in the database.
We have called the update method here but we need to write this method in the player class.*/

  handlePlayerControls() {
    // handling keyboard events
    if (keyIsDown(UP_ARROW)) {
      player.positionY += 10;
      player.update();
    }
  }
}
