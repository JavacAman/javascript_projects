const BASE_URL ="https://2024-03-06.currency-api.pages.dev/v1/currencies";
const dropdown= document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const message = document.querySelector(".msg");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

for(let select of dropdown){
    for(currCode in countryList){
        // console.log(code,countryList(code));
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value= currCode;
        if(select.name==="from" && currCode ==="USD")
        {
            newOption.selected = "Selected";
        } else if(select.name==="to" && currCode ==="INR")
        {
            newOption.selected = "Selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target);
    })
}


const updateFlag=(element)=>{
   let currCode=element.value;
   let countryCode = countryList[currCode];
   let newSrc =`https://flagsapi.com/${countryCode}/flat/64.png`;
   let img = element.parentElement.querySelector("img");
   img.src = newSrc;
}

btn.addEventListener("click", async(evt)=>{
 evt.preventDefault();
 let amount  = document.querySelector(".amount input");
 let amtVal = amount.value;
 if(amtVal==="" || amtVal<1){
    amtVal=1;
    amount.value=1;
 }
 const URL1 = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
 const URL2 = `${BASE_URL}/${toCurr.value.toLowerCase()}.json`;
 let response1  = await fetch(URL1);
 let response2  = await fetch(URL2);
 let data1 = await response1.json();
 let data2 = await response2.json();
//  console.log(data);
 const rate = data2[toCurr.value.toLowerCase()];
console.log(rate);

let finalAmount = amtVal *rate;
// console.log(finalAmount);
message.innerText = `${amtVal} ${fromCurr.value}= ${finalAmount} ${toCurr.value}`;
});

