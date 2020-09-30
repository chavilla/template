"use strict";

window.addEventListener("load", () => {
  //Cierra el menú en modo móvil
  function toggleMenu() {
    //Identifica el boton de salir y el menú
    const btnShowMenu = document.querySelector("#btnShowMenu");
    const btnExitMenu = document.querySelector("#exitMenu");
    const menu = document.querySelector(".main-menu");

    btnExitMenu.addEventListener("click", () => {
     fadeOut(menu)
    });

    btnShowMenu.addEventListener("click", () => {
     fadeIn(menu);
    });
  } // end toggleMenu

  function fadeOut(el){
    el.style.opacity = 1;
  
    (function fade() {
      if ((el.style.opacity -= .1) < 0) {
        el.style.display = "none";
      } else {
        requestAnimationFrame(fade);
      }
    })();
  };
  
  function fadeIn(el, display){
    el.style.opacity = 0;
    el.style.display = display || "block";
  
    (function fade() {
      var val = parseFloat(el.style.opacity);
      if (!((val += .1) > 1)) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
  };

  toggleMenu();
});
