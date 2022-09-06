

let z = 0 ;


document.querySelector('svg#ham-svg').addEventListener('click',function () {

    
    
    if (z==0) {
        document.querySelector('nav').classList.add('nav-slide-down');
        document.querySelector('nav').classList.remove('nav-slide-up');
        

        return z += 1
        
    } else {
        document.querySelector('nav').classList.remove('nav-slide-down');
        document.querySelector('nav').classList.add('nav-slide-up');


        

     

        
        return z -=1

        
        
        // document.querySelector('path#line-svg-1').classList.remove('ham-line-1-anim');
        // document.querySelector('path#line-svg-3').classList.remove('ham-line-2-anim');
        
        
        

    }

    


});



// slipping those cardss cool 


// click for more details
const anchor_for_content = document.createElement('a');
       anchor_for_content.href = "mailto: antonrejoe@gmail.com";
       anchor_for_content.style = 'position:absolute; width:fit-content; top:0; bottom:0; right:0; left:0; margin:0 auto; margin-top:30%;';
       
       anchor_for_content.classList.add('banana', 'mail_me');
       console.log(anchor_for_content);


const i = document.createElement('i');
i.classList.add("fa-solid", "fa-pen-to-square", "fa-4x");
i.style.color = '#4C3D56;';
i.title = 'Ping me a mail';
setTimeout(() => {
    anchor_for_content.appendChild(i); 
}, 1500);

console.log(anchor_for_content);


// const a_banana = document.createElement('a');
// a_banana.href = "mailto: antonrejoe@gmail.com";
// a_banana.style = "position:absolute; width:fit-content; top:0; bottom:0; right:0; left:0; margin:0 auto; margin-top:10%;" ;
// const a_banana_inside = document.createElement('i');
// a_banana_inside.classList.add('fa-brands' ,'fa-twitter' ,'fa-6x');
// // adding that font awesome icon over here 

// a_banana.innerHTML = a_banana_inside;

// console.log(a_banana);
// console.log(a_banana_inside);






// for our cute card number 1

let flip = 0;

document.querySelector('#card1 > a > span ').addEventListener('click',function () {
    
    
    if (flip == 0) {
        document.querySelector('#card1').classList.add('card-rotate');
        document.querySelector('#card1').classList.remove('card-rotate-reverse');
        document.querySelector('#card1').classList.add('card-bg');
        setTimeout(() => {
            document.querySelector('#card1 > a:has(span):not(.logo-link):not(.banana) > span').innerHTML = 'Go back';
            
            document.querySelector('#card1 > a:has(span):not(.logo-link):not(.banana) > span').style.transform = 'rotateY(0.5turn)';
        }, 100);
        // document.querySelector('#card1 > a').setHTML = '<a class="banana" style="position:absolute; width:fit-content; top:0; bottom:0; right:0; left:0; margin:0 auto; margin-top:10%;" href="mailto: antonrejoe@gmail.com">fddf</a>';
        
        setTimeout(() => {
            document.querySelector('#card1').appendChild(anchor_for_content);
            document.querySelector('#card1 > a.banana').style.transform = 'rotateY(0.5turn)';
            
        }, 500);
        
        



        return flip+=1

    
    } else {
        document.querySelector('#card1').classList.remove('card-rotate');
        document.querySelector('#card1').classList.add('card-rotate-reverse');
        document.querySelector('#card1').classList.remove('card-bg');
        
        setTimeout(() => {
            document.querySelector('#card1 > a:has(span):not(.logo-link):not(.banana) > span').innerHTML = 'More details';
            document.querySelector('#card1 > a:has(span):not(.logo-link):not(.banana) > span').style.transform = 'rotateY(1turn)';
        }, 0.7);
        
       
        document.querySelector('#card1').removeChild(anchor_for_content);
       
        // document.querySelector('#card1').setHTML = '<a class="banana" style="position:absolute; width:fit-content; top:0; bottom:0; right:0; left:0; margin:0 auto; margin-top:10%;" href="mailto: antonrejoe@gmail.com">fddf</a>';

        return flip-=1
}
    
});


// for our cute card 2


const card_2_walla = document.createElement('a');
        card_2_walla.title = 'Ping me on twitter';
       card_2_walla.href = "https://twitter.com/antonrejoe";
       card_2_walla.style = 'position:absolute; width:fit-content; top:0; bottom:0; right:0; left:0; margin:0 auto; margin-top:20%;';
       
       card_2_walla.classList.add('banana' , 'twitter_dp');
       console.log(card_2_walla);


const lelo_2 = document.createElement('img');
lelo_2.src='https://pbs.twimg.com/profile_images/1530896655054417920/DxFeiNVc_400x400.jpg';
lelo_2.style = 'height:100px; width:100px; border-radius:100%;'
setTimeout(() => {
    card_2_walla.appendChild(lelo_2); 
}, 1500);

let flip_card_2 = 0;

