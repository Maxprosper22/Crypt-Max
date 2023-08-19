const menuBtn = document.getElementById('menu-btn')
const navBar = document.getElementById('nav-bar')
const navList = document.getElementById('nav-list')

menuBtn.addEventListener('click', (e)=>{
    if (navList.style.display == 'none') {
        navList.style.display = 'flex'
        navBar.style.height = '6em'
    }
    else if (navList.style.display != 'none') {
        navList.style.display = 'none'
        navBar.style.height = '3em'
    }
})