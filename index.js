

var hamburger = document.querySelector('._hamburger');



hamburger.addEventListener('click', animateHamburger);

hamburger.addEventListener('click', show_navbar);

hamburger.addEventListener('click', rotate_burger);

var state_of_burger = 0;


function doms($selector) {

    var o = document;

    return o.querySelector($selector);

  }


function animateHamburger()
{
    if(state_of_burger == 0)
    {
        
        
        document.querySelector('.hamburger.mid').classList.add('hide');
        document.querySelector('.hamburger.above').classList.add('rot_up');
        document.querySelector('.hamburger.below').classList.add('rot_down');
        
        return  state_of_burger += 1
    
    }else{
        document.querySelector('.hamburger.mid').classList.remove('hide');
        document.querySelector('.hamburger.above').classList.remove('rot_up');
        document.querySelector('.hamburger.below').classList.remove('rot_down');
       
        
        // document.getElementById('._hamburger').addEventListener('mouseover',function () {
        
        //     document.getElementById('._hamburger').style.backgroundColor='red';
            
        // },function () {
        //     document.getElementById('._hamburger').style.backgroundColor='white';
        // });
       
       
        return  state_of_burger -= 1
    }
}


var state_of_navbar = 0;



///hamburger.addEventListener('click', visibleNavar);


function visibleNavar() {

    if(state_of_navbar == 0){
        document.querySelector('.nav').classList.add('nav-visibility');
        
        document.querySelector('.menu-list-item1').classList.add('nav-visibility');
        document.querySelector('nav').classList.add('nav-visibility');
        

         return   state_of_navbar += 1
    }else{
        document.querySelector('.nav').classList.remove('nav-visibility');
        document.querySelector('.menu-list-item1').classList.remove('nav-visibility');
        document.querySelector('nav').classList.remove('nav-visibility');
        return state_of_navbar -= 1
    }
    
}

 var $nav_bar_closed = 'hidden'
 var  $nav_bar_open = 'visible'

 var visible = 'visible'
 var hidden = 'hidden'


 const nav_bar =  document.querySelector('li.menu-list-item1.active')

 var $zero_view = '0vh' ;
var $full_view = '-100vw' ;
var $move_ryt = '100vw';
var $appear = '0vw';
function show_navbar()
{

    if($nav_bar_closed === 'hidden' ){
        document.querySelector( 'li.menu-list-item1.active' ).style.visibility = $nav_bar_open;
        document.querySelector( 'li.menu-list-item1.active' ).style.opacity = '0.95';
        document.querySelector( 'li.menu-list-item1.active' ).style.transform ='translateX(0vw)' ;

       

        return $nav_bar_closed = visible 
    }
        if($nav_bar_closed === visible  )
        {
        document.querySelector( 'li.menu-list-item1.active' ).style.visibility = hidden;
        document.querySelector( 'li.menu-list-item1.active' ).style.opacity = '0';
        document.querySelector( 'li.menu-list-item1.active' ).style.transform ='translateX(100vw)'
        return $nav_bar_closed = hidden 
    }
   




};


function rotate_burger() {
    
    document.querySelector('._hamburger').classList.toggle('hamburger-rot');
    
    
}


function selector(name) {
    const x = document.querySelectorAll(name);
    return x;


}


// my_links = [];

// my_links.push(selector('.menu-link'));

// console.log(selector('.menu-link'));


// console.log(my_links[0]);
for (let i = 0; i <4; i++){

    // const my_links_present = [];
    // my_links_present.push( my_links[i]); ///this one is not useful coz' the 
    ///⬆️⬆️<my_links walla> the above commented code selects the a.menu-link altogether <it gives an array of a tags>

    // console.log(my_links[i]);


    const a_content = '.menu-link' +'.' + 'a' +(i+1) ;
    
    
    const check =   selector(a_content)  ;
    ///console.log(check);
     console.log(a_content);

    // const  lambda = 0 ; 

    // switch (lambda) {
    //     case (lambda == 0):
    
    //         document.getElementsByClassName("a_content").style.color = "red" ;
    //         lambda +=1;
    
            
    //         break;
    
    //     default:
    //         document.getElementsByClassName("a_content").style.color = 'white' ;
    //         break;
    // }
    
    

    

}


// var str,
// element = document.getElementsByClassName('check');
// if (element != null) {
//     str = element.length;
    
// }
// else {
//     str = null;
   
// }


// console.log(str);
    


const yup =   document.getElementsByClassName('.menu-link').innerHtml;

console.log(yup);