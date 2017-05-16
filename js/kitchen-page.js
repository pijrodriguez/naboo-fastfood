/**
 * Created by Keson on 2017-05-02.
 */


// all unmakeOrders will be store into an array
// var unmakeOrders;
// var binnedItems = {};
var prepItems = {};
var making=[];

// setInterval(function() {
//     prepItems[Date.now()]="Burger";
//     console.log("adding items");
//     console.log((prepItems));
// }, 2000);



//check the prepared items every one second and remove those items that been made longer than 5 minutes
setInterval(function() {

    checkPrep();
    var times = Object.keys(prepItems);

    times.forEach(function(time) {
        if(Date.now()-time>=300000) {
            // updataBin(time,prepItems[time]);
            updatePrep(1,prepItems[time]);
        }
    });

}, 1000);

// caculate the quantity of a certain food in prepared

function caculatePreparedItem(food) {
    var foodQty =0;
    var keys = Object.keys(prepItems);
    keys.forEach(function (key) {
        if(prepItems[key] == food){
            foodQty++;
        }
    });
    console.log(foodQty);
    return foodQty;



    // $.ajax({
    //     url: "/checkPrep",
    //     type: "post",
    //     data:{
    //         status:"check"
    //     },
    //     success:function (resp) {
    //         var itemNumPrep = 0;
    //         var keys = Object.keys(resp.prepItems);
    //         keys.forEach(function (key) {
    //             if(resp.prepItems[key] == food){
    //                 itemNumPrep++;
    //             }
    //         });
    //         foodQty=itemNumPrep;
    //
    //
    //     }
    // });




}


// console.log(unmakeOrders)
$(document).ready(function () {
    // if(checkUnmakeOrder()){
    //     console.log(unmakeOrders);
    //     showOrders(unmakeOrders);
    // }
    // checkUnmakeOrder();

    checkPrep();


    $.ajax({
        url:"/checkUnmakeOrder",
        type: "post",
        data:{
            status:"check"
        },
        success: function (resp) {
            if (resp.status === "success"){
                showOrders(resp.unmakeOrders);
            }

        }
    });
    // var socket = io();
    //
    // // if a new order comes in, the new order will be stored into the unmakeOrder array and refresh the page
    // socket.on("newOrder", function (theOrder) {
    //     unmakeOrdersClient.add(theOrder);
    // })

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
            itemDiv.orderId = key;
            itemDiv.qty = unmakeOrdersClient[key][key2];

            itemDiv.innerHTML =  unmakeOrdersClient[key][key2]+" <- "+key2;

            if(unmakeOrdersClient[key][key2] == 0){
                itemDiv.style.backgroundColor = "grey";
            }else {
                if(color =="green"){
                    itemDiv.style.backgroundColor = "green";
                    color = "yellow";
                }else if (color == "yellow"){
                    itemDiv.style.backgroundColor = "yellow";
                    color = "green";
                }
            }



            //when a certain item onclick, showing nessary info in the  bottom of the screem
            itemDiv.addEventListener("click", function () {
                document.getElementById("serve").orderId = this.orderId;
                document.getElementById("serve").itemName = this.itemName;


                var prepNum = caculatePreparedItem(this.itemName);
                document.getElementById("item").innerHTML = this.itemName;
                document.getElementById("item").name = this.itemName;
                document.getElementById("item").qtyUmake = this.qty;
                document.getElementById("item").style.color = "red";
                document.getElementById("quantity").style.color = "red";

                document.getElementById("prepared").innerHTML = prepNum;
                document.getElementById("prepared").style.color = "red";


                if(this.qty - prepNum<=0){
                    //when the quantity of the item need to be made can be served in the prepared map, the "MAKE" button is set to be unclickable
                    document.getElementById("make").isDisabled = true;
                    document.getElementById("quantity").innerHTML = "use prep";
                    document.getElementById("quantity").qtyToMake = 0 ;

                }else if(this.qty - prepNum > 2){
                    document.getElementById("quantity").innerHTML = 6 ;
                    document.getElementById("quantity").qtyToMake = 6 ;
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
    // $.ajax({
    //     url:"/madeFood",
    //     type:"post",
    //     data:{
    //         status:"make",
    //         foodName:document.getElementById("item").name,
    //         quantity:document.getElementById("quantity").qtyToMake
    //     },
    //     success:function (resp) {
    //         if(resp.status ==="success"){
    //             document.getElementById("prepared").innerHTML=caculatePreparedItem(document.getElementById("item").name);
    //         }
    //     }
    // })
    makeFood(document.getElementById("item").name, document.getElementById("quantity").qtyToMake);
    for(var i =0; i<making.length;i++) {
        prepItems[making[i]] = document.getElementById("item").name;
    }
    console.log(document.getElementById("item").name);
    document.getElementById("prepared").innerHTML=caculatePreparedItem(document.getElementById("item").name);

})


//"SERVE" button onclick: technically delete items from unmakeOrder map
document.getElementById("serve").addEventListener("click", function () {
    var orderId=this.orderId;
    var itemName = this.itemName;
    $.ajax({
        url:"/checkUnmakeOrder",
        type: "post",
        data:{
            status:"check"
        },
        success: function (resp) {
            if (resp.status === "success"){
                caculatePreparedItem(itemName);
                if(caculatePreparedItem(itemName)-resp.unmakeOrders[orderId][itemName]>=0){
                    updateUnmake(0,orderId,itemName);
                    updatePrep(document.getElementById("item").qtyUmake,itemName);
                    location.reload();
                }else {
                    updateUnmake(resp.unmakeOrders[orderId][itemName]-caculatePreparedItem(itemName),orderId,itemName);
                    updatePrep(caculatePreparedItem(itemName),itemName);
                    location.reload();
                }

            }

        }
    });

})

function updateUnmake(numOfFood,key1,key2) {
    $.ajax({
        url:"/updateUnmake",
        type:"post",
        data:{
            status:"served",
            key1:key1,
            key2:key2,
            numOfFood:numOfFood
        },
        success: function (resp) {
            if (resp.status == "success"){
                // location.reload();
            }

        }
    });
}

function updatePrep(numToRemove,food) {
    $.ajax({
        url:"/updatePrep",
        type:"post",
        data:{
            status:"served",
            food:food,
            numToRemove:numToRemove
        },
        success: function (resp) {
            if (resp.status == "success"){
                // location.reload();
            }

        }
    });
}

function checkPrep() {
    $.ajax({
        url: "/checkPrep",
        type: "post",
        data:{
            status:"check"
        },
        success:function (resp) {
            prepItems = resp.prepItems;
        }
    })
}


function checkUnmakeOrder() {
    $.ajax({
        url:"/checkUnmakeOrder",
        type: "post",
        data:{
            status:"check"
        },
        success: function (resp) {
            if (resp.status === "success"){
                unmakeOrders= resp.unmakeOrders;
                return true;
            }

        }
    });
}

function makeFood(foodName,quantity) {
    $.ajax({
        url:"/madeFood",
        type:"post",
        data:{
            status:"make",
            foodName:foodName,
            quantity:quantity
        },
        success:function (resp) {
            if(resp.status ==="success"){
                making = resp.making;
            }
        }
    })


}

