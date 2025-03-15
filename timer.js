let i = document.getElementsByClassName("time")[0].innerHTML;
let counting_down = false   ;
document.getElementsByClassName("start")[0].addEventListener("click",count_down);
function count_down(){
    if (counting_down) return
    counting_down = true
    const interval = setInterval(timer,1000);
    function timer(){
        i--
        document.getElementsByTagName("h1")[0].innerHTML = Number(i);
        if (i <= 0) clearInterval(interval)
    }                   
}
