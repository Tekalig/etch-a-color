let main = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("item");
    main.appendChild(div);
}

console.log(document.querySelectorAll('.item').length);