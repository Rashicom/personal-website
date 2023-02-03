$(document).ready(function(){

    $("#formsubmitbtn").click(function(){

        var firstname=$("#firstname").val()
        var lastname=$("#lastname").val()
        var mail=$("#email").val()
        var contactnumber=$("#contactnumber").val()
        var usermessage=$("#usermessage").val()

        // display on consol

        console.log("first name : "+firstname)
        console.log("lastname : "+lastname)
        console.log("E mail id : "+mail)
        console.log("contact number :"+contactnumber)
        console.log("message : "+usermessage)
        
    })
    
    $("#messageform").validate({
        rules:{
            name:{
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
            contact:{
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

