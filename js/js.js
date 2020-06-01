var heroBackground = document.querySelector(`#hero-background`)
var tituloContent = document.querySelector(`.title-content`)
var iphone = document.querySelector(`.iphone`)
var spinner = document.querySelector(`.spinner`)

window.onload = function(){
    setTimeout(function(){
        heroBackground.style.width = `100%`
    }, 1000)
    setTimeout(function(){
        tituloContent.style.opacity = `1`
    }, 2500)
    setTimeout(function(){
        iphone.style.opacity = `1`
    }, 3000)
    setTimeout(function(){
        spinner.style.opacity = `1`
    }, 4000)
}