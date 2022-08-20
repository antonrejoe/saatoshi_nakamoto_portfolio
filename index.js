

var hamburger = document.querySelector('._hamburger');



hamburger.addEventListener('click', animateHamburger);


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
        return  state_of_burger -= 1
    }
}





