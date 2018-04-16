AFRAME.registerComponent("sun-shooting",{
  init : function(){
    suns = document.querySelectorAll(".sun")
    suns.forEach(function(sun){
    	sun.addEventListener("click",function(){
    		if(this.id == "real-sun"){
    			alert("You shot the real sun.")
    		}else{
    			this.emit("explode");
    		}
    	})
  	})
	}
})