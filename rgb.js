var colors=generateRandomColors(6);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#messageDisplay");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener('click',function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    colors=generateRandomColors(3);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display="none";
        }
    }

});
hardBtn.addEventListener('click',function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    colors=generateRandomColors(6);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }
        
    }
});
resetButton.addEventListener('click',function(){
    //generate new colors
    colors=generateRandomColors(6);
    //choose a random color from the array
    pickedColor=pickColor();
    //change the rgb according to picked color
    colorDisplay.textContent=pickedColor;
    //change the colora of the square
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor="slateblue";
    messageDisplay.textContent="";
})
colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++){
    //addInitial colors to square
    squares[i].style.backgroundColor=colors[i];
    //add event listener
    squares[i].addEventListener('click',function(){
        //grab the clicked color
        var clickedColor=this.style.backgroundColor;
        //compare if the clickedColor is sa,e as the rgb in h1
        if(clickedColor===pickedColor){
            messageDisplay.textContent="Correct!!";
            resetButton.textContent="play again?";
            changeColor(clickedColor);
            h1.style.backgroundColor=clickedColor;
        }
        else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try Again!!";
        }
    });
}



function changeColor(color){
    //loop through all squares
    //change the color of all
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}

function pickColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generateRandomColors(num){
    //create an array
    var arr=[];
    //loop through it for num times
    for(var i=0;i<num;i++){
        //insert random colors in the array
        arr.push(randomColors());
    }
    //return the array
    return arr;
}
function randomColors(){
    //select a red from0-255
    var r=Math.floor(Math.random()*256);
    //select a green from 0-255
    var g=Math.floor(Math.random()*256);
    //select a blue from 0-255
    var b=Math.floor(Math.random()*256);
    return "rgb("+ r +", "+ g  +", "+ b +")";
}
