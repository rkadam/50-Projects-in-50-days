const textarea = document.getElementById("textarea")
const divLabelContainer = document.getElementById("labels")

textarea.addEventListener("keyup", (event) => {
    createLabels(event.target.value)

    if(event.key === 'Enter'){
        setTimeout( () =>{
            event.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createLabels(input){

    divLabelContainer.innerHTML = ''

    //Remove empty input strings.
    let validInputList = input.split(',').filter( (str) => str.trim() !== '')
    //Remove starting/trailing white spaces.
    let trimmedChoiceList = validInputList.map((str) => str.trim())

    trimmedChoiceList.forEach( (choice) => {
        const labelElement = document.createElement('span')
        labelElement.classList.add('label')
        labelElement.innerText = choice
        divLabelContainer.appendChild(labelElement)
    })
}

function randomSelect(){
    const times = 30
    const timeInterval = 100 //in milliseconds

    highlightIntervalId = setInterval(()=>{
        //select random Label.
        const randomObject = selectRandomLabel()
        highlightLabel(randomObject.labelElement)

        setTimeout( () => {
            unhighlightLabel(randomObject.labelElement)
        }, timeInterval)
    },100)

    setTimeout( () => {
        clearInterval(highlightIntervalId)
        const randomObject = selectRandomLabel()
        console.log(randomObject.index, randomObject.labelElement)
        randomObject.labelElement.classList.remove('highlight')
        randomObject.labelElement.classList.add('highlight')            
    }, times * timeInterval)

}

function selectRandomLabel(){
    const labels = document.querySelectorAll(".label")
    const index = Math.floor(Math.random() * labels.length)
    const labelElement = labels[index] 
    return {index, labelElement}
}

function highlightLabel(label){
    label.classList.add('highlight')
}

function unhighlightLabel(label){
    label.classList.remove('highlight')
}