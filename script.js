const heartBtns = document.getElementsByClassName("heart-btn");

for (const heartBtn of heartBtns) {
    heartBtn.addEventListener("click", function(e){
    e.preventDefault();

    let heart = parseInt(document.getElementById("heart-count").innerText) ;
    heart ++;
    document.getElementById("heart-count").innerText = heart;

    });
};

// calll

const callBtns = document.getElementsByClassName("btn-primary");

const historyData = [];

for (let i = 0 ; i< callBtns.length ; i++) {
    callBtns[i].addEventListener("click", function(){
        let coin = parseInt(document.getElementById("coin-count").innerText);
        if (coin < 20) {
            alert("Insufficient Balance")
        } else if(i === 0 ) {
            coin = coin - 20 ;
            document.getElementById("coin-count").innerText = coin;
            
            const data = {
                name : "National Emergency Number",
                phoneNumber : 999,
                setTime : new Date().toLocaleTimeString(),
            };
            historyData.push(data)
            console.log(historyData);
        }
    } )
}






