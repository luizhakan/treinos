// MÉTODO POST é um upload de dados para um servidor
let surpresa = () => {
    fetch("https://jsonplaceholder.typicode.com/todos", {method : "POST", headers: {"Content-Type": "application/json"},body: JSON.stringify({title: "LUIZ HAKAN É O MELHOR DE TODOS, RECEBA!"})}).then((response) => {
        response.json().then((data) => {
            alert(data.title);
            const li = document.querySelector('#lista-preenchida')
            li.innerHTML += `
                <ul>
                <li>${data.id}</li>
                <li>${data.title}</li>
                </ul>
                <br>
            `
        })
    })
}

// Por padrão isso aqui é um MÉTODO GET, é um download de dados de um servidor
let fetchApiData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
    response.json().then((data)=> {
        const li = document.querySelector('#lista-preenchida')
        data.map((item) => {
            li.innerHTML += `
            <ul>
            <li>${item.id}</li>
            <td>${item.title}</td>
            </ul>
            <br>
        `
        })

        ;
    });
  });
};
