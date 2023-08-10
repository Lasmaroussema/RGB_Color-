let color = document.querySelector(".color");
let Rinput = document.querySelector("#r");
let Ginput = document.querySelector("#g");
let Binput = document.querySelector("#b");
let v = document.querySelector(".value");
v.innerHTML = "rgb(0,0,0)";
let ranges = [Rinput, Ginput, Binput];
ranges.forEach(function (e) {
    e.addEventListener("input", function ()
    {
        v.innerHTML = `rgb(${Rinput.value},${Ginput.value},${Binput.value})`;
        color.style.background = `${ v.innerHTML}`;
    })
});

let btn = document.querySelector(".copycode");
btn.onclick = function ()
{
    navigator.clipboard.writeText(`${v.innerHTML}`);
}