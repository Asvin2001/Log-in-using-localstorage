// var a = document.getElementById("name")
var b = document.getElementById("email")
var c = document.getElementById("password")
// var d = document.getElementById("conpassword")
var e = document.getElementsByTagName("div")
var f = document.getElementById("st")
 g = localStorage.getItem("namee")
 h = localStorage.getItem("emailee")
 i = localStorage.getItem("passworde")
var p = document.getElementsByTagName("p")
var q = document.getElementsByTagName("button")
var r =document.getElementsByTagName("i")



if(h==null){
    alert("Please Sign up first")
    window.open("sigin.html","_parent")
}

        

function sndd() {


    if (b.value==g) {

        if(c.value==i){

        window.open("home.html","_self")
        e[5].className = "d-none"


        }
        else{
            e[5].className = "alert alert-danger mt-2 mx-auto w-25 "
            p[1].innerHTML="Wrong username or password"


        }
    }


    else if (b.value==h) {

        if(c.value==i){

            open("home.html","_self")


        e[5].className = "d-none"

        
        }
        else{
            e[5].className = "alert alert-danger mt-2 mx-auto w-25 "
            p[1].innerHTML="Wrong username or password"
        }
    }
    else{
        e[5].className = "alert alert-danger mt-2 mx-auto w-25 "
            p[1].innerHTML="Wrong username or password"

    }
 
}



function dlt() {


    if (b.value==g) {

        if(c.value==i){

            q[3].className="btn btn-danger float-end"
            alert("To confirm delete your account click confirm delete")
            e[5].className = "d-none"
        q[4].className="d-none"
        



        }
        else{
            e[5].className = "alert alert-danger mt-2 mx-auto w-25 "
            p[1].innerHTML="Wrong username or password"


        }
    }


    else if (b.value==h) {

        if(c.value==i){
            alert("To confirm delete your account click confirm delete")

        q[3].className="btn btn-danger float-end"
        e[5].className = "d-none"

        q[4].className="d-none"

        
        }
        else{
            e[5].className = "alert alert-danger mt-2 mx-auto w-25 "
            p[1].innerHTML="Wrong username or password"
        }
    }
    else{
        e[5].className = "alert alert-danger mt-2 mx-auto w-25 "
            p[1].innerHTML="Wrong username or password"

    }
 
 
}


function eye(){
    if(c.type=="password"){
        c.type="text"
        r[0].className="bi bi-eye-slash-fill"
        
    }

    else{
        c.type="password"
        r[0].className="bi bi-eye-fill"


    }
}



    // if (f.value == 1) {

    //     localStorage.setItem("namee", a.value)
    //     localStorage.setItem("emailee", b.value)
    //     localStorage.setItem("passworde", c.value)

        
        
    //     location.replace("https://www.w3schools.com")

    // }
    // else {

    //     e[9].className = "alert alert-danger mt-2 mx-auto w-25 "
    //     e[10].className = "alert alert-danger mt-2 mx-auto w-25 "


    // }


function cdel(){
    localStorage.clear()
    alert("Your Accound has been deleted Please Sign up again")
    window.open("sigin.html","_parent")
}











