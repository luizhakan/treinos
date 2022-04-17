function getApi(){
    fetch('https://jsonplaceholder.typicode.com/albums').then((response) => {
        response.json().then((data) => {
            data.map((itens) => {
                let ul = document.querySelector('.lista')

                ul.innerHTML += `<ul>
                                <li>ID : ${itens.id}</li>
                                <li>userId : ${itens.userId}</li>
                                <li>Título : ${itens.title}</li>
                                </ul>
                                <br>`
                                console.log(itens)
            })
        })
    });
}