for (var i = 0; i < document.querySelectorAll('.Drum').length; i++) {
    document.querySelectorAll('.Drum')[i].addEventListener('click', function () {
        var btnInnerHtml = this.innerHTML;
        
        switch (btnInnerHtml) {
            case 'W':
                var audio = new Audio('audio/1.mp3');
                
                audio.play();
                pressedShadow(btnInnerHtml,1000)
                break;
            case 'A':
                var audio = new Audio('audio/2.mp3')
                pressedShadow(btnInnerHtml,1000)
                audio.play()
                break;
            case 'S':
                var audio = new Audio('audio/3.mp3')
                pressedShadow(btnInnerHtml,1000)
                audio.play()
                break;
            case 'D':
                var audio = new Audio('audio/4.mp3')
                pressedShadow(btnInnerHtml,1000)
                audio.play()
                break;
            case 'J':
                var audio = new Audio('audio/5.mp3')
                pressedShadow(btnInnerHtml,1000)
                audio.play()
                break;
            case 'K':
                var audio = new Audio('audio/6.mp3')
                pressedShadow(btnInnerHtml,1000)
                audio.play()
                break;
            case 'L':
                var audio = new Audio('audio/7.mp3')
                pressedShadow(btnInnerHtml,1000)
                audio.play()
                break;
        }
    });
}

document.addEventListener('keypress', (e) => {
    
    switch (e.key.toUpperCase()) {
        case 'W':
            var audio = new Audio('audio/1.mp3');
            pressedShadow(e.key,1000)
            audio.play();
            break;
        case 'A':
            var audio = new Audio('audio/2.mp3')
            audio.play()
            pressedShadow(e.key,1000)
            break;
        case 'S':
            var audio = new Audio('audio/3.mp3')
            audio.play()
            pressedShadow(e.key,1000)
            break;
        case 'D':
            var audio = new Audio('audio/4.mp3')
            audio.play()
            pressedShadow(e.key,1000)
            break;
        case 'J':
            var audio = new Audio('audio/5.mp3')
            audio.play()
            pressedShadow(e.key,1000)
            break;
        case 'K':
            var audio = new Audio('audio/6.mp3')
            audio.play()
            pressedShadow(e.key,1000)
            break;
        case 'L':
            var audio = new Audio('audio/7.mp3')
            audio.play()
            pressedShadow(e.key,1000)
            break;
    }
})


function pressedShadow(key,time)
{
    var activeButton=document.querySelector('.'+key.toUpperCase())
    activeButton.classList.add('press')

    setTimeout(()=>{activeButton.classList.remove('press')},time)
}