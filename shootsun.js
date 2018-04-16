AFRAME.registerComponent("sun-shooting",{
  init : function(){
    suns = document.querySelector(".sun")
    suns.forEach(function(sun){
     sun.addEventListener("click",function(){
      this.setAttribute("visible",false);
    })
  }
})