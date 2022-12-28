function toggleMode() {
    const body = document.body 
    body.classList.toggle('light')
    
    const img = document.querySelector("#profile img")

    const toggle = img = (body.classList.contains('light')) ? img.setAttribute('src', './assets/profile-light-mode.jpg') : img.setAttribute('src', './assets/profile.png')

    }
