var btns=document.querySelectorAll(".contacts__modal-button"),modalOverlay=document.querySelector(".contacts__modal-overlay "),modals=document.querySelectorAll(".contacts__modal");btns.forEach((function(t){t.addEventListener("click",(function(t){var a=t.currentTarget.getAttribute("data-path");modals.forEach((function(t){t.classList.remove("contacts__modal--visible")})),document.querySelector('[data-target="'.concat(a,'"]')).classList.add("contacts__modal--visible"),modalOverlay.classList.add("contacts__modal-overlay--visible")}))})),modalOverlay.addEventListener("click",(function(t){console.log(t.target),t.target==modalOverlay&&(modalOverlay.classList.remove("contacts__modal-overlay--visible"),modals.forEach((function(t){t.classList.remove("contacts__modal--visible")})))}));
//# sourceMappingURL=index.9f9fb160.js.map
