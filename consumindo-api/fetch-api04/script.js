function getApi(){
    fetch('https://jsonplaceholder.typicode.com/albums').then((response) => {
        response.json().then((data) => {
            data.map((itens) => {
                let ul = document.querySelector('.lista')
                console.log(itens)
                ul.innerText += `
                                ID : ${itens.id}
                                userId : ${itens.userId}
                                Título : ${itens.title}
                                `
                                console.log(itens)
            })
        })
    });
}