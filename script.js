// Countiing Heart

const heartBtns = document.getElementsByClassName("heart-btn");

for (const heartBtn of heartBtns) {
    heartBtn.addEventListener("click", function(){
    

    let heart = parseInt(document.getElementById("heart-count").innerText) ;
    heart ++;
    document.getElementById("heart-count").innerText = heart;

    });
};


const callBtns = document.getElementsByClassName("btn-primary");

const title = document.getElementsByClassName("card-title");

const phone = document.getElementsByClassName("phone");

const copyBtns = document.getElementsByClassName("btn-secondary");



for (let i = 0 ; i < callBtns.length ; i++) {
    callBtns[i].addEventListener("click", function(){

        // call button

        let coin = parseInt(document.getElementById("coin-count").innerText);

        function call(){
            coin = coin - 20 ;
            document.getElementById("coin-count").innerText = coin;
            
            const data = {
                name : title[i].innerText,
                phoneNumber : phone[i].innerText,
                setTime : new Date().toLocaleTimeString(),
            };

            alert("📞 Calling "+ data.name +" "+ data.phoneNumber);
            
            const parentDiv = document.getElementById("parent-history") ;
            const div = document.createElement("div");
            div.innerHTML = `
                <div class="history-t bg-[#fafafa] p-4 lg:p-2 2xl:p-4 mt-4 flex justify-between gap-1 items-center rounded-xl" >
                    <div class="intro">
                        <h3 class="xl:text-[18px] font-semibold">${data.name}</h3>
                        <p class="">${data.phoneNumber}</p>
                    </div>
                    <div class="time">${data.setTime}</div>
                </div>`
            ;
            parentDiv.appendChild(div);
        };


        if(i >= 0 && coin >= 20) {
            call()
        }
            
        
        else{
            alert("❗ You don't have sufficient Coin . You need minimum 20 coin to call again ❗")
        }

    });

    // copy button

    copyBtns[i].addEventListener("click" , function(){

        let copyCount = parseInt(document.getElementById("copy-count").innerText) ;


        if (i >= 0) {
            copyCount ++ ;
            document.getElementById("copy-count").innerText = copyCount;
            

            const number = phone[i].innerText;
            const cardTitle = title[i].innerText;
            navigator.clipboard.writeText(number).then(() => {
                alert(cardTitle + " " + "Copied : "+  number)
            })
        } 
        
    })


};

// Clear button


document.getElementById("clear-btn").addEventListener("click" , function(){
    const removeHistory = document.querySelectorAll(".history-t");

    for (const element of removeHistory) {
        element.remove();
    }

});
