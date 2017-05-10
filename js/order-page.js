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
    
    //Arrays (for different food categories)
    var gArray = [],
        mArray = [],
        sArray = [],
        bgArray = [],
        mbArray = [],
        dArray = [];
    
    var items = [greens,meats,seafood,bakedGoods,mollusksBugs,drinks];
    
    //This Function makes the selected menu "glow/highlighted" when it's selected
    var active;
    function glow(active){
        for(var i=0;items.length>i;i++){
            if(items[i]==active){
                items[i].style.color = "black";
                items[i].style.height = "55px";
                items[i].style.backgroundColor = "greenyellow";
                items[i].style.borderTop = "1px solid black";
                items[i].style.borderBottom = "1px solid black";
            } else {
                items[i].style.color = "white";
                items[i].style.height = "50px";
                items[i].style.backgroundColor = "darkgreen";
                items[i].style.borderTop = "0";
                items[i].style.borderBottom = "0";
            }
        }
    }
    
    //This ajax call stores all the food item's information into the divs as the page is loaded
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
                //Storing info into each array
                //And then into different divs
                for(var j=0;gArray.length>j;j++){
                    var newDiv = document.createElement("div");
                    newDiv.className = "newDiv";
                    gDiv.appendChild(newDiv);
                    
                    var newTitle = document.createElement("div");
                    newTitle.innerHTML = gArray[j].item;
                    newTitle.className = "newTitle";
                    newDiv.appendChild(newTitle);
                    
                    var newImg = document.createElement("img");
                    newImg.src = gArray[j].img;
                    newImg.className = "newImg";
                    newDiv.appendChild(newImg);
                    
                    var newPrice = document.createElement("div");
                    newPrice.innerHTML = gArray[j].price+" IC";
                    newPrice.className = "newPrice";
                    newDiv.appendChild(newPrice);
                }
                for(var j=0;mArray.length>j;j++){
                    var newDiv = document.createElement("div");
                    newDiv.className = "newDiv";
                    mDiv.appendChild(newDiv);
                    
                    var newTitle = document.createElement("div");
                    newTitle.innerHTML = mArray[j].item;
                    newTitle.className = "newTitle";
                    newDiv.appendChild(newTitle);
                    
                    var newImg = document.createElement("img");
                    newImg.src = mArray[j].img;
                    newImg.className = "newImg";
                    newDiv.appendChild(newImg);
                    
                    var newPrice = document.createElement("div");
                    newPrice.innerHTML = mArray[j].price+" IC";
                    newPrice.className = "newPrice";
                    newDiv.appendChild(newPrice);
                }
                for(var j=0;sArray.length>j;j++){
                    var newDiv = document.createElement("div");
                    newDiv.className = "newDiv";
                    sDiv.appendChild(newDiv);
                    
                    var newTitle = document.createElement("div");
                    newTitle.innerHTML = sArray[j].item;
                    newTitle.className = "newTitle";
                    newDiv.appendChild(newTitle);
                    
                    var newImg = document.createElement("img");
                    newImg.src = sArray[j].img;
                    newImg.className = "newImg";
                    newDiv.appendChild(newImg);
                    
                    var newPrice = document.createElement("div");
                    newPrice.innerHTML = sArray[j].price+" IC";
                    newPrice.className = "newPrice";
                    newDiv.appendChild(newPrice);
                }
                for(var j=0;bgArray.length>j;j++){
                    var newDiv = document.createElement("div");
                    newDiv.className = "newDiv";
                    bgDiv.appendChild(newDiv);
                    
                    var newTitle = document.createElement("div");
                    newTitle.innerHTML = bgArray[j].item;
                    newTitle.className = "newTitle";
                    newDiv.appendChild(newTitle);
                    
                    var newImg = document.createElement("img");
                    newImg.src = bgArray[j].img;
                    newImg.className = "newImg";
                    newDiv.appendChild(newImg);
                    
                    var newPrice = document.createElement("div");
                    newPrice.innerHTML = bgArray[j].price+" IC";
                    newPrice.className = "newPrice";
                    newDiv.appendChild(newPrice);
                }
                for(var j=0;mbArray.length>j;j++){
                    var newDiv = document.createElement("div");
                    newDiv.className = "newDiv";
                    mbDiv.appendChild(newDiv);
                    
                    var newTitle = document.createElement("div");
                    newTitle.innerHTML = mbArray[j].item;
                    newTitle.className = "newTitle";
                    newDiv.appendChild(newTitle);
                    
                    var newImg = document.createElement("img");
                    newImg.src = mbArray[j].img;
                    newImg.className = "newImg";
                    newDiv.appendChild(newImg);
                    
                    var newPrice = document.createElement("div");
                    newPrice.innerHTML = mbArray[j].price+" IC";
                    newPrice.className = "newPrice";
                    newDiv.appendChild(newPrice);
                }
                for(var j=0;dArray.length>j;j++){
                    var newDiv = document.createElement("div");
                    newDiv.className = "newDiv";
                    dDiv.appendChild(newDiv);
                    
                    var newTitle = document.createElement("div");
                    newTitle.innerHTML = dArray[j].item;
                    newTitle.className = "newTitle";
                    newDiv.appendChild(newTitle);
                    
                    var newImg = document.createElement("img");
                    newImg.src = dArray[j].img;
                    newImg.className = "newImg";
                    newDiv.appendChild(newImg);
                    
                    var newPrice = document.createElement("div");
                    newPrice.innerHTML = dArray[j].price+" IC";
                    newPrice.className = "newPrice";
                    newDiv.appendChild(newPrice);
                }
            }
        }
    });
    
    greens.addEventListener("click", function(){
        
        //Calling the glow function for each "on click"
        active = greens;
        glow(active);
        
        category.innerHTML = "Greens";
        
        //Since the only one div can be shown at a time, the others must be made hidden "on click" of each category
        gDiv.style.display = "inline";
        mDiv.style.display = "none";
        sDiv.style.display = "none";
        bgDiv.style.display = "none";
        mbDiv.style.display = "none";
        dDiv.style.display = "none";
    });
    meats.addEventListener("click", function(){
        
        active = meats;
        glow(active);
        
        category.innerHTML = "Meats";
        
        gDiv.style.display = "none";
        mDiv.style.display = "inline";
        sDiv.style.display = "none";
        bgDiv.style.display = "none";
        mbDiv.style.display = "none";
        dDiv.style.display = "none";
    });
    seafood.addEventListener("click", function(){
        
        active = seafood;
        glow(active);
        
        category.innerHTML = "Seafood";
        
        gDiv.style.display = "none";
        mDiv.style.display = "none";
        sDiv.style.display = "inline";
        bgDiv.style.display = "none";
        mbDiv.style.display = "none";
        dDiv.style.display = "none";
    });
    bakedGoods.addEventListener("click", function(){
        
        active = bakedGoods;
        glow(active);
        
        category.innerHTML = "Baked Goods";
        
        gDiv.style.display = "none";
        mDiv.style.display = "none";
        sDiv.style.display = "none";
        bgDiv.style.display = "inline";
        mbDiv.style.display = "none";
        dDiv.style.display = "none";
    });
    mollusksBugs.addEventListener("click", function(){
        
        active = mollusksBugs;
        glow(active);
        
        category.innerHTML = "Mollusks & Bugs";
        
        gDiv.style.display = "none";
        mDiv.style.display = "none";
        sDiv.style.display = "none";
        bgDiv.style.display = "none";
        mbDiv.style.display = "inline";
        dDiv.style.display = "none";
    });
    drinks.addEventListener("click", function(){
        
        active = drinks;
        glow(active);
        
        category.innerHTML = "Drinks";
        
        gDiv.style.display = "none";
        mDiv.style.display = "none";
        sDiv.style.display = "none";
        bgDiv.style.display = "none";
        mbDiv.style.display = "none";
        dDiv.style.display = "inline";
    });
});