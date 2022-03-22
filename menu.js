function openNav() {
    document.getElementById("mynav").style.height = "100vh";
  }
  
  function closeNav() {
    document.getElementById("mynav").style.height = "0";
  }

document.querySelector('.startbtn').onclick  =()=> openNav();
document.querySelector('.startbtn2').onclick  =()=> openNav();
document.querySelector('.closebtn').onclick =()=>closeNav();