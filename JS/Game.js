class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }

     start(){
        if(gameState === 0){
          // player = new Player();
          // var playerCountRef = await database.ref('playerCount').once("value");
          // if(playerCountRef.exists()){
          //   playerCount = playerCountRef.val();
          //   player.getCount();
          // }
          // form = new Form()
          // form.display();
          text("Hello", 200,200);
        } 
        // runner1 = createSprite(100,200);
        // runner1.addImage("runner1",runner1_img);
        // runner2 = createSprite(300,200);
        // runner2.addImage("runner2",runner2_img);
        // runner3 = createSprite(500,200);
        // runner3.addImage("runner3",runner3_img);
        // runners = [runner1, runner2, runner3];
    }

    // play(){
    //     form.hide();
        
    //     player.getPlayerInfo();
    //     player.getCarsAtEnd();
        
    //     if(allPlayers !== undefined){
    //       background(rgb(198,135,103));
    //       image(track, 0,-displayHeight*4,displayWidth, displayHeight*5)
    //       var index = 0;
    //       var x = 175 ;
    //       var y;
    
    //       for(var plr in allPlayers){
    //         index = index + 1 ;
    //         x = x + 200;
    //         y = displayHeight - allPlayers[plr].distance;
    //         cars[index-1].x = x;
    //         cars[index-1].y = y;
    
    //         if (index === player.index){
    //           stroke(10);
    //           fill('red');
    //           ellipse(x,y,60,60);
    //           camera.position.x = displayWidth/2;
    //           camera.position.y = cars[index-1].y;
    //         }
    //       } }
    
    //     if(keyIsDown(UP_ARROW) && player.index !== null){
    //       player.distance +=10
    //       player.update();
    //     }
    
    //     if(player.distance > 3860){
    //       gameState = 2;
    //       player.rank +=1
    //       Player.updateCarsAtEnd(player.rank);
    //       alert("Your Rank : " + player.rank);
    //     }
       
    //     drawSprites();
    //   }
    
    //   end(){
    //     console.log("Game Ended");
    //   }
}