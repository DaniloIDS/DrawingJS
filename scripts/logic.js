document.addEventListener('DOMContentLoaded', initilizeScript)


function initilizeScript(){
    const screen = document.getElementById('screen')

    let ctx = screen.getContext('2d')

    ctx.width = 600
    ctx.height = 400
}