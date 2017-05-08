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
    addItemSave = document.getElementById("addItemSave"),
    removeItemList = document.getElementById("removeItemList"),
    removeItemSave = document.getElementById("removeItemSave"),
    editItemList = document.getElementById("editItemList"),
    editItemNameInput = document.getElementById("editItemNameInput"),
    editItemPriceInput = document.getElementById("editItemPriceInput"),
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
    editEmployeePasswordInput = document.getElementById("editEmployeePasswordInput"),
    editEmployeeSave = document.getElementById("editEmployeeSave"),
    openStoreButton = document.getElementById("openStoreButton"),
    closeStoreButton = document.getElementById("closeStoreButton"),
    closeStoreButton = document.getElementById("closeStoreButton")
;

//***********************SETTING DISPLAY DIV******************************//

addItemButton.addEventListener("click", function(){
    addItemDiv.style.display = "block";
    removeItemDiv.style.display = "none";
    editItemDiv.style.display = "none";
    addEmployeeDiv.style.display = "none";
    removeEmployeeDiv.style.display = "none";
    editEmployeeDiv.style.display = "none";
});

removeItemButton.addEventListener("click", function(){
    addItemDiv.style.display = "none";
    removeItemDiv.style.display = "block";
    editItemDiv.style.display = "none";
    addEmployeeDiv.style.display = "none";
    removeEmployeeDiv.style.display = "none";
    editEmployeeDiv.style.display = "none";
});

editItemButton.addEventListener("click", function(){
    addItemDiv.style.display = "none";
    removeItemDiv.style.display = "none";
    editItemDiv.style.display = "block";
    addEmployeeDiv.style.display = "none";
    removeEmployeeDiv.style.display = "none";
    editEmployeeDiv.style.display = "none";
});

addEmployeeButton.addEventListener("click", function(){
    addItemDiv.style.display = "none";
    removeItemDiv.style.display = "none";
    editItemDiv.style.display = "none";
    addEmployeeDiv.style.display = "block";
    removeEmployeeDiv.style.display = "none";
    editEmployeeDiv.style.display = "none";
});

removeEmployeeButton.addEventListener("click", function(){
    addItemDiv.style.display = "none";
    removeItemDiv.style.display = "none";
    editItemDiv.style.display = "none";
    addEmployeeDiv.style.display = "none";
    removeEmployeeDiv.style.display = "block";
    editEmployeeDiv.style.display = "none";
});

editEmployeeButton.addEventListener("click", function(){
    addItemDiv.style.display = "none";
    removeItemDiv.style.display = "none";
    editItemDiv.style.display = "none";
    addEmployeeDiv.style.display = "none";
    removeEmployeeDiv.style.display = "none";
    editEmployeeDiv.style.display = "block";
});

//**************************ADD ITEM******************************//
//TODO [Patrick] : Add item settings still needs an image input (URL or File Upload)

addItemSave.addEventListener("click", function(){
    $.ajax({
        url:"/add-item",
        type:"post",
        data:{
            item_name: addItemNameInput.value,
            item_price: addItemPriceInput.value,
            type: "create"
        },
        success:function(resp){
            console.log(resp);
        }
    })
});

//**************************REMOVE ITEM******************************//
//TODO [Patrick] : Ajax to the server after displaying the removeItemDiv, get the items from the DB, and add it to the ddl

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
        }
    })
});

//**************************EDIT ITEM******************************//
//TODO [Patrick] : Edit item settings still needs an image input (URL or File Upload)
//TODO [Patrick] : Ajax to the server after displaying the editItemDiv, get the items from the DB, and add it to the ddl
//TODO [Patrick] : Ajax to the server when user selects from the ddl and put corresponding values in each of the inputs

editItemSave.addEventListener("click", function(){
    $.ajax({
        url:"/edit-item",
        type:"post",
        data:{
            old_item_name: editItemList.value,
            new_item_name: editItemNameInput.value,
            item_price: editItemPriceInput.value,
            type: "edit"
        },
        success:function(resp){
            console.log(resp);
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
        }
    })
});

//**************************REMOVE EMPLOYEE******************************//
//TODO [Patrick] : Ajax to the server after displaying the removeEmployeeDiv, get the employee names from the DB, and add it to the ddl

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
        }
    })
});

//**************************EDIT EMPLOYEE******************************//
//TODO [Patrick] : Ajax to the server after displaying the editEmployeeDiv, get the employee names from the DB, and add it to the ddl
//TODO [Patrick] : Ajax to the server when user selects from the ddl and put corresponding values in each of the inputs

editEmployeeSave.addEventListener("click", function(){
    $.ajax({
        url:"/edit-employee",
        type:"post",
        data:{
            old_employee_name: editItemList.value,
            new_employee_name: editItemNameInput.value,
            employee_id: editItemPriceInput.value,
            password: editEmployeePasswordInput.value,
            type: "edit"
        },
        success:function(resp){
            console.log(resp);
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
            }
        }
    })
});

//**************************USER LOG OUT******************************//
//TODO [Patrick] : Add logout button and its functionalities

