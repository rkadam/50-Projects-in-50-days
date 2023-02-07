# 50-Projects-in-50-days

Reference: https://www.udemy.com/course/50-projects-50-days

### 1 - Expanding Cards

- It's live at [Expanding Cards on Raju's Guide](https://raju.guide/1-expanding-cards)
- I followed the tutorial as it is, but have to make few changes in order for things to work the way I wanted.
  - Tutorial suggests on removing _active_ class from all div elements irrespective of whether those divs are active or not.
  - I imporved that function such that it finds only divs that are _active_ and remove assciated class!
  ```
  function removeActiveClasses(){
    const activePanels = document.querySelectorAll('.panel.active')
    activePanels.forEach( panel => {
        panel.classList.remove('active')
    })
  }
  ```
  - Also I found that unless I would add some extra style to active panel, it doesn't show up rounded borders. I just added background and that seems to make it work in Chrome.
  ```
  .panel.active {
    flex: 5;
    border-radius: 25px;
    background: #73AD21;
  }
  ```
  - And finally I thought it will be cool to show the text vertically when panels are in minimized position. To make that happen I used _writing-mode_ css property with value _vertical-lr_ to give it my own touch!
  ```
  .panel h3 {
    font-size: 24px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
    writing-mode: vertical-lr;
  }
  ```

### 2 - Progress Steps

- [Progress Steps on Raju's Guide](https://raju.guide/2-progress-steps)

### 3 - Rotating Navigation

- [Rotating navigation on Raju.guide](https://raju.guide/3-rotating-navigation)

### 8 - Form Wave Animiation

- [Form wave animiation on Raju.guide](https://raju.guide/8-form-wave-animation)

### 9 - Sound Board

- [Sound Board on Raju.guide](https://raju.guide/9-sound-board/)

### 10 - Dad Jokes

- [Dad Jokes on Raju.guide](https://raju.guide/jokes)
