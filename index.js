// function changeHtml(data) {
//     let text = document.getElementById("text");
//     let img = document.getElementById("imgSrc");
//     img.setAttribute("imgSrc", data.imgSrc);
//     text.innerHTML = data.text;
// }



function randomIndex(size) {
    let randInd = Math.floor(Math.random() * size);
    return randInd;
}

async function getData() {
    const requestURL = 'https://github.com/Skriste/jason/blob/master/data.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const JSON = await response.json();
    console.log(JSON);
    changeHtml(JSON[randomIndex(JSON.length)]);
}
getData();

let btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
    confetti({
        particleCount: 300,
        spread: 180,
        startVelocity: 60
    });
    getData();
});
