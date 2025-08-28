const heartBtns = document.getElementsByClassName("heart-btn");

for (const heartBtn of heartBtns) {
    heartBtn.addEventListener("click", function(){
    

    let heart = parseInt(document.getElementById("heart-count").innerText) ;
    heart ++;
    document.getElementById("heart-count").innerText = heart;

    });
};



const callBtns = document.getElementsByClassName("btn-primary");

const historyData = [];

for (let i = 0 ; i< callBtns.length ; i++) {
    callBtns[i].addEventListener("click", function(){
        let coin = parseInt(document.getElementById("coin-count").innerText);

        
        if(i === 0 & coin >= 20) {
            coin = coin - 20 ;
            document.getElementById("coin-count").innerText = coin;
            
            const data = {
                name : "National Emergency Number",
                phoneNumber : 999,
                setTime : new Date().toLocaleTimeString(),
            };

             historyData.push(data);

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
                </div>
            `;
            parentDiv.appendChild(div);
        }
            
        else if(i === 1 & coin >= 20) {
            coin = coin - 20 ;
            document.getElementById("coin-count").innerText = coin;
            
            const data = {
                name : "Police Helpline Number",
                phoneNumber : 999,
                setTime : new Date().toLocaleTimeString(),
            };
            
            historyData.push(data);

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
                </div>
            `;
            parentDiv.appendChild(div);
        }
        else if(i === 2 & coin >= 20) {
            coin = coin - 20 ;
            document.getElementById("coin-count").innerText = coin;
            
            const data = {
                name : "Fire Service Number",
                phoneNumber : 999,
                setTime : new Date().toLocaleTimeString(),
            };
            
            historyData.push(data);

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
                </div>
            `;
            parentDiv.appendChild(div);
        }
        else if(i === 3 & coin >= 20) {
            coin = coin - 20 ;
            document.getElementById("coin-count").innerText = coin;
            
            const data = {
                name : "Ambulance Service",
                phoneNumber : "01994-999999",
                setTime : new Date().toLocaleTimeString(),
            };
            
            historyData.push(data);

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
                </div>
            `;
            parentDiv.appendChild(div);
            
        }
        else if(i === 4 & coin >= 20) {
            coin = coin - 20 ;
            document.getElementById("coin-count").innerText = coin;
            
            const data = {
                name : "Women & Child Helpline",
                phoneNumber : 109,
                setTime : new Date().toLocaleTimeString(),
            };
            
            historyData.push(data);

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
                </div>
            `;
            parentDiv.appendChild(div);
        }
        else if(i === 5 & coin >= 20) {
            coin = coin - 20 ;
            document.getElementById("coin-count").innerText = coin;
            
            const data = {
                name : "Anti-Corruption Helpline",
                phoneNumber : 106,
                setTime : new Date().toLocaleTimeString(),
            };
            
            historyData.push(data);

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
                </div>
            `;
            parentDiv.appendChild(div);
        }
        else if(i === 6 & coin >= 20) {
            coin = coin - 20 ;
            document.getElementById("coin-count").innerText = coin;
            
            const data = {
                name : "Electricity Helpline",
                phoneNumber : 16216,
                setTime : new Date().toLocaleTimeString(),
            };
            
            historyData.push(data);

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
                </div>
            `;
            parentDiv.appendChild(div);
        }
        else if(i === 7 & coin >= 20) {
            coin = coin - 20 ;
            document.getElementById("coin-count").innerText = coin;
            
            const data = {
                name : "Brac Helpline",
                phoneNumber : 16445,
                setTime : new Date().toLocaleTimeString(),
            };
            
            historyData.push(data);

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
                </div>
            `;
            parentDiv.appendChild(div);
            
        }
        else if(i === 8 & coin >= 20) {
            coin = coin - 20 ;
            document.getElementById("coin-count").innerText = coin;
            
            const data = {
                name : "Bangladesh Railway Helpline",
                phoneNumber : 163,
                setTime : new Date().toLocaleTimeString(),
            };

            historyData.push(data);

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
                </div>
            `;
            parentDiv.appendChild(div);
            
            
        }
        else{
            alert("❗ You don't have sufficient Balance . You need minimum 20 coin to call again")
        }

       

    })
};




// copy button
const copyBtns = document.getElementsByClassName("btn-secondary");

const copyData = [];


for (let i = 0; i < copyBtns.length; i++) {
    

    copyBtns[i].addEventListener("click" , function(){

        let copyCount = parseInt(document.getElementById("copy-count").innerText) ;


        if (i === 0) {
            copyCount ++ ;
            document.getElementById("copy-count").innerText = copyCount;

            const number = 999;
            navigator.clipboard.writeText(number).then(() => {
                alert("Copied: " + number)
            })
        } 
        else if (i === 1) {
            copyCount ++ ;
            document.getElementById("copy-count").innerText = copyCount;

            const number = 999;
            navigator.clipboard.writeText(number).then(() => {
                alert("Copied: " + number)
            })
        }
        else if (i === 2) {
            copyCount ++ ;
            document.getElementById("copy-count").innerText = copyCount;

            const number = 999;
            navigator.clipboard.writeText(number).then(() => {
                alert("Copied: " + number)
            })
        }
        else if (i === 3) {
            copyCount ++ ;
            document.getElementById("copy-count").innerText = copyCount;

            const number = "1994-99999";
            navigator.clipboard.writeText(number).then(() => {
                alert("Copied: " + number)
            })
        }
        else if (i === 4) {
            copyCount ++ ;
            document.getElementById("copy-count").innerText = copyCount;

            const number = 109;
            navigator.clipboard.writeText(number).then(() => {
                alert("Copied: " + number)
            })
        }
        else if (i === 5) {
            copyCount ++ ;
            document.getElementById("copy-count").innerText = copyCount;

            const number = 106;
            navigator.clipboard.writeText(number).then(() => {
                alert("Copied: " + number)
            })
        }
        else if (i === 6) {
            copyCount ++ ;
            document.getElementById("copy-count").innerText = copyCount;

            const number = 16216;
            navigator.clipboard.writeText(number).then(() => {
                alert("Copied: " + number)
            })
        }
        else if (i === 7) {
            copyCount ++ ;
            document.getElementById("copy-count").innerText = copyCount;

            const number = 16445;
            navigator.clipboard.writeText(number).then(() => {
                alert("Copied: " + number)
            })
        }
        else if (i === 8) {
            copyCount ++ ;
            document.getElementById("copy-count").innerText = copyCount;

            const number = 163;
            navigator.clipboard.writeText(number).then(() => {
                alert("Copied: " + number)
            })
        }
    })

    
};

document.getElementById("clear-btn").addEventListener("click" , function(){
    const removeHistory = document.querySelectorAll(".history-t");

    for (const element of removeHistory) {
        element.remove();
    }

})






