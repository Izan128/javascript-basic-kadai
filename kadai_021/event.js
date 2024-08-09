const btnPut = document.getElementById("btn");

btnPut.addEventListener("click", () => {
    const textChange = document.getElementById("text");
    setTimeout(()=>{
        textChange.textContent = "ボタンをクリックしました";
    }, 2000);
})