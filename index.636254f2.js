var btns=document.querySelectorAll(".contacts__button"),modalOverlay=document.querySelector(".modal-overlay "),modals=document.querySelectorAll(".button__options");btns.forEach((function(t){t.addEventListener("click",(function(t){var e=t.currentTarget.getAttribute("data-path");modals.forEach((function(t){t.classList.remove("modal--visible")})),document.querySelector('[data-target="'.concat(e,'"]')).classList.add("modal--visible"),modalOverlay.classList.add("modal-overlay--visible")}))}));
//# sourceMappingURL=index.636254f2.js.map
