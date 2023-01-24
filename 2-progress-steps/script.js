const progress = document.getElementById('progress')
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActiveStepIndex = 1

nextButton.addEventListener('click', () =>{
    currentActiveStepIndex++

    if (currentActiveStepIndex > circles.length){
        currentActiveStepIndex = circles.length;
    }

    update()
})

prevButton.addEventListener('click', () => {
    currentActiveStepIndex--
    if(currentActiveStepIndex < 1){
        currentActiveStepIndex = 1
    }

    update()
})

function update(){
    circles.forEach( (circle, stepIndex) =>{
        if (stepIndex < currentActiveStepIndex){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (currentActiveStepIndex === 1){
        prevButton.disabled = true
    }else if(currentActiveStepIndex === circles.length){
        nextButton.disabled = true
    }else{
        prevButton.disabled = false
        nextButton.disabled = false
    }
}