document.querySelector('#card2 > a > span ').addEventListener('click',function () {
    
    
    if (flip_card_2 == 0) {
        document.querySelector('#card2').classList.add('card-rotate');
        document.querySelector('#card2').classList.remove('card-rotate-reverse');
        document.querySelector('#card2').classList.add('card-bg');
        setTimeout(() => {
            document.querySelector('#card2 > a:has(span):not(.logo-link):not(.banana) > span').innerHTML = 'Go back';
            
            document.querySelector('#card2 > a:has(span):not(.logo-link):not(.banana) > span').style.transform = 'rotateY(0.5turn)';
        }, 100);
        // document.querySelector('#card1 > a').setHTML = '<a class="banana" style="position:absolute; width:fit-content; top:0; bottom:0; right:0; left:0; margin:0 auto; margin-top:10%;" href="mailto: antonrejoe@gmail.com">fddf</a>';
        
        setTimeout(() => {
            document.querySelector('#card2').appendChild(card_2_walla);
            document.querySelector('#card2 > a.banana').style.transform = 'rotateY(0.5turn)';
            
        }, 500);
        
        



        return flip_card_2+=1

    
    } else {
        document.querySelector('#card2').classList.remove('card-rotate');
        document.querySelector('#card2').classList.add('card-rotate-reverse');
        document.querySelector('#card2').classList.remove('card-bg');
        
        setTimeout(() => {
            document.querySelector('#card2 > a:has(span):not(.logo-link):not(.banana) > span').innerHTML = 'More details';
            document.querySelector('#card2 > a:has(span):not(.logo-link):not(.banana) > span').style.transform = 'rotateY(1turn)';
        }, 0.7);
        
       
        document.querySelector('#card2').removeChild(card_2_walla);
       
        // document.querySelector('#card1').setHTML = '<a class="banana" style="position:absolute; width:fit-content; top:0; bottom:0; right:0; left:0; margin:0 auto; margin-top:10%;" href="mailto: antonrejoe@gmail.com">fddf</a>';

        return flip_card_2-=1
}
    
});



// for our cute card number 3


const card_3_walla = document.createElement('a');
       card_3_walla.href = "https://discord.com/users/934634687618486312";
       card_3_walla.style = 'position:absolute; width:fit-content; top:0; bottom:0; right:0; left:0; margin:0 auto; margin-top:30%;';
       
       card_3_walla.classList.add('banana', 'discord_msg_me');
       console.log(card_3_walla);


const lelo = document.createElement('i');
lelo.title = 'Ping me on Discord';
lelo.classList.add("fa-solid", "fa-message", "fa-4x" );   
lelo.style.color = '#4C3D56;';
setTimeout(() => {
    card_3_walla.appendChild(lelo); 
}, 1500);

console.log(card_3_walla + 'this is it');


let flip_card_3 = 0;

document.querySelector('#card3 > a > span ').addEventListener('click',function () {
    
    
    if (flip_card_3 == 0) {
        document.querySelector('#card3').classList.add('card-rotate');
        document.querySelector('#card3').classList.remove('card-rotate-reverse');
        document.querySelector('#card3').classList.add('card-bg');
        setTimeout(() => {
            document.querySelector('#card3 > a:has(span):not(.logo-link):not(.banana) > span').innerHTML = 'Go back';
            
            document.querySelector('#card3 > a:has(span):not(.logo-link):not(.banana) > span').style.transform = 'rotateY(0.5turn)';
        }, 100);
        // document.querySelector('#card1 > a').setHTML = '<a class="banana" style="position:absolute; width:fit-content; top:0; bottom:0; right:0; left:0; margin:0 auto; margin-top:10%;" href="mailto: antonrejoe@gmail.com">fddf</a>';
        
        setTimeout(() => {
            document.querySelector('#card3').appendChild(card_3_walla);
            document.querySelector('#card3 > a.banana').style.transform = 'rotateY(0.5turn)';
            
        }, 500);
        
        



        return flip_card_3+=1

    
    } else {
        document.querySelector('#card3').classList.remove('card-rotate');
        document.querySelector('#card3').classList.add('card-rotate-reverse');
        document.querySelector('#card3').classList.remove('card-bg');
        
        setTimeout(() => {
            document.querySelector('#card3 > a:has(span):not(.logo-link):not(.banana) > span').innerHTML = 'More details';
            document.querySelector('#card3 > a:has(span):not(.logo-link):not(.banana) > span').style.transform = 'rotateY(1turn)';
        }, 0.7);
        
       
        document.querySelector('#card3').removeChild(card_3_walla);
       
        // document.querySelector('#card1').setHTML = '<a class="banana" style="position:absolute; width:fit-content; top:0; bottom:0; right:0; left:0; margin:0 auto; margin-top:10%;" href="mailto: antonrejoe@gmail.com">fddf</a>';

        return flip_card_3-=1
}
    
});







// const use = document.createElement('a');
// use.appendChild(a_banana_inside);

// console.log(use);

// spot the difference between using appendChild() and innerHTML in notion after the internet comes back





// document.querySelectorAll('div.card > a > span').hover





// hamburger animation


let hamburger = 0;


document.querySelector('svg#ham-svg').addEventListener('click',function () {
    
    if (hamburger==0) {
        document.querySelector('path#Line1').classList.add('line-1-rot');
        document.querySelector('path#Line2').classList.add('line-2-rot');
        document.querySelector('path#Line3').classList.add('line-3-rot');
        document.querySelector('svg#ham-svg').classList.add('burger-rotate');
        document.querySelector('path#Line1').classList.remove('line-1-rot-reverse');
        document.querySelector('path#Line2').classList.remove('line-2-rot-reverse');
        document.querySelector('path#Line3').classList.remove('line-3-rot-reverse');
        document.querySelector('svg#ham-svg').classList.remove('burger-rotate-reverse');

        return hamburger+=1
       
        
    } else {
        document.querySelector('path#Line1').classList.remove('line-1-rot');
        document.querySelector('path#Line2').classList.remove('line-2-rot');
        document.querySelector('path#Line3').classList.remove('line-3-rot');
        document.querySelector('svg#ham-svg').classList.remove('burger-rotate');

        document.querySelector('path#Line1').classList.add('line-1-rot-reverse');
        document.querySelector('path#Line2').classList.add('line-2-rot-reverse');
        document.querySelector('path#Line3').classList.add('line-3-rot-reverse');
        document.querySelector('svg#ham-svg').classList.add('burger-rotate-reverse');


        return hamburger-=1

    }
    
    
})