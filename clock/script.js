function setDate(){
    
    const now = new Date();

    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hour = now.getHours();
    
    const sec_hand = document.querySelector(".sec-hand");
    const min_hand = document.querySelector(".min-hand");
    const hour_hand = document.querySelector(".hour-hand");

    const sec_degree = (sec / 60) * 360 + 90;
    sec_hand.style.transform = `rotate(${sec_degree}deg)`;


    const min_degree = (min / 60) * 360 + 90;
    min_hand.style.transform = `rotate(${min_degree}deg)`;

    const hour_degree = (hour / 12) * 360 + 90;
    hour_hand.style.transform = `rotate(${hour_degree}deg)`;

}

setInterval(setDate, 1000)