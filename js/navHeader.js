const smallScreenNavBtn = document.querySelector('#smallScreenBtn');
let itemsList = document.getElementsByClassName('main')[0]; 
let btnMain = itemsList.getElementsByClassName('navLinks2');
for(let i=0;i<btnMain.length;i++){
    btnMain[i].addEventListener('click',function(){
         this.nextElementSibling.style.left = "0%";
    });
}
let smallScreenSubBtn = document.getElementsByClassName('smallScreenSubBtn');
for(let i=0;i<smallScreenSubBtn.length;i++){
    smallScreenSubBtn[i].addEventListener('click',function(){
          this.parentElement.style.left = "-101%";
    });
}

function myFunction(x) {
    if (x.matches) {
smallScreenNavBtn.onclick = function(){
   if(smallScreenNavBtn.classList.toggle('active')){
     itemsList.style.transition = '0.6s';   
    itemsList.style.height = '504px';
   }
   else{
     itemsList.style.transition = '0.6s';   
    itemsList.style.height = '0px';
   }
   
}

}
}

// Create a MediaQueryList object
const mmObj = window.matchMedia("(max-width: 991px)")

// Call the match function at run time:
myFunction(mmObj);

// Add the match function as a listener for state changes:
mmObj.addListener(myFunction)


