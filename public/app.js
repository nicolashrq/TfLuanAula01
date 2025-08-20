document.addEventListener("DOMContentLoaded", async () => {

  const toDos = [
    "Estudar HTML semântico",
    "Praticar CSS básico",
    "Revisar seletores CSS",
    "Montar página com Flexbox",
    "Adicionar responsividade com media queries",
    "Estudar JavaScript básico",
    "Praticar manipulação do DOM",
    "Implementar evento de clique em botão",
    "Criar lista dinâmica com JS",
    "Estudar funções em JavaScript",
    "Aprender sobre arrays e objetos",
    "Praticar laços (for, while)",
    "Estudar fetch() e requisições HTTP",
    "Consumir API simples (ex: Pokédex)",
    "Criar mini-projeto integrando tudo"
  ];
  
  const buttonListAddElement = document.getElementsByClassName("btn")[0];
  const inputElement = document.getElementById("list-add");
  const listWrapper = document.getElementById("list-wrapper");

  const ul = document.createElement("ul");
  listWrapper.appendChild(ul);

  function renderTodoItem(todoText) {
    const li = document.createElement("li");
    li.textContent = todoText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Deletar";
    deleteButton.style.marginLeft = "10px";

    deleteButton.addEventListener("click", () => {
      ul.removeChild(li);
    });

    li.appendChild(deleteButton);
    ul.appendChild(li);
  }

  toDos.forEach(renderTodoItem);

  buttonListAddElement.addEventListener("click", (event) => {
    event.preventDefault();

    const newTodo = inputElement.value.trim();
    if (newTodo !== "") {
      renderTodoItem(newTodo);
      inputElement.value = "";
    }
  });

});
