var addItemButton = document.getElementById("addItemButton"),
    removeItemButton = document.getElementById("removeItemButton"),
    editItemButton = document.getElementById("editItemButton"),
    addEmployeeButton = document.getElementById("addEmployeeButton"),
    removeEmployeeButton = document.getElementById("removeEmployeeButton"),
    editEmployeeButton = document.getElementById("editEmployeeButton"),
    addItemDiv = document.getElementById("addItemDiv"),
    removeItemDiv = document.getElementById("removeItemDiv"),
    editItemDiv = document.getElementById("editItemDiv"),
    addEmployeeDiv = document.getElementById("addEmployeeDiv"),
    removeEmployeeDiv = document.getElementById("removeEmployeeDiv"),
    editEmployeeDiv = document.getElementById("editEmployeeDiv"),
    addItemNameInput = document.getElementById("addItemNameInput"),
    addItemPriceInput = document.getElementById("addItemPriceInput"),
    addItemImgInput = document.getElementById("addItemImgInput"),
    selectItemTypeList = document.getElementById("selectItemTypeList"),
    addItemSave = document.getElementById("addItemSave"),
    removeItemList = document.getElementById("removeItemList"),
    removeItemSave = document.getElementById("removeItemSave"),
    editItemList = document.getElementById("editItemList"),
    editItemNameInput = document.getElementById("editItemNameInput"),
    editItemPriceInput = document.getElementById("editItemPriceInput"),
    editItemImgInput = document.getElementById("editItemImgInput"),
    editItemTypeList = document.getElementById("editItemTypeList"),
    editItemSave = document.getElementById("editItemSave"),
    addEmployeeNameInput = document.getElementById("addEmployeeNameInput"),
    addEmployeeIdInput = document.getElementById("addEmployeeIdInput"),
    selectPositionList = document.getElementById("selectPositionList"),
    addEmployeePasswordInput = document.getElementById("addEmployeePasswordInput"),
    addEmployeeSave = document.getElementById("addEmployeeSave"),
    removeEmployeeList = document.getElementById("removeEmployeeList"),
    removeEmployeeSave = document.getElementById("removeEmployeeSave"),
    editEmployeeList = document.getElementById("editEmployeeList"),
    editEmployeeNameInput = document.getElementById("editEmployeeNameInput"),
    editEmployeeIdInput = document.getElementById("editEmployeeIdInput"),
    editEmployeePositionList = document.getElementById("editEmployeePositionList"),
    editEmployeePasswordInput = document.getElementById("editEmployeePasswordInput"),
    editEmployeeSave = document.getElementById("editEmployeeSave"),
    openStoreButton = document.getElementById("openStoreButton"),
    closeStoreButton = document.getElementById("closeStoreButton"),
    employeeName = document.getElementById("employeeName"),
    employeeId = document.getElementById("employeeId"),
    logoutButton = document.getElementById("logoutButton"),
    checkSalesButton = document.getElementById("checkSalesButton"),
    adminSettingsDiv = document.getElementById("adminSettingsDiv"),
    checkSalesDiv = document.getElementById("checkSalesDiv"),
    datesList = document.getElementById("datesList"),
    checkButton = document.getElementById("checkButton"),
    searchBar = document.getElementById("searchBar"),
    searchDate = document.getElementById("searchDate"),
    displayTable = document.getElementById("displayTable")
;

//***********************SETTING DISPLAY DIV******************************//

addItemButton.addEventListener("click", function(){
    addItemDiv.style.display = "block";
    removeItemDiv.style.display = "none";
    editItemDiv.style.display = "none";
    addEmployeeDiv.style.display = "none";
    removeEmployeeDiv.style.display = "none";
    editEmployeeDiv.style.display = "none";
    checkSalesDiv.style.display = "none";
    adminSettingsDiv.style.display = "none";
});

removeItemButton.addEventListener("click", function(){
    addItemDiv.style.display = "none";
    removeItemDiv.style.display = "block";
    editItemDiv.style.display = "none";
    addEmployeeDiv.style.display = "none";
    removeEmployeeDiv.style.display = "none";
    editEmployeeDiv.style.display = "none";
    checkSalesDiv.style.display = "none";
    adminSettingsDiv.style.display = "none";

    //*****************************DROP DOWN LIST**********************************//

    removeItemList.innerHTML = "";
    //ajax to the server, get the item names and display it to the dropdown list
    $.ajax({
        url:"/get-items",
        type:"post",
        success:function(resp){
            if(resp.status == "Success"){
                var foodItems = JSON.parse(resp.items);

                for(i=0;i<foodItems.length;i++){
                    var food = document.createElement("option");
                    food.value = foodItems[i].item;
                    food.textContent = foodItems[i].item;
                    removeItemList.appendChild(food);
                }
            }
        }
    })
});

