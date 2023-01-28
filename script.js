$(document).ready(function(){

    // $("#formsubmitbtn").click(function(){
    //     var firstname=$("#firstname").val()
    //     console.log("firstname")
    // })
    
    $("#messageform").validate({
        rules:{
            firstname:{
                required:true,
                minlength:2
            },
            lastname:{
                required:true,
                minlength:2
            },
            email:{
                required:true,
                email:true
            },
            contactnumber:{
                required:true,
                minlength:10
            },
            message:{
                required:true,
                minlength:2
            }

            
        }
    })
})

