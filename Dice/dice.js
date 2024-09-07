var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var imgsrc1='images/'+randomNumber1+'.png'
var imgsrc2='images/'+randomNumber2+'.png'
var img1=document.querySelectorAll('img')[0]
var img2=document.querySelectorAll('img')[1]

img1.setAttribute('src',imgsrc1)
img2.setAttribute('src',imgsrc2)
// document.querySelector('h4').style.color='white'
if(randomNumber1>randomNumber2)
{
    document.querySelector('h4').innerHTML='Player 1 Wins🥇'
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector('h4').innerHTML='Player 2 Wins🥇'
}
else
{
    document.querySelector('h4').innerHTML='Its a draw😍' 
}