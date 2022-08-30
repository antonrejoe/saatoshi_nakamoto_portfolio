


document.querySelector('svg#hamburger-Svg').addEventListener('click',function () {

    
    document.querySelector('path#line-1').classList.toggle('line-1-rot');
    document.querySelector('path#line-3').classList.toggle('line-3-rot');
    document.querySelector('path#line-2').classList.toggle('line-2-hide');
    document.querySelector('svg#hamburger-Svg').classList.toggle('ham-rot-720');
    document.querySelector('div.nav-div-items-container').classList.toggle('slide-down-navbar');
    
    var state = false

    
    
});