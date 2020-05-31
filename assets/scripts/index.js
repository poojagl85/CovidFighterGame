function load_images(){
    virus = new Image();

    virus.src = "/assets/images/virus.png";

    hero  = new Image();
    hero.src = "/assets/images/superhero.jpg";

    gemm = new Image();
    gemm.src = "/assets/images/gem.jfif";
}




function init(){
      canvas = document.getElementById('mycanvas');
      pen = canvas.getContext('2d');
      game_Over = false;
      W = 1000;
      H = 565;

      canvas.width = W;
      canvas.height = H;

      e1 = {
        x : 150,
        y : 150,
        w : 50,
        h: 50,
        speed : 10, 
      }
      e2 = {
        x : 350,
        y : 350,
        w : 50,
        h: 50,
        speed : 10, 
      }
      e3 = {
        x : 600,
        y : 0,
        w : 50,
        h: 50,
        speed : 10, 
      }
      player = {
          x : 20,
          y : 300,
          w : 50,
          h : 50,
          moving : false,
          speed : 10,
          health : 100,
      }
      gem = {
        x : W - 80,
        y : 300,
        w : 50,
        h : 50,
       
    }

      enemy = [e1,e2,e3];
      
      canvas.addEventListener('mousedown',function(){
        //   console.log("Hello");
          player.moving = true;
      })

      canvas.addEventListener('mouseup',function(){
        // console.log("Hello");
        player.moving = false;
    })
}
function draw(){
    
 
     pen.clearRect(0,0,W,H);
     pen.fillStyle = "red";
    

     for(var  i = 0  ; i< enemy.length ; i++){
         pen.drawImage(virus, enemy[i].x,enemy[i].y, enemy[i].w, enemy[i].h);
     }

     pen.drawImage(hero,player.x , player.y , player.w ,player.h );

     pen.drawImage(gemm, gem.x , gem.y , gem.w , gem.h);
     


}
function isCollision(rect1 , rect2){
    if (rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.y + rect1.h > rect2.y) {
         // collision detected!
         return true;
     }

     return false;
}
function update(){

    for(var  i = 0 ;  i<enemy.length ; i++){
        if(isCollision(player,enemy[i])){
            player.health -= 50;
            if(player.health < 0){
                game_Over = true;
                alert("You lost : " + player.health );
            }
        }
    }

    if(isCollision(player,gem)){
        console.log("You win");
        alert("You win");
        game_Over = true;
    }

    

    if(player.moving){
        player.x += player.speed
        player.health += 20;
        }
    for(var  i = 0  ; i< enemy.length ; i++){
       if(enemy[i].y >= H - enemy[i].h || enemy[i].y < 0){
           enemy[i].speed *= -1;
       }
       enemy[i].y += enemy[i].speed;
    }


    

}
function gameloop(){

    if(game_Over){
        clearInterval(f);
    }
    draw();
    update();
}


load_images();
init();
var f = setInterval(gameloop,100);