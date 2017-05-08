/**
 * Created by Mark Skerl on 2017-05-04.
 */
$(document).ready(function(){

/**********************************VARS*************************************/
    var loginBut = document.getElementById("loginButton"),
        passInput = document.getElementById("passWord"),
        empInput =document.getElementById("empId");
    
/**********************************LOGIN*************************************/
    loginBut.addEventListener("click", function(){
        console.log("Attempting to login");
        $.ajax({
            url:"/accountLOGIN",
            type:"post",
            data:{
                d_password: passInput.value,
                d_empId: empInput.value
            },
            success:function(resp){
                console.log(resp);
                if(resp.status == "success"){
                    location.href = "/admin-page";
                }
                if(resp.status == "success2"){
                    location.href = "/kitchen-page";
                }
            }
        }); 
    });
})
