let resultado = document.querySelector(".resultado");
let apiGet = () => {
  fetch("https://jsonplaceholder.typicode.com/albums").then((response) => {
    response.json().then((data) => {
        data.map((item) => {
            resultado.innerHTML += `<ul>
                                  <li>ID : ${item.id}</li>
                                  <li>TITLE : ${item.title}</li>
                                  <ul>
                                  <br>`;
        })
    });
  });
};

let apiPost = () => {
    fetch("https://jsonplaceholder.typicode.com/albums", {method: "POST", headers: {"Content-Type" : "application/json"}, body: JSON.stringify({id: 1987,title: "SPORT RECIFE MAIOR DO NORDESTE"})}).then((response) => {response.json().then((data) => {
        resultado.innerHTML += `
            <ul>
                <li>${data.id}</li>
                <li>${data.title}</li>
            <ul>       
            <br>                 
        `
    })})
}