var text=document.getElementById("txtarea");
function b1(){
    if(text.style.fontWeight!="bold"){
        document.getElementById("txtarea").style.fontWeight="bold";
        document.getElementById("boldbtn").style.backgroundColor="rgb(142, 238, 206)";
    }
    else{
        document.getElementById("txtarea").style.fontWeight="normal";
        document.getElementById("boldbtn").style.backgroundColor="aquamarine";
    }
}
function b2(){
    if(text.style.fontStyle!="italic"){
        document.getElementById("txtarea").style.fontStyle="italic";
        document.getElementById("italicbtn").style.backgroundColor="rgb(142, 238, 206)";
    }
    else{
        document.getElementById("txtarea").style.fontStyle="normal";
        document.getElementById("italicbtn").style.backgroundColor="aquamarine";
    }
}
function b3(){
    document.getElementById("txtarea").style.textAlign="left";

    document.getElementById("leftbtn").style.backgroundColor="rgb(142, 238, 206)";
    document.getElementById("midbtn").style.backgroundColor="aquamarine";
    document.getElementById("rightbtn").style.backgroundColor="aquamarine";
}
function b4(){
    document.getElementById("txtarea").style.textAlign="center";

    document.getElementById("leftbtn").style.backgroundColor="aquamarine";
    document.getElementById("midbtn").style.backgroundColor="rgb(142, 238, 206)";
    document.getElementById("rightbtn").style.backgroundColor="aquamarine";
}
function b5(){
    document.getElementById("txtarea").style.textAlign="right";

    document.getElementById("leftbtn").style.backgroundColor="aquamarine";
    document.getElementById("midbtn").style.backgroundColor="aquamarine";
    document.getElementById("rightbtn").style.backgroundColor="rgb(142, 238, 206)";
}
function b6(){
    document.getElementById("txtarea").value="";
}

function b7(){
    document.getElementById("txtarea").style.fontSize=".7rem";

    document.getElementById("fontsmall").style.backgroundColor="rgb(142, 238, 206)";
    document.getElementById("fontmid").style.backgroundColor="aquamarine";
    document.getElementById("fontbig").style.backgroundColor="aquamarine";
}
function b8(){
    document.getElementById("txtarea").style.fontSize=".833rem";

    document.getElementById("fontsmall").style.backgroundColor="aquamarine";
    document.getElementById("fontmid").style.backgroundColor="rgb(142, 238, 206)";
    document.getElementById("fontbig").style.backgroundColor="aquamarine";
}
function b9(){
    document.getElementById("txtarea").style.fontSize="1rem";

    document.getElementById("fontsmall").style.backgroundColor="aquamarine";
    document.getElementById("fontmid").style.backgroundColor="aquamarine";
    document.getElementById("fontbig").style.backgroundColor="rgb(142, 238, 206)";
}
