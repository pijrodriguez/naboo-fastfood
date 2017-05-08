$(document).ready(function(){
    console.log("MENU PAGE");
    
    //Variables
    var greens = document.getElementById("greens"),
        meats = document.getElementById("meats"),
        seafood = document.getElementById("seafood"),
        bakedGoods = document.getElementById("bakedGoods"),
        mollusksBugs = document.getElementById("mollusksBugs"),
        drinks = document.getElementById("drinks"),
        
        category = document.getElementById("category"),
        container = document.getElementById("container"),
        
        gDiv = document.getElementById("gDiv"),
        mDiv = document.getElementById("mDiv"),
        sDiv = document.getElementById("sDiv"),
        bgDiv = document.getElementById("bgDiv"),
        mbDiv = document.getElementById("mbDiv"),
        dDiv = document.getElementById("dDiv");
    
    //Arrays
    var gArray = [],
        mArray = [],
        sArray = [],
        bgArray = [],
        mbArray = [],
        dArray = [];
    
    $.ajax({
        url: "/menu/items",
        type: "post",
        success: function(resp){
            if(resp.status == "success"){
                var arr = resp.Array;
                
                for(var i=0;arr.length>i;i++){
                    if(arr[i].type == "greens"){
                        gArray.push(arr[i]);
                    }
                    if(arr[i].type == "meats"){
                        mArray.push(arr[i]);
                    }
                    if(arr[i].type == "seafood"){
                        sArray.push(arr[i]);
                    }
                    if(arr[i].type == "bakedgoods"){
                        bgArray.push(arr[i]);
                    }
                    if(arr[i].type == "m&b"){
                        mbArray.push(arr[i]);
                    }
                    if(arr[i].type == "drinks"){
                        dArray.push(arr[i]);
                    }
                }
                for(var j=0;gArray.length>j;j++){
                    var newDiv = document.createElement("div");
                    newDiv.innerHTML = gArray[j].item;
                    newDiv.style.backgroundColor = "yellow";
                    newDiv.style.marginBottom = "5px";
                    gDiv.appendChild(newDiv);
                }
                for(var j=0;mArray.length>j;j++){
                    var newDiv = document.createElement("div");
                    newDiv.innerHTML = mArray[j].item;
                    newDiv.style.backgroundColor = "yellow";
                    newDiv.style.marginBottom = "5px";
                    mDiv.appendChild(newDiv);
                }
                for(var j=0;sArray.length>j;j++){
                    var newDiv = document.createElement("div");
                    newDiv.innerHTML = sArray[j].item;
                    newDiv.style.backgroundColor = "yellow";
                    newDiv.style.marginBottom = "5px";
                    sDiv.appendChild(newDiv);
                }
                for(var j=0;bgArray.length>j;j++){
                    var newDiv = document.createElement("div");
                    newDiv.innerHTML = bgArray[j].item;
                    newDiv.style.backgroundColor = "yellow";
                    newDiv.style.marginBottom = "5px";
                    bgDiv.appendChild(newDiv);
                }
                for(var j=0;mbArray.length>j;j++){
                    var newDiv = document.createElement("div");
                    newDiv.innerHTML = mbArray[j].item;
                    newDiv.style.backgroundColor = "yellow";
                    newDiv.style.marginBottom = "5px";
                    mbDiv.appendChild(newDiv);
                }
                for(var j=0;dArray.length>j;j++){
                    var newDiv = document.createElement("div");
                    newDiv.innerHTML = dArray[j].item;
                    newDiv.style.backgroundColor = "yellow";
                    newDiv.style.marginBottom = "5px";
                    dDiv.appendChild(newDiv);
                }
            }
        }
    });
    
    greens.addEventListener("click", function(){
        category.innerHTML = "Greens";
        gDiv.style.display = "inline";
        mDiv.style.display = "none";
        sDiv.style.display = "none";
        bgDiv.style.display = "none";
        mbDiv.style.display = "none";
        dDiv.style.display = "none";
    });
    meats.addEventListener("click", function(){
        category.innerHTML = "Meats";
        gDiv.style.display = "none";
        mDiv.style.display = "inline";
        sDiv.style.display = "none";
        bgDiv.style.display = "none";
        mbDiv.style.display = "none";
        dDiv.style.display = "none";
    });
    seafood.addEventListener("click", function(){
        category.innerHTML = "Seafood";
        gDiv.style.display = "none";
        mDiv.style.display = "none";
        sDiv.style.display = "inline";
        bgDiv.style.display = "none";
        mbDiv.style.display = "none";
        dDiv.style.display = "none";
    });
    bakedGoods.addEventListener("click", function(){
        category.innerHTML = "Baked Goods";
        gDiv.style.display = "none";
        mDiv.style.display = "none";
        sDiv.style.display = "none";
        bgDiv.style.display = "inline";
        mbDiv.style.display = "none";
        dDiv.style.display = "none";
    });
    mollusksBugs.addEventListener("click", function(){
        category.innerHTML = "Mollusks & Bugs";
        gDiv.style.display = "none";
        mDiv.style.display = "none";
        sDiv.style.display = "none";
        bgDiv.style.display = "none";
        mbDiv.style.display = "inline";
        dDiv.style.display = "none";
    });
    drinks.addEventListener("click", function(){
        category.innerHTML = "Drinks";
        gDiv.style.display = "none";
        mDiv.style.display = "none";
        sDiv.style.display = "none";
        bgDiv.style.display = "none";
        mbDiv.style.display = "none";
        dDiv.style.display = "inline";
    });
});