
function colorGenerator(){

    let red = Math.floor(Math.random() * 255 )
    let green = Math.floor(Math.random() * 255 )
    let blue = Math.floor(Math.random() * 255 )

    return ` #${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

function custopElement(color) {
    
    let p = document.createElement('p')
    p.textContent = ` This Color Code Copy ${color} Success `
    p.className ='alert alert-success'



    setTimeout(() => {
        p.remove()
    }, 3000);


    document.querySelector('.notification').appendChild(p)


}

