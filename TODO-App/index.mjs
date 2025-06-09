//TODO追加時の動き
const onClickAdd = () => {
    const inputText = document.querySelector(".add-text").value;
    document.querySelector(".add-text").value = "";
    creatIncompleteTodo(inputText);
}



const creatIncompleteTodo = (todo) => {
    const li = document.createElement("li");

    const div = document.createElement("div");
    div.className = "list-row";

    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = todo;


    const completeButton = document.createElement("button");
    completeButton.className="complete-button"
    //完了ボタンの制御
    completeButton.addEventListener("click", () => {
        const moveTarget = completeButton.closest("li");
        completeButton.nextElementSibling.remove();
        completeButton.remove();


        const backButton = document.createElement("button");
        backButton.className = "rotate-button"
        //戻すボタンの制御
        backButton.addEventListener("click", () => {
            const todoText = backButton.previousElementSibling.innerText;
            creatIncompleteTodo(todoText);
            backButton.closest("li").remove();
        });


        moveTarget.firstElementChild.appendChild(backButton);
        document.querySelector(".complete-list").append(moveTarget);
    });


    const deleteButton = document.createElement("button");
    deleteButton.className = "trash-button";
    //削除ボタンの制御
    deleteButton.addEventListener("click", () => {
        const deleteTarget = deleteButton.closest("li");
        document.querySelector(".incomplete-list").removeChild(deleteTarget);
    });


    li.appendChild(div);
    div.append(p, completeButton, deleteButton);


    document.querySelector(".incomplete-list").appendChild(li);
};

document.querySelector(".add-button").addEventListener("click", onClickAdd);