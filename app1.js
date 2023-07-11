var a=document.getElementById("bg")
var boldin=document.getElementById("Bold")
var italicin=document.getElementById("italic")
var b=document.getElementById("text")
var c=document.getElementById("boldbtn")
var d=document.getElementById("italicbtn")
var e=document.getElementById("size")
var f=document.getElementById("texx")
var g=document.getElementById("bgcolor")
var h=document.getElementById("txtcolor")
var i=document.getElementById("fbtn")
var j=document.getElementById("sbtn")
var k=document.getElementById("tbtn")
var l=document.getElementById("ssul")
var m=document.getElementById("ddul")
var n=document.getElementById("daaul")
var o=document.getElementById("deccol")
var p=document.getElementById("sc")
var q=document.getElementById("sbs")
var r=document.getElementById("scolor")
var s=document.getElementById("bgimage")
var t=document.getElementById("bgb")



setInterval(function bgcolo(){
    a.style.backgroundColor=(g.value)
},10)


setInterval(function txco(){
    b.style.color=(h.value)
},10)



// function black(){
//     a.style.backgroundColor="#000000"
// }
// function green(){
//     a.style.backgroundColor="#198754"
// }
// function red(){
//     a.style.backgroundColor="#dc3545"
// }
// function blue(){
//     a.style.backgroundColor="#0d6efd"
// }
// function white(){
//     a.style.backgroundColor="#f8f9fa"
// }


// function txblack(){
//     a.style.color="#000000"
// }
// function txgreen(){
//     a.style.color="#198754"
// }
// function txred(){
//     a.style.color="#dc3545"
// }
// function txblue(){
//     a.style.color="#0d6efd"
// }
// function txwhite(){
//     a.style.color="#f8f9fa"
// }



function bold(){
    if(boldin.checked == true){
        b.style.fontWeight="normal"
        c.className = "btn btn-light";
        }
    else{
        b.style.fontWeight="bolder"
        c.className = "btn btn-primary";
        
    }
}

function italic(){
    if(italicin.checked == true){
        b.style.fontStyle="normal"
                d.className = "btn btn-light";
        }
    else{
        b.style.fontStyle="italic"
        d.className = "btn btn-primary";
        
    }
}

setInterval(   function stize(){


    b.style.fontSize=(e.value)+"px"


},10)

setInterval(function tex(){
    b.innerHTML=f.value
},1);



function fo(){

    b.style.fontFamily = "Impact,Charcoal,sans-serif";
    i.style.backgroundColor="blue"
    i.style.color="#ffffff"

    j.style.backgroundColor="#0dcaf0"
    j.style.color="black"

    k.style.backgroundColor="#0dcaf0"
    k.style.color="black"

}

function ft(){
    
    b.style.fontFamily = "arial";
    j.style.backgroundColor="blue"
    j.style.color="#ffffff"

    i.style.backgroundColor="#0dcaf0"
    i.style.color="black"

    k.style.backgroundColor="#0dcaf0"
    k.style.color="black"

}


function fth(){
    
    b.style.fontFamily = "Helvetica Neue";
    k.style.backgroundColor="blue"
    k.style.color="#ffffff"

    i.style.backgroundColor="#0dcaf0"
    i.style.color="black"

    j.style.backgroundColor="#0dcaf0"
    j.style.color="black"

}




function sul(){
    b.style.textDecoration="underline"
    
    l.style.backgroundColor="blue"
    l.style.color="#ffffff"

    m.style.backgroundColor="#0dcaf0"
    m.style.color="black"

    n.style.backgroundColor="#0dcaf0"
    n.style.color="black"
    
}

function dul(){
    b.style.textDecoration="underline"
    b.style.textDecorationStyle="dotted"

    m.style.backgroundColor="blue"
    m.style.color="#ffffff"

    l.style.backgroundColor="#0dcaf0"
    l.style.color="black"

    n.style.backgroundColor="#0dcaf0"
    n.style.color="black"
}


function daul(){
    b.style.textDecoration="underline"
    b.style.textDecorationStyle="dashed"

    n.style.backgroundColor="blue"
    n.style.color="#ffffff"

    l.style.backgroundColor="#0dcaf0"
    l.style.color="black"

    m.style.backgroundColor="#0dcaf0"
    m.style.color="black"
}


setInterval(  function dcolor(){
    b.style.textDecorationColor=o.value
},10)


function shad(){
    if(p.checked == true){
        b.style.textShadow="none"
                q.className = "btn btn-light";
        }
    else{
        
        q.className = "btn btn-primary";
        b.style.textShadow="3px 3px 5px black"
        
    }
    
}

 setInterval( function scoloo(){
    if(p.checked==true){
    b.style.textShadow="3px 3px 5px" +(r.value)
}
},10)



function imgccc(){
    t.src=URL.createObjectURL(s.files[0]);
}


function remobgimg(){
    t.src=""
}