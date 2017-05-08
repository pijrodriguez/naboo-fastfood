$(document).ready(function(){
    var img1 = new Image();
    img1.src = "/pics/food1.jpg";
    var img2 = new Image();
    img2.src = "/pics/food2.jpg";
    var img3 = new Image();
    img3.src = "/pics/food3.jpg";
    var curImg = 1;
    var timeOutS;
    var running = 0;
    function timeOut(){
        running = 1;
        timeOutS = setTimeout(function(){
            changeImg();
        }, 2500);
    }
    function changeImg(){
        document.images.slide.src=eval("img"+curImg+".src");
        if(curImg<3){
            curImg ++;
        }
        else {
            curImg = 1;
        }
        timeOut();
    }
    
    document.getElementById("orderButton").addEventListener("click",function(){
        location.href ="/order-page";
    })
    document.getElementById("next").addEventListener("click",function(){
        clearTimeout(timeOutS);
        changeImg();
    })
    document.getElementById("previous").addEventListener("click",function(){
        clearTimeout(timeOutS);
        if(curImg==1){
            curImg = 2;
        }
        else if(curImg==2){
            curImg = 3;
        }
        else {
            curImg -= 2;
        }
        changeImg();
    })
    document.getElementById("pause").addEventListener("click",function(){
        clearTimeout(timeOutS);
        running = 0;
    })
    document.getElementById("play").addEventListener("click",function(){
        if (running == 0){
        changeImg();
        }
    })
    changeImg();
    
})
