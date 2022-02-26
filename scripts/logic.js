document.addEventListener('DOMContentLoaded', initilizeScript)


function initilizeScript(){

    const brush = {
        actived: false,
        moving: false,
        pos: {x: 0, y:0},
        prevPos: null
    }

    const screen = document.getElementById('screen');
    const ctx = screen.getContext('2d'); 



    const drawLine = (line) =>{
        
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#8a2be2',
        ctx.beginPath();
        ctx.moveTo(line.prevPos.x, line.prevPos.y)
        ctx.lineTo(line.pos.x, line.pos.y)
        ctx.stroke()
    }
    
    screen.onmousedown = () =>{brush.actived = true};
    screen.onmouseup  = () =>{brush.actived = false, console.log(brush)};
   
    screen.onmousemove = (event) =>{
        brush.pos.x = event.clientX;
        brush.pos.y = event.clientY;
        brush.moving = true;
    }

    const cicle  = () => {
        if(brush.actived && brush.moving && brush.prevPos ){
            drawLine({pos: {x: brush.pos.x, y: brush.pos.y}, prevPos: {x: brush.prevPos.x, y: brush.prevPos.y}})
            brush.moving = false
            console.log(brush.pos.x, brush.pos.y)
        }
        brush.prevPos = {x: brush.pos.x, y: brush.pos.y} 

        setTimeout(cicle, 20)
    }

    cicle()
}