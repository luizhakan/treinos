const metodoGet = () => {
  fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
    response.json().then((data) => {
      data.map((item) => {
        const resultado = document.getElementById("resultado");
        resultado.innerText += `
                                userId : ${item.userId}
                                title : ${item.title}
                                body : ${item.body}
                                `;
      });
    });
  });
};

const metodoPost = () => {
    event.preventDefault();
    let id = document.getElementById("postId").value;
    let title = document.getElementById("postTitle").value;
    let body = document.getElementById("postBody").value;

    fetch("https://jsonplaceholder.typicode.com/posts", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({userId: id, title: title, body: body})}).then((response) => {
        response.json().then((data) => {
              const resultado = document.getElementById("resultado");
            resultado.innerText += `
                                    userId : ${data.userId}
                                    title : ${data.title} 
                                    body : ${data.body}
                                  `
        })
    })
}