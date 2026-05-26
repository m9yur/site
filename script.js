
window.addEventListener("scroll",()=>{

document.querySelectorAll("img").forEach((img)=>{
  const speed = img.getAttribute("data-speed") || 0.02;
  img.style.transform = `translateY(${window.scrollY * speed}px)`;
})

})
