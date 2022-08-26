

document.querySelector('div.hamburger-div').addEventListener('click',function () {


    this.classList.toggle('rotate-720');

    document.querySelector('div.section-header').classList.toggle('hide-') ;
    
    
      
   

    
    
})



function dom(selector) {

     return document.querySelector(selector);
    
}


 var check = dom('section.section-nav').style

 console.log(check);


check.backgroundColor = 'red';