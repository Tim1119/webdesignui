// This code closes and open the menu button in my html code
var menubtn = document.getElementById('menu-btn')
var sidenav = document.getElementById('side-nav')
sidenav.style.right = "-250px"
menubtn.onclick = function(){
  if (sidenav.style.right =="-250px"){
    sidenav.style.right="0px";
  }
  else {
    sidenav.style.right="-250px";
  }
  }