editItemButton.addEventListener("click", function(){
    addItemDiv.style.display = "none";
    removeItemDiv.style.display = "none";
    editItemDiv.style.display = "block";
    addEmployeeDiv.style.display = "none";
    removeEmployeeDiv.style.display = "none";
    editEmployeeDiv.style.display = "none";
    checkSalesDiv.style.display = "none";
    adminSettingsDiv.style.display = "none";

    //*****************************DROP DOWN LIST**********************************//

    editItemList.innerHTML = "";
    //ajax to the server, get the item names and display it to the dropdown list
    $.ajax({
        url:"/get-items",
        type:"post",
        success:function(resp){
            if(resp.status == "Success"){
                var foodItems = JSON.parse(resp.items);

                var chooseItem = document.createElement("option");
                chooseItem.value = "choose";
                chooseItem.textContent = "Choose item";
                editItemList.appendChild(chooseItem);

                editItemNameInput.value = "";
                editItemPriceInput.value = "";
                editItemImgInput.value = "";
                editItemTypeList.value = "";

                for(i=0;i<foodItems.length;i++){
                    var food = document.createElement("option");
                    food.value = foodItems[i].item;
                    food.textContent = foodItems[i].item;
                    editItemList.appendChild(food);
                }
            }
        }
    })
});

addEmployeeButton.addEventListener("click", function(){
    addItemDiv.style.display = "none";
    removeItemDiv.style.display = "none";
    editItemDiv.style.display = "none";
    addEmployeeDiv.style.display = "block";
    removeEmployeeDiv.style.display = "none";
    editEmployeeDiv.style.display = "none";
    checkSalesDiv.style.display = "none";
    adminSettingsDiv.style.display = "none";
});

removeEmployeeButton.addEventListener("click", function(){
    addItemDiv.style.display = "none";
    removeItemDiv.style.display = "none";
    editItemDiv.style.display = "none";
    addEmployeeDiv.style.display = "none";
    removeEmployeeDiv.style.display = "block";
    editEmployeeDiv.style.display = "none";
    checkSalesDiv.style.display = "none";
    adminSettingsDiv.style.display = "none";

    //*****************************DROP DOWN LIST**********************************//

    removeEmployeeList.innerHTML = "";
    //ajax to the server, get the employee names and display it to the dropdown list
    $.ajax({
        url:"/get-employees",
        type:"post",
        success:function(resp){
            if(resp.status == "Success"){
                console.log(resp.users);
                var employees = JSON.parse(resp.users);

                for(i=0;i<employees.length;i++){
                    var employeeName = document.createElement("option");
                    employeeName.value = employees[i].name;
                    employeeName.textContent = employees[i].name;
                    removeEmployeeList.appendChild(employeeName);
                }
            }
        }
    })
});

editEmployeeButton.addEventListener("click", function(){
    addItemDiv.style.display = "none";
    removeItemDiv.style.display = "none";
    editItemDiv.style.display = "none";
    addEmployeeDiv.style.display = "none";
    removeEmployeeDiv.style.display = "none";
    editEmployeeDiv.style.display = "block";
    checkSalesDiv.style.display = "none";
    adminSettingsDiv.style.display = "none";

    //*****************************DROP DOWN LIST**********************************//

    editEmployeeList.innerHTML = "";
    //ajax to the server, get the employee names and display it to the dropdown list
    $.ajax({
        url:"/get-employees",
        type:"post",
        success:function(resp){
            if(resp.status == "Success"){
                console.log(resp.users);
                var employees = JSON.parse(resp.users);

                var chooseEmployee = document.createElement("option");
                chooseEmployee.value = "choose";
                chooseEmployee.textContent = "Choose employee";
                editEmployeeList.appendChild(chooseEmployee);

                editEmployeeNameInput.value = "";
                editEmployeeIdInput.value = "";
                editEmployeePasswordInput.value = "";

                for(i=0;i<employees.length;i++){
                    var employeeName = document.createElement("option");
                    employeeName.value = employees[i].name;
                    employeeName.textContent = employees[i].name;
                    editEmployeeList.appendChild(employeeName);
                }
            }
        }
    })

});

