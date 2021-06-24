
const contentEnine = document.getElementById('enine')
const contentMeanie = document.getElementById('meanie')
const contentMinnie = document.getElementById('minnie')
const contentMoe = document.getElementById('moe')
const dropDownForm = document.getElementById('dropdownForm')

window.onscroll = function () { myFunction() };

let isInViewport = (element) => {
    return   element.top <=  document.documentElement.clientHeight / 2 
}

function myFunction() {
    if (isInViewport(contentEnine.getBoundingClientRect())) {
        dropDownForm.down[0].selected = true
    }
    if (isInViewport(contentMeanie.getBoundingClientRect())) {
        dropDownForm.down[1].selected = true
    }
    if (isInViewport(contentMinnie.getBoundingClientRect())) {
        dropDownForm.down[2].selected = true
    }
    if (isInViewport(contentMoe.getBoundingClientRect())) {
        dropDownForm.down[3].selected = true
    }
}