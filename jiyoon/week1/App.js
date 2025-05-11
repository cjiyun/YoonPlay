document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input[name='input-todo']");
  const todoList = document.getElementById("todo-list");
  const doneList = document.getElementById("done-list");

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const newListItem = document.createElement("li");
      newListItem.setAttribute("class", "list-item");
      const itemContent = document.createElement("p");
      const doneBtn = document.createElement("button");
      doneBtn.setAttribute("class", "done-button");
      doneBtn.textContent = "완료";
      const deleteBtn = document.createElement("button");
      deleteBtn.setAttribute("class", "delete-button");
      deleteBtn.textContent = "삭제";

      itemContent.textContent = input.value;
      newListItem.appendChild(itemContent);
      newListItem.appendChild(doneBtn);
      todoList.appendChild(newListItem);
      input.value = "";

      doneBtn.addEventListener("click", function () {
        const li = this.closest("li");
        todoList.removeChild(li);
        doneList.appendChild(li);
        doneList.lastChild.removeChild(doneBtn);
        doneList.lastChild.appendChild(deleteBtn);
      });

      deleteBtn.addEventListener("click", function () {
        doneList.removeChild(this.closest("li"));
      });
    }
  });
})