checkSalesButton.addEventListener("click", function(){
    addItemDiv.style.display = "none";
    removeItemDiv.style.display = "none";
    editItemDiv.style.display = "none";
    addEmployeeDiv.style.display = "none";
    removeEmployeeDiv.style.display = "none";
    editEmployeeDiv.style.display = "none";
    adminSettingsDiv.style.display = "none";
    checkSalesDiv.style.display = "block";

    //ajax to server to get the dates from the db
    datesList.innerHTML = "";
    displayTable.innerHTML = "";
    $.ajax({
        url:"/get-dates",
        type:"post",
        success:function(resp){
            if(resp.status == "Success"){
                console.log(resp.dates);
                var datesAvailable = resp.dates;
                for(i=0;i<datesAvailable.length;i++){
                    var newDate = document.createElement("option");
                    newDate.value = datesAvailable[i].date;
                    newDate.textContent = datesAvailable[i].date;
                    datesList.appendChild(newDate);
                }
            }
        }
    })
});

//*******************************************************************//
//ajax to the server and display the info of the admin that is logged in to the admin-page

$(document).ready(function(){
    $.ajax({
        url:"/get-user",
        type:"post",
        success:function(resp){
            if(resp.status == "Success"){
                console.log(resp.user);
                var admin = JSON.parse(resp.user);

                //change values for employeeName and employeeId
                employeeName.innerHTML = "Signed in as " + admin.name.toUpperCase();
            }
        }
    })

});

//**************************SALES******************************//
checkButton.addEventListener("click", function(){
    displayTable.innerHTML = "";
    $.ajax({
        url:"/get-sales",
        type:"post",
        data:{
            date_selected: datesList.value,
            type: "check"
        },
        success:function(resp){
            if(resp.status = "Success"){
                console.log(resp);
                var tableValues = resp.sales;

                //create the elements
                var salesTable = document.createElement("table");
                salesTable.className = "table table-striped";
                var header = document.createElement("thead");
                var headerRow = document.createElement("tr");
                var itemName = document.createElement("th");
                var itemQuantity = document.createElement("th");
                var tableBody = document.createElement("tbody");

                //set the header values
                itemName.innerHTML = "Item Name";
                itemQuantity.innerHTML = "Quantity";


                //append to parent
                displayTable.appendChild(salesTable);
                salesTable.appendChild(header);
                salesTable.appendChild(tableBody);
                header.appendChild(headerRow);
                headerRow.appendChild(itemName);
                headerRow.appendChild(itemQuantity);

                for(i=0;i<tableValues.length;i++){
                    //create the elements
                    var newRow = document.createElement("tr");
                    var item = document.createElement("td");
                    var qty = document.createElement("td");

                    //set the values
                    item.innerHTML = tableValues[i].item;
                    qty.innerHTML = tableValues[i].qty;

                    //apend to parent
                    newRow.appendChild(item);
                    newRow.appendChild(qty);
                    tableBody.appendChild(newRow);
                }
            }
        }
    })
})


//**************************ADD ITEM******************************//

addItemSave.addEventListener("click", function(){
    $.ajax({
        url:"/add-item",
        type:"post",
        data:{
            item_name: addItemNameInput.value,
            item_price: addItemPriceInput.value,
            item_img: addItemImgInput.value,
            item_type: selectItemTypeList.value,
            type: "create"
        },
        success:function(resp){
            console.log(resp);
            addItemNameInput.value = "";
            addItemPriceInput.value = "";
            addItemImgInput.value = "";
            selectItemTypeList.value = "greens"
            $("#addItemSuccess").show().delay(3000).fadeOut();
        }
    })
});

//**************************REMOVE ITEM******************************//

removeItemSave.addEventListener("click", function(){

    $.ajax({
        url:"/remove-item",
        type:"post",
        data:{
            item_name: removeItemList.value,
            type: "remove"
        },
        success:function(resp){
            console.log(resp);
            removeItemList.remove(removeItemList.selectedIndex);
            $('#removeItemModal').hide();
            $('.modal-backdrop').hide();
            $("#removeItemSuccess").show().delay(3000).fadeOut();
        }
    })
});

//**************************EDIT ITEM******************************//

editItemList.addEventListener("change", function () {
    $.ajax({
        url:"/edit-item",
        type:"post",
        data:{
            item_name: editItemList.value,
            type: "select"
        },
        success:function(resp){
            console.log(resp);
            if(resp.status == "Success"){
                var item = resp.food[0];

                if(editItemList.value == "choose"){
                    editItemNameInput.value = "";
                    editItemPriceInput.value = "";
                    editItemImgInput.value = "";
                    editItemTypeList.value = "";
                }

                editItemNameInput.value = item.item;
                editItemPriceInput.value = item.price;
                editItemImgInput.value = item.img;
                editItemTypeList.value = item.type;
            }
        }
    })
});

