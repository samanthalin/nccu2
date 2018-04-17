var totalSunShot = 0;
AFRAME.registerComponent("sun-shooting",{
  init : function(){
    suns = document.querySelectorAll(".sun")
    suns.forEach(function(sun){
        sun.addEventListener("click",function(){
            if(this.id == "real-sun"){
                var text = document.querySelector('#real-text');
                text.setAttribute("visible", true);
            }else{
                this.emit("explode");
                totalSunShot++;
                var scoreboard =  document.getElementById("scoreboard");
                scoreboard.setAttribute("value", (5 - totalSunShot) + "/ 5 Left");
                if(totalSunShot == 5){
                    var gameover = document.getElementById("game-over");
                    gameover.setAttribute("visible", true);
                    // goto next page here
                }
            }
        })
    })
    }
})