const jokeEl = document.getElementById("joke")

const jokeButton = document.getElementById("jokeButton")
jokeButton.addEventListener('click', getJoke)

getJoke()

async function getJoke(){
    const config = {
        'headers': {
            'Accept' : 'application/json'
        }
    }

    const jokeResponse = await fetch('https://icanhazdadjoke.com', config)
    const jokeData = await jokeResponse.json()
    jokeEl.innerHTML = jokeData.joke
}