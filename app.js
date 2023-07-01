const firstContainer = document.querySelector(".firstcontainer")
const secondContainer = document.querySelector(".secondContainer")
const submitButton = document.getElementById("btn-submit")
const rates = document.querySelectorAll(".btn")
const rating = document.getElementById("rating")

submitButton.addEventListener('click', () => {
    firstContainer.classList.add('hidden');
    secondContainer.classList.remove('hidden')

   
})

rates.forEach((rate) =>{
        rate.addEventListener('click', () =>{
            rating.innerhtml = rate.innerhtml
        })
    })