var a = document.getElementById("name")
var b = document.getElementById("email")
var c = document.getElementById("password")
var d = document.getElementById("conpassword")
var e = document.getElementsByTagName("div")
var f = document.getElementById("st")

var q = document.getElementsByTagName("button")
var r =document.getElementsByTagName("i")

function cng() {

    if (a.value.length == 0) {
        e[8].className = "alert alert-danger mt-2 mx-auto w-25 "
        f.value = "0"
    }
    else {

        if (b.value.length == 0) {
            e[8].className = "alert alert-danger mt-2 mx-auto w-25 "
            f.value = "0"
        }

        else {
            if (c.value.length == 0) {
                e[8].className = "alert alert-danger mt-2 mx-auto w-25 "
                f.value = "0"
                

            }

            else {
                if (c.value == d.value) {




                    e[8].className = "d-none "
                    e[9].className = "d-none "



                    f.value = "1"



                }
                else {

                    

                    e[9].className = "alert alert-danger mt-2 mx-auto w-25 "
                    

                }
            }

        }
    }
}


function snd() {
    if (f.value == 1) {

        localStorage.setItem("namee", a.value)
        localStorage.setItem("emailee", b.value)
        localStorage.setItem("passworde", c.value)
        window.open("index.html","_parent")

        
        
        

    }
    else {

        e[8].className = "alert alert-danger mt-2 mx-auto w-25 "
        e[9].className = "alert alert-danger mt-2 mx-auto w-25 "


    }
}


function can(){
    localStorage.clear()
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











