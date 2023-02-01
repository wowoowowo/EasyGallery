const Cards = document.querySelectorAll('.card');
const moveableborder = document.querySelector('.actionborder');


  
 
Cards.forEach(
    Card => {Card.addEventListener('mouseover', (e) => {
        Card.dataset.set='true';
     
         Cards.forEach(Eve => {
         Eve != Card && (Eve.dataset.set='false');
         })
})
})



