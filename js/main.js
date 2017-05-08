$(document).ready(function(){
    var img1 = new Image();
    img1.src = "/pics/food1.jpg";
    var img2 = new Image();
    img2.src = "/pics/food2.jpg";
    var img3 = new Image();
    img3.src = "/pics/food3.jpg";
    var curImg = 1;
    function changeImg(){
        document.images.slide.src=eval("img"+curImg+".src");
        if(curImg<3){
            curImg ++;
        }
        else {
            curImg = 1;
        }
        setTimeout(function(){
            changeImg();
        }, 2500);
    }
    
    document.getElementById("orderButton").addEventListener("click",function(){
        location.href ="/order-page";
    })
    
    changeImg();
    
})
