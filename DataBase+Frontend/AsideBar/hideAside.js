function hideAside(){
    const hideButton = document.querySelector('.hide')
    const showButton = document.querySelector('.show')
    const aside = document.querySelector('aside')
    hideButton.addEventListener('click', function(){
        hideButton.style.display = 'none'
        aside.style.animation = 'slideOut 1s'
        

            aside.style.display = 'none'
     
        showButton.style.display = 'block'
    })
}

export {hideAside}