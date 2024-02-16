const openModal=document.getElementById("open-mod");
const closeModal=document.getElementById("close-btn");
const modal=document.getElementById("modal");

openModal.addEventListener("click",function(){
    modal.classList.remove("hidden");
})

closeModal.addEventListener("click",function(){
    modal.classList.add("hidden");
})