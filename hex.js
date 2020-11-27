const colors=[1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];
var btn= document.getElementById(['btn'])
btn.addEventListener('click',changeColor);
function changeColor (){
    
    var rad='#';
    for(i=0;i<=5;i++){
        var randomnumber =Math.floor(Math.random()*colors.length);
     rad += colors[randomnumber];
    }
    console.log(rad);

    document.body.style.backgroundColor = rad;
}
