document.querySelectorAll(".fui-modal-trigger").forEach((e=>{e.addEventListener("click",(e=>{try{const t=e.currentTarget.getAttribute("data-modal-target");document.querySelector(`#${t}.fui-modal__background`).classList.toggle("open")}catch{return}}))})),document.querySelectorAll(".close").forEach((e=>{e.addEventListener("click",(e=>{try{e.currentTarget.closest(".fui-modal__background").classList.toggle("open")}catch{return}}))}));
