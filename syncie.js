var readStatus = true
function myFun(){
    if(readStatus == true){
        document.getElementById("read-more").style.display="block";
        document.getElementById("meat").innerHTML = "Show less"
        readStatus = false; 
    } 
    else if(readStatus == false){
        document.getElementById("read-more").style.display="none";
        document.getElementById("meat").innerHTML = "Show more"
        readStatus = true; 
    }
}


var closeStatus =  true
function myClose(){
    
    if(closeStatus == true){
        document.getElementById("beans").style.display = "block"
        closeStatus = false;
    }
    else if(closeStatus == false){
        document.getElementById("beans").style.display = "none" 
        closeStatus = true;
    }
}


var closedStatus = true
function myClosed(){
    
    if(closedStatus == true){
        document.getElementById("bean").style.display = "block"
        closedStatus = false;
    }
    else if(closedStatus == false){
        document.getElementById("bean").style.display = "none" 
        closedStatus = true;
    }
}


var openStatus = true
function myOpen(){
    
    if(openStatus == true){
        document.getElementById("bea").style.display = "block"
        openStatus = false;
    }
    else if(openStatus == false){
        document.getElementById("bea").style.display = "none" 
        openStatus = true;
    }
}


var openedStatus = true
function myOpened(){
    
    if(openedStatus == true){
        document.getElementById("be").style.display = "block"
        openedStatus = false;
    }
    else if(openedStatus == false){
        document.getElementById("be").style.display = "none" 
        openedStatus = true;
    }
}


var navStatus=true
       function mainNav(){
        if(navStatus==true){
          document.getElementById("nav-links").style.marginTop="0px";
          document.getElementById("nav-links").style.borderBottomRightRadius="40%";
          navStatus=false;  
        }
        else if(navStatus==false){
            document.getElementById("nav-links").style.marginTop="-1200px";
            document.getElementById("nav-links").style.borderBottomRightRadius="40%";
            navStatus=true;
        }
       }
  

 window.addEventListener('scroll', reveal);

 function reveal(){
   var reveals = document.querySelectorAll('.reveal');

   for(var i=0; i<reveals.length; i++){
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if(revealtop < windowheight - revealpoint){
         reveals[i].classList.add('active');
      }
      else{
         reveals[i].classList.remove('active');
      }
   }
 }


 function Load(){
    const currentDate = new Date()
    const year = currentDate.getFullYear()
 
    document.getElementById("bell").innerHTML = `copyright © ${year} Syncie Digitals All Right Reserved <a href="https://www.privacypolicies.com/live/5dfe26c5-263d-40bc-aee5-e18df4cf6074">privacy policy</a>`
 }

 
 