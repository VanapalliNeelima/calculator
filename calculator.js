var screen=document.getElementById("sc");
var buttons=document.querySelectorAll("button");
var screenValue="";
var r=/^\s*([-+.]?)(\d+)(?:\s*([-+*.\/])\s*((?:\s[-+.])?\d+)\s*)+$/
for(item of buttons){
    item.addEventListener("click",(e)=>{
        buttonText=e.target.innerText;
        console.log("button text is ",buttonText)
        if(buttonText=="X"){
            buttonText="*";
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=="Clr"){
            screenValue="";
            screen.value=screenValue;
        }
        else if(buttonText=="="){
            if(r.test(screenValue)){
                screen.value=eval(screenValue);
                document.getElementById("sc").style.border=" 5px solid green";
            }
            else{
                screen.value="Invalid";
                document.getElementById("sc").style.border="5px solid red";
            }
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    })
}