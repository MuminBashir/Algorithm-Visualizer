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
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            arr[j].style.background = "orange"
            arr[j + 1].style.background = "orange"
            if (parseInt(arr[j].innerHTML) > parseInt(arr[j + 1].innerHTML)) {
                let p = await new Promise(resolve => {
                    setTimeout(() => {
                        arr[j].style.background = "red"
                        arr[j + 1].style.background = "red"
                        resolve(true)
                    }, 800)
                })
                
                let q = await new Promise(resolve =>{
                    setTimeout(()=>{
                        let a = arr[j].innerHTML
                        arr[j].innerHTML = arr[j+1].innerHTML
                        arr[j+1].innerHTML = a
                        resolve(true)
                    },500)
                })
            }
            else{
                let p = await new Promise(resolve => {
                    setTimeout(() => {
                        arr[j].style.background = "green"
                        arr[j + 1].style.background = "green"
                        resolve(true)
                    }, 800)
                })
            }
            let p = await new Promise(resolve => {
                setTimeout(() => {
                    arr[j].style.background = "black"
                    arr[j + 1].style.background = "black"
                    resolve(true)
                }, 500)
            })
            if(j == arr.length - i - 2){
                arr[j + 1].style.background = "blue"
            }
        }
    }
    arr[0].style.background = "blue"
    result.innerHTML = "-->Array Sorted<--"
})