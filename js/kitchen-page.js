/**
 * Created by Keson on 2017-05-02.
 */


// all unmakeOrders will be store into an array
var unmakeOrdersClient = {1:{"Burger":2,"Fish":5,"Saled":2},2:{"Bug":7,"Water":1},3:{"Burger":20,"Fish":5,"Saled":2},4:{"Bug":7,"Water":10},5:{"Burger":2,"Fish":5,"Saled":2},6:{"Bug":7,"Water":1}}

var binnedItems = {};
var prepItems = {};

// setInterval(function() {
//     prepItems[Date.now()]="Burger";
//     console.log("adding items");
//     console.log((prepItems));
// }, 2000);



//check the prepared items every one second and remove those items that been made longer than 5 minutes
setInterval(function() {
    var times = Object.keys(prepItems);

    times.forEach(function(time) {
        if(Date.now()-time>=300000) {
            binnedItems[time] = prepItems[time];
            delete prepItems[time];
        }
    });

}, 1000);

// caculate the quantity of a certain food in prepared
function caculatePreparedItem(food) {
    var foodQty =0;
    var keys = Object.keys(prepItems);

    keys.forEach(function (key) {
        if(prepItems[key] === food){
            foodQty++;
        }
    });
    return foodQty;
}


// Timer to remove the first value of the unmakeOrder array and refresh the kitchen page
// setTimeout(function(){
//     // unmakeOrders.shift();
//     $.ajax({
//         url:"/removeDoneItem",
//         data:{
//             status:"remove",
//         },
//         type: "post",
//         success: function (resp) {
//             unmakeOrdersClient=resp.unmakeOrders;
//         }
//     })
//     location.reload();
// }, 5000);

$(document).ready(function () {
    $.ajax({
        url:"/checkUnmakeOrder",
        data:{
            status:"check",
        },
        type: "post",
        success: function (resp) {
            // unmakeOrdersClient=resp.unmakeOrders;
        }
    })

    // var socket = io();
    //
    // // if a new order comes in, the new order will be stored into the unmakeOrder array and refresh the page
    // socket.on("newOrder", function (theOrder) {
    //     unmakeOrdersClient.add(theOrder);
    // })

    showOrders(unmakeOrdersClient);
})



// the function for showing all orders(the values in the unmakeOrder array) in the screen
function showOrders(unmakeOrdersClient) {
    var data = eval(unmakeOrdersClient);
    var orderWindowNum = 0;

    for (var key in data) {
        var color = "green";
        orderWindowNum++;
        if (orderWindowNum > 6){
            break;
        }
        var anOrderWindow = document.createElement("div");
        var orderDiv = document.createElement("div");
        orderDiv.innerHTML = "ORDER" + key;
        orderDiv.style.color = "red";
        anOrderWindow.appendChild(orderDiv);

        var data2 = eval(unmakeOrdersClient[key]);
        for (var key2 in data2) {

            var itemDiv = document.createElement("div");

            //user defined attribute to store the item name and the item quantity that ordered
            itemDiv.itemName = key2;
            itemDiv.qty = unmakeOrdersClient[key][key2];

            itemDiv.innerHTML =  unmakeOrdersClient[key][key2]+" <- "+key2;

            if(color =="green"){
                itemDiv.style.backgroundColor = "green";
                color = "yellow";
            }else if (color == "yellow"){
                itemDiv.style.backgroundColor = "yellow";
                color = "green";
            }


            //when a certain item onclick, showing nessary info in the  bottom of the screem
            itemDiv.addEventListener("click", function () {
                var prepNum = caculatePreparedItem(this.itemName);
                document.getElementById("item").innerHTML = this.itemName;
                document.getElementById("item").name = this.itemName;
                document.getElementById("item").style.color = "red";
                document.getElementById("quantity").style.color = "red";

                document.getElementById("prepared").innerHTML = prepNum;
                document.getElementById("prepared").style.color = "red";

                if(this.qty - prepNum<=0){
                    //unakeble, has to use
                    document.getElementById("quantity").innerHTML = "use prep";
                    document.getElementById("quantity").qtyToMake = 0 ;

                }else if(this.qty - prepNum > 2){
                    document.getElementById("quantity").innerHTML = 6 ;
                    document.getElementById("quantity").qtyToMake = 6 ;
                    //make onclick thing
                }else if(this.qty - prepNum == 2){
                    document.getElementById("quantity").innerHTML = 2 ;
                    document.getElementById("quantity").qtyToMake = 2 ;
                }else if(this.qty - prepNum == 1){
                    document.getElementById("quantity").innerHTML = 1 ;
                    document.getElementById("quantity").qtyToMake = 1 ;
                }

            })

            anOrderWindow.appendChild(itemDiv);
        }




        anOrderWindow.style.margin = "0 2vw 2vw 0";
        anOrderWindow.style.width = "30vw";
        anOrderWindow.style.height = "40vh";
        anOrderWindow.style.float = "left";
        anOrderWindow.style.borderStyle = "solid";
        anOrderWindow.style.borderColor = "red";
        anOrderWindow.style.overflow = "hidden";
        document.body.appendChild(anOrderWindow);

    }
}

//"MAKE" button onclick: technically add food into prepared map
document.getElementById("make").addEventListener("click", function () {
    for(var i = 0; i<document.getElementById("quantity").qtyToMake;i++){
        prepItems[Date.now()+i] = document.getElementById("item").name;
    }
})


//"SERVE" button onclick: technically delete items from unmakeOrder map
document.getElementById("serve").addEventListener("click", function () {
    
})


