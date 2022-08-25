

document.querySelector('.hamburger-div').addEventListener('click',function () {
    
  
    const i = 0;
   if (i==0) {
        
    document.querySelector('.ham-mid').style.visibility = "hidden";
    document.querySelector('.ham-top').classList.toggle('hamburger-top-rot');
    document.querySelector('.ham-bottom').classList.toggle('hamburger-bottom-rot');
    return i+=1
   }
    
    if(i==1) {
        document.querySelector('.ham-mid').style.visibility = "visible";
        return i-=1
    }
    

});



 
document.querySelector('.hamburger-div').addEventListener('click',function () {

    
    
})