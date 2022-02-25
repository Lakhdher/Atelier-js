list=document.querySelector("ol");

list.addEventListener("click",(e)=>
{
    randomColor = Math.floor(Math.random()*16777215).toString(16)
    e.target.style.color="#"+randomColor;
}
)