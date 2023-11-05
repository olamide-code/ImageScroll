let scroll = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn =  document.getElementById("nextBtn");

scroll.addEventListener("wheel", (evt)=>
{
    evt.preventDefault();
    scroll.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click", ()=>
{
    scroll.scrollLeft +=900;
});

nextBtn.addEventListener("click", ()=>
{
    scroll.scrollLeft -=900;
});






