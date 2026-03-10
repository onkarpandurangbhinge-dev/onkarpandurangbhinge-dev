function book(){

alert("Your travel booking request has been sent! ✈️")

}


const searchBox = document.getElementById("searchBox")

searchBox.addEventListener("keyup", function(){

let filter = searchBox.value.toLowerCase()

let cards = document.querySelectorAll(".card")

cards.forEach(function(card){

let text = card.innerText.toLowerCase()

if(text.includes(filter))
card.style.display="block"
else
card.style.display="none"

})

})