editItemSave.addEventListener("click", function(){
    $.ajax({
        url:"/edit-item",
        type:"post",
        data:{
            old_item_name: editItemList.value,
            new_item_name: editItemNameInput.value,
            item_price: editItemPriceInput.value,
            item_img: editItemImgInput.value,
            item_type: editItemTypeList.value,
            type: "edit"
        },
        success:function(resp){
            console.log(resp);
            $("#editItemSuccess").show().delay(3000).fadeOut();
            editItemList.value = "choose";
            editItemNameInput.value = "";
            editItemPriceInput.value = "";
            editItemImgInput.value = "";
        }
    })
});

//**************************ADD EMPLOYEE******************************//

addEmployeeSave.addEventListener("click", function(){
    $.ajax({
        url:"/add-employee",
        type:"post",
        data:{
            name: addEmployeeNameInput.value,
            position: selectPositionList.value,
            employee_id: addEmployeeIdInput.value,
            password: addEmployeePasswordInput.value,
            type: "create"
        },
        success:function(resp){
            console.log(resp);
            $("#addEmployeeSuccess").show().delay(3000).fadeOut();
            addEmployeeNameInput.value = "";
            addEmployeeIdInput.value = "";
            addEmployeePasswordInput.value = "";
        }
    })
});

//**************************REMOVE EMPLOYEE******************************//

removeEmployeeSave.addEventListener("click", function(){
    $.ajax({
        url:"/remove-employee",
        type:"post",
        data:{
            name: removeEmployeeList.value,
            type: "remove"
        },
        success:function(resp){
            console.log(resp);
            removeEmployeeList.remove(removeEmployeeList.selectedIndex);
            $('#removeEmployeeModal').hide();
            $('.modal-backdrop').hide();
            $("#removeEmployeeSuccess").show().delay(3000).fadeOut();
        }
    })
});

//**************************EDIT EMPLOYEE******************************//

editEmployeeList.addEventListener("change", function () {
    $.ajax({
        url:"/edit-employee",
        type:"post",
        data:{
            employee_name: editEmployeeList.value,
            type: "select"
        },
        success:function(resp){
            console.log(resp);
            if(resp.status == "Success"){
                var employee = resp.user[0];

                if(editEmployeeList.value == "choose"){
                    editEmployeeNameInput.value = "";
                    editEmployeeIdInput.value = "";
                    editEmployeePasswordInput.value = "";
                }

                editEmployeeNameInput.value = employee.name;
                editEmployeeIdInput.value = employee.emp_id;
                editEmployeePositionList.value = employee.type;
                editEmployeePasswordInput.value = employee.password;

            }
        }
    })
});

editEmployeeSave.addEventListener("click", function(){
    $.ajax({
        url:"/edit-employee",
        type:"post",
        data:{
            old_employee_name: editEmployeeList.value,
            new_employee_name: editEmployeeNameInput.value,
            employee_id: editEmployeeIdInput.value,
            emp_pos: editEmployeePositionList.value,
            pass: editEmployeePasswordInput.value,
            type: "edit"
        },
        success:function(resp){
            console.log(resp);
            $("#editEmployeeSuccess").show().delay(3000).fadeOut();
            editEmployeeList.value = "choose"
            editEmployeeNameInput.value = "";
            editEmployeeIdInput.value = "";
            editEmployeePasswordInput.value = "";
        }
    })
});

//**************************OPEN/CLOSE STORE******************************//

openStoreButton.addEventListener("click", function(){
    $.ajax({
        url:"/open-store",
        type:"post",
        success:function(resp){
            if(resp == "Success"){
                openStoreButton.disabled = true;
                closeStoreButton.disabled = false;
            }
        }
    })
});

closeStoreButton.addEventListener("click", function(){
    $.ajax({
        url:"/close-store",
        type:"post",
        success:function(resp){
            if(resp == "Success"){
                closeStoreButton.disabled = true;
                openStoreButton.disabled = false;
            }
        }
    })
});

//**************************USER LOG OUT******************************//
logoutButton.addEventListener("click", function () {
    $.ajax({
        url:"/logout",
        type:"post",
        success:function(resp){
            if(resp == "success"){
                location.reload();
            }
        }
    })
});

