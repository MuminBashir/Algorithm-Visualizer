let sortbtn = document.getElementById("sortbtn")
let display = document.getElementById("display")
let result = document.getElementById("result")

for (let index = 0; index < 10; index++) {
    let bar = document.createElement("div")
    bar.innerHTML = Math.round(1 + (Math.random() * 99))
    bar.classList.add("bar")
    display.appendChild(bar)
}

let bars = document.getElementsByClassName("bar")

sortbtn.addEventListener('click', async () => {
    let arr = Array.from(bars)
    result.innerHTML = `<button class="btn btn-primary" type="button" disabled>
    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    Sorting...
  </button>`
    for (let index = 0; index < arr.length; index++) {
        arr[index].style.background = "black"
    }
    for (let i = 0; i < arr.length; i++) {
        let flag = i;
        arr[i].style.background = "orange"
        for (let j = i+1; j < arr.length; j++) {
            let r = await new Promise(resolve => {
                setTimeout(() => {
                    arr[j].style.background = "orange"
                    resolve(true)
                }, 400)
            })
            if (parseInt(arr[flag].innerHTML) > parseInt(arr[j].innerHTML)) {
                let p = await new Promise(resolve => {
                    setTimeout(() => {
                        arr[j].style.background = "red"
                        if(flag != i){
                            arr[flag].style.background = "black"
                        }
                        resolve(true)
                    }, 500)
                })
                flag = j
                continue
            }
            let s = await new Promise(resolve=>{
                setTimeout(()=>{
                    arr[j].style.background = "black"
                    resolve(true)
                },500)
            })
        }
        arr[i].style.background = "red";
        let q = await new Promise(resolve=>{
            setTimeout(()=>{
                let a = arr[i].innerHTML
                arr[i].innerHTML = arr[flag].innerHTML
                arr[flag].innerHTML = a
                resolve(true)
            },550)
        }) 
        arr[flag].style.background = "black"
        arr[i].style.background = "blue"
    }
    result.innerHTML = "-->Array Sorted<--"
})