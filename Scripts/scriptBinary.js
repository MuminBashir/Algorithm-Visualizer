let searchbtn = document.getElementById("searchbtn")
let searchnum = document.getElementById("search")
let display = document.getElementById("display")
let result = document.getElementById("result")

let num = 0
let oldnum = 0
for (let index = 0; index < 10; index++) {
    let bar = document.createElement("div")
    while(num<=oldnum){
    num = Math.round(1 + (Math.random() * (9+(index*10))))
    }
    oldnum= num
    bar.innerHTML = num
    bar.classList.add("bar")
    display.appendChild(bar)
}
let bars = document.getElementsByClassName("bar")

searchbtn.addEventListener('click', async () => {
    let arr = Array.from(bars)
    result.innerHTML = ""
    for (let index = 0; index < arr.length; index++) {
        arr[index].style.background = "black"  
    }
    let low = 0
    let high = (arr.length)-1
    let mid = Math.floor((low+high)/2);
    let oldmid = 0
    let flag = false
    while(low<=high){
        mid = Math.floor((low+high)/2);
        console.log(mid)
        console.log(low)
        console.log(high)
        let p = await new Promise((resolve)=>{
            setTimeout(()=>{
                arr[oldmid].style.background = "black"
                arr[mid].style.background = "red"
                resolve(true)
            },500)
        })
        if(arr[mid].innerHTML == parseInt(searchnum.value)){
            arr[mid].style.background = "blue"
            result.innerHTML = "-->Match Found<--"
            flag = true
            break;
        }
        else if(arr[mid].innerHTML > parseInt(searchnum.value)){
            oldmid = mid
            high = mid-1
        }
        else{
            oldmid = mid
            low = mid+1
        }
    }
    if(!flag){
        setTimeout(()=>{
            arr[mid].style.background = "black"
            result.innerHTML = "-->Match Not Found<--"
        },500)
    }
})