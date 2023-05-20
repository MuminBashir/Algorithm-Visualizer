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
    for (let i = 1; i< arr.length; i++) {
        let key = arr[i].innerHTML
        let p = await new Promise(resolve=>{
            setTimeout(()=>{
                arr[i].style.background = "red"
                resolve(true)
            },500)
        })
        let j = i-1
        while (j>=0 && parseInt(arr[j].innerHTML)> parseInt(key)) {
            let q = await new Promise(resolve=>{
                setTimeout(()=>{
                    arr[j].style.background = "red"
                    resolve(true)
                },500)
            })
            let r = await new Promise(resolve=>{
                setTimeout(()=>{
                    arr[j+1].innerHTML = arr[j].innerHTML
                    resolve(true)
                },300)
            })
            let s = await new Promise(resolve=>{
                setTimeout(()=>{
                    arr[j+1].style.background = "black"
                    resolve(true)
                },300)
            })
            j--;
        }
        arr[j+1].innerHTML = key
        for (let index = 0; index < i; index++) {
            arr[index].style.background = "blue"
            
        }
    }
    arr[arr.length-1].style.background = "blue"
    result.innerHTML = "-->Array Sorted<--"
})