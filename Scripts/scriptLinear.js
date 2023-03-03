let searchbtn = document.getElementById("searchbtn")
let searchnum = document.getElementById("search")
let display = document.getElementById("display")
let result = document.getElementById("result")

for (let index = 0; index < 10; index++) {
    let bar = document.createElement("div")
    bar.innerHTML = Math.round(1 + (Math.random() * 99))
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
    for (let index = 0; index < arr.length; index++) {
        let p = await new Promise((resolve) => {
            setTimeout(() => {
                if (index > 0) {
                    arr[index - 1].style.background = "black"
                }
                arr[index].style.background = "red"
                resolve(true)
            }, 500)
        })
        if (arr[index].innerHTML == parseInt(searchnum.value)) {
            arr[index].style.background = "blue"
            arr[index].style.color = "white"
            result.innerHTML = "-->Match Found<--"
            break
        }
        
        if (index == arr.length - 1) {
            setTimeout(() => {
                arr[index].style.background = "black"
                result.innerHTML = "-->Match Not Found<--"
            }, 500)
        }

    }
})