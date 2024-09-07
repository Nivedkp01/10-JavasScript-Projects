// const counter = document.querySelector('.count');
//     document.querySelector('#Decrease').addEventListener('click', () => {
//         counter.innerHTML = parseInt(counter.innerHTML) - 1;
//     });

//     document.querySelector('.Reset').addEventListener('click', () => {
//         counter.innerHTML = 0;
//     });

//     document.querySelector('.Increase').addEventListener('click', () => {
//         counter.innerHTML = parseInt(counter.innerHTML) + 1;
//     });

let count=0
const btns=document.querySelectorAll('button')
const cnt=document.querySelector('.count')
btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const styles=e.currentTarget.classList;
        if(styles.contains('Decrease'))
        {
            count-=1
            
        }
        else if(styles.contains('Increase'))
        {
            count+=1
        }
        else if(styles.contains('Reset'))
        {
            count=0
        }

        if(count>0)
        {
            cnt.style.color='green'
        }
        else if(count==0)
        {
            cnt.style.color='blue'
        }
        else
        {
            cnt.style.color='red'
        }
        cnt.textContent=count
    })

})


