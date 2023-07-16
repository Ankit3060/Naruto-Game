
score = 0;
cross = true;

audio = new Audio("Naruto .mp3");
audiogo = new Audio("gameover.mp3");
setTimeout(() => {
    audio.play();
}, 1000);


//Key press function
document.onkeydown = function(e){
    if(e.keyCode==32 )
    {
        naruto = document.querySelector(".naruto");
        naruto.classList.add("animateNaruto");
        setTimeout(()=>{
            naruto.classList.remove("animateNaruto");
        },700);
    }
    if(e.keyCode==39 )
    {
        naruto = document.querySelector(".naruto");
        narutoX = parseInt(getComputedStyle(naruto,null).getPropertyValue("left"));
        naruto.style.left = narutoX + 112 +"px";
    }
    if(e.keyCode==37 )
    {
        naruto = document.querySelector(".naruto");
        narutoX = parseInt(getComputedStyle(naruto,null).getPropertyValue("left"));
        naruto.style.left = (narutoX - 112)+"px";
    }
}

//collison code

setInterval(()=>{
    naruto = document.querySelector(".naruto");
    gameOver = document.querySelector(".gameOver");
    obstacle = document.querySelector(".obstacle");

    dx=window.parseInt(getComputedStyle(naruto,null).getPropertyValue("left"));
    dy=window.parseInt(getComputedStyle(naruto,null).getPropertyValue("top"));

    ox=window.parseInt(getComputedStyle(obstacle,null).getPropertyValue("left"));
    oy=window.parseInt(getComputedStyle(obstacle,null).getPropertyValue("top"));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    // console.log(offsetX , offsetY);
    if(offsetX<113 && offsetY<52){
        gameOver.innerHTML = "Game Over - reload"
        obstacle.classList.remove("obstacleAni");
        // naruto = document.querySelector("naruto");
        // naruto.classList.add("narutoOver");
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
        
    }
    else if(offsetX<145 && cross){
        score += 1;
        updateScore(score); 
        cross = false;
        setTimeout(() => {
            cross =true;
        }, 700);
        setTimeout(() => {
            aniDur = parseFloat(getComputedStyle(obstacle,null).getPropertyValue("animation-duration"));
            newDur = aniDur - 0.03;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);
        
    }
    
},100);

function updateScore(score){
    scoreCount.innerHTML = "Your score: "+score;
}
