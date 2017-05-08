/**
 * Created by pijrodriguez on 2017-05-02.
 */


// all unmakeOrders will be store into an array
var unmakeOrdersClient = []


// Timer to remove the first value of the unmakeOrder array and refresh the kitchen page
setTimeout(function(){
    // unmakeOrders.shift();
    $.ajax({
        url:"/removeTheFirstItem",
        data:{
            status:"remove",
        },
        type: "post",
        success: function (resp) {
            unmakeOrdersClient=resp.unmakeOrders;
        }
    })
    location.reload();
}, 5000);

$(document).ready(function () {
    $.ajax({
        url:"/checkUnmakeOrder",
        data:{
            status:"check",
        },
        type: "post",
        success: function (resp) {
            unmakeOrdersClient=resp.unmakeOrders;
        }
    })

    var socket = io();

    // if a new order comes in, the new order will be stored into the unmakeOrder array and refresh the page
    socket.on("newOrder", function (theOrder) {
        unmakeOrdersClient.add(theOrder);
    })

    showOrders();



    
})

// the function for showing all orders(the values in the unmakeOrder array) in the screen
function showOrders() {
    for(var i = 0; i<unmakeOrdersClient.length;i++){
        var anOrderWindow = document.createElement("div");
        for (var j = 0; j<unmakeOrdersClient[i].length; i++){

            ////----------------need to be work more on here-------------
            var anItem = document.createElement("div");
            anItem.innerHTML=unmakeOrdersClient[i][j];
            anOrderWindow.appendChild(anItem);
        }
        anOrderWindow.style.margin = "0 2vw 2vw 0";
        anOrderWindow.style.width = "30vw";
        anOrderWindow.style.height = "45vh";
        anOrderWindow.stlyle.border = "red";
        document.body.appendChild(anOrderWindow);

    }

}


