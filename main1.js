const colors=['crimsom','yellow','orange','green','#f15025','rgba(133,122,200'];
var btn= document.getElementById(['btn'])
btn.addEventListener('click',changeColor);
var colorPicker =document.getElementById('color_picker');
colorPicker.addEventListener('mousemove',pick);
function changeColor (){
    var randomnumber =Math.floor(Math.random()*colors.length);
    console.log(randomnumber)
    document.body.style.backgroundColor = colors[randomnumber]
}


function pick(e){
    
    colorPicker.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";


}