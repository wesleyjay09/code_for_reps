const btn = document.getElementById("button")
const container = document.querySelector(".container")
btn.addEventListener("click",  async ()=>{
    fetch('http://localhost:8000/api/chat/messages')
    .then(async(result)=> {
        let text = await result.text();
        container.innerHTML = text;
    })
})