function search_overlay_1(){
    document.getElementsByClassName('search-overlay')[0].style.display = 'flex'
    document.getElementsByClassName('scroll')[0].style.filter = 'blur(2px) brightness(50%)'
    document.getElementsByClassName('scroll')[0].style.pointerEvents = 'none'
    document.getElementsByTagName('main')[0].style.filter = 'blur(2px) brightness(50%)'
    document.getElementsByTagName('main')[0].style.pointerEvents = 'none'
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
    document.getElementsByClassName('CloseSearchButton')[0].style.visibility = 'visible'
}

function search_overlay_2(){
    document.getElementsByClassName('search-overlay')[0].style.display = 'none'
    document.getElementsByClassName('scroll')[0].style.filter = 'none'
    document.getElementsByClassName('scroll')[0].style.pointerEvents = 'all'
    document.getElementsByTagName('main')[0].style.filter = 'none'
    document.getElementsByTagName('main')[0].style.pointerEvents = 'all'
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll'
    document.getElementsByClassName('CloseSearchButton')[0].style.visibility = 'hidden'
}