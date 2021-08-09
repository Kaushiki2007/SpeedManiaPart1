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
        'gameState': state
      });
    }

    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
          
        } 
        runner1 = createSprite(100,100);
        runner1.addImage("runner1",runner1_img);
        runner2 = createSprite(100,300);
        runner2.addImage("runner2",runner2_img);
        runner3 = createSprite(100,500);
        runner3.addImage("runner3",runner3_img);
        runner4 = createSprite(100,700);
        runner4.addImage("runner3",runner4_img);
        runners = [runner1, runner2, runner3,runner4];
    }

    play(){
        form.hide();
        
        Player.getPlayerInfo();
        player.getPlayersAtEnd();
        
        if(allPlayers !== undefined){
          background(rgb(198,135,103));
          image(track, 0, width/2,width*4, height)
          var index = 0;
          var x;
          var y = 175;
    
          for(var plr in allPlayers){
            index = index + 1 ;
            y = y + 200;
            x = width - allPlayers[plr].distance;
            runners[index-1].x = x;
            runners[index-1].y = y;
    
            if (index === player.index){
              stroke(10);
              fill('red');
              ellipse(x,y,60,60);
              camera.position.y = height/2;
              camera.position.x = runners[index-1].x;
            }
          } }
    
        if(keyIsDown(RIGHT_ARROW) && player.index !== null){
          player.distance +=30;
          player.update();
        }
    
        if(player.distance > 3860){
          gameState = 2;
          player.rank +=1
          Player.updatePlayersAtEnd(player.rank);
          alert("Your Rank : " + player.rank);
        }
       
        drawSprites();
      }
    
      end(){
        console.log("Game Ended");
      }
}