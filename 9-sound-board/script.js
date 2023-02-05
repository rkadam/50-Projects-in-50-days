const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach( (sound) => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound
    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn)

    const audioElement = document.createElement('audio')
    audioElement.src =`sounds/${sound}.mp3` 
    audioElement.id = sound
    document.body.appendChild(audioElement)
})

function stopSongs(){
    sounds.forEach( (audio) => {
        let audioEl = document.getElementById(audio)
        if (!audioEl.paused){
            audioEl.pause()
            audioEl.currentTime = 0
        }            
    })
}