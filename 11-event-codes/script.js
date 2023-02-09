const divInsert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
    console.log(event.code)
    divInsert.innerHTML=`
    <div class="key">
    ${ event.key === ' ' ? 'Space' : event.key }
    <small>event.key</small> 
    </div>
    <div class="key">
        ${event.keyCode}
        <small>event.keycode <i>deprecated</i></small> 
    </div>
    <div class="key">
        ${event.code}
        <small>event.code</small> 
    </div>
    `
})