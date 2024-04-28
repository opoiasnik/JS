function showAside(){

    const showButton = document.querySelector('.show')
    const aside = document.querySelector('aside')
    const hideButton = document.querySelector('.hide')
    showButton.addEventListener('click', function(){
        showButton.style.display = 'none';
        aside.style.display = 'block'
        aside.style.animation = 'slideIn 1s '
        hideButton.style.display = 'block'
    })
}

export{showAside}