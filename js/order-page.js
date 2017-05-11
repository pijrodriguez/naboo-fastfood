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
        dDiv = document.getElementById("dDiv"),
        
        cart = document.getElementById("cart"),
        blankDiv = document.getElementById("blankDiv"),
        cartSection = document.getElementById("cartSection"),
        backButton = document.getElementById("backButton");
    
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
    
    //This function adds a counter to every food item and is called while creating in the ajax calls
    function counterCreator(parentDiv){
        var counterDiv = document.createElement("div");
        counterDiv.className = "counterDiv";
        parentDiv.appendChild(counterDiv);

        var Plus = document.createElement("img");
        Plus.className = "Plus";
        Plus.src = "/pics/plus.png";
        counterDiv.appendChild(Plus);

        var Counter = document.createElement("div");
        Counter.className = "Counter";
        Counter.Id = "counter";
        Counter.innerHTML = "0";
        counterDiv.appendChild(Counter);

        var Minus = document.createElement("img");
        Minus.className = "Minus";
        Minus.src = "/pics/minus.png";
        counterDiv.appendChild(Minus);

        Plus.addEventListener("click", function(){
            var initialValue = parseInt(this.parentNode.childNodes[1].innerHTML);
            this.parentNode.childNodes[1].innerHTML = initialValue + 1;
        });

        Minus.addEventListener("click", function(){
            var initialValue = parseInt(this.parentNode.childNodes[1].innerHTML);
            if(initialValue != 0){
                this.parentNode.childNodes[1].innerHTML = initialValue - 1;
            } else {
                alert("COUNTER CAN'T GO BELOW 0.");
            }
        });

        var add2Cart = document.createElement("button");
        add2Cart.className = "add2Cart";
        add2Cart.innerHTML = "Add To Cart";
        counterDiv.appendChild(add2Cart);
    }
    
    //Storing info into each array
    //And then into different divs
    function ajaxCalls(div, array){
        for(var j=0;array.length>j;j++){
            var newDiv = document.createElement("div");
            newDiv.className = "newDiv";
            div.appendChild(newDiv);

            var newTitle = document.createElement("div");
            newTitle.innerHTML = array[j].item;
            newTitle.className = "newTitle";
            newDiv.appendChild(newTitle);

            var newImg = document.createElement("img");
            newImg.src = array[j].img;
            newImg.className = "newImg";
            newDiv.appendChild(newImg);

            var newPrice = document.createElement("div");
            newPrice.innerHTML = array[j].price;
            newPrice.className = "newPrice";
            newDiv.appendChild(newPrice);

            var newPriceC = document.createElement("div");
            newPriceC.innerHTML = " IC";
            newPriceC.className = "newPriceC";
            newDiv.appendChild(newPriceC);

            //Calling the "counterCreator" function
            counterCreator(newDiv);
        }
    }
    
    cart.addEventListener("click", function(){
        cartSection.style.right = "0";
        blankDiv.style.left = "0";
    });
    backButton.addEventListener("click", function(){
        cartSection.style.right = "-30%";
        blankDiv.style.left = "-100%";
    });
    
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
                
                //Calling the "ajaxCalls" function
                ajaxCalls(gDiv, gArray);
                ajaxCalls(mDiv, mArray);
                ajaxCalls(sDiv, sArray);
                ajaxCalls(bgDiv, bgArray);
                ajaxCalls(mbDiv, mbArray);
                ajaxCalls(dDiv, dArray);
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