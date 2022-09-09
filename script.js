//crate the countdown
//select an element h1 with
console.log("k")
const countdown=document.querySelector(".countdown")

let time=10;

countdown.innerHTML= time--;
setTimeout(() => {
    countdown.innerHTML=time--;
    setTimeout(() => {
        countdown.innerHTML=time--;
        setTimeout(() => {
            countdown.innerHTML=time--;
            setTimeout(() => {
                countdown.innerHTML=time--;
                setTimeout(() => {
                    countdown.innerHTML=time--;
                    setTimeout(() => {
                        countdown.innerHTML=time--;
                        setTimeout(() => {
                            countdown.innerHTML=time--;
                            setTimeout(() => {
                                countdown.innerHTML=time--;
                                setTimeout(() => {
                                    countdown.innerHTML=time--;
                                    setTimeout(() => {
                                        countdown.innerHTML=time--;
                                        countdown.innerHTML="Happy Independence Day"
                                    }, 1000);
                                }, 1000);
                            }, 1000); 
                        }, 1000);
                    }, 1000);  
                }, 1000); 
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);