const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
let hexColor='#'
document.querySelector('button').addEventListener('click',()=>{
    hexColor='#';
    for(let i=0;i<6;i++)
    {
        randomInteger=Math.floor(Math.random()*16)

        hexColor+=hex[randomInteger]
    }
    console.log(hexColor)
    
    document.querySelector('.container').style.backgroundColor = hexColor;
    document.querySelector('.head').innerHTML = 'Background Color: <span id="hexColor">' + hexColor + '</span>';
    document.querySelector('#hexColor').style.color = hexColor;
    
hexColor='#'
})
// document.body.style.backgroundColor=hexColor;

