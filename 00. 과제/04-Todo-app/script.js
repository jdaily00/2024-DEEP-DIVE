const list = document.getElementById("list");
const createBtn = document.getElementById("create-btn");

let todos = [];

createBtn.addEventListener("click", createNewTodo);

function createNewTodo() {
    // 새로운 아이템 객체 생성
    const item = {
        id: new Date().getTime(),
        text: "",
        compleate: false,
    };

    todos.unshift(item);

    const { itemEl, inputEl } = createTodoElement(item);

    //   리스트 요소 안에 방금 생성한 아이템 요소 추가
    list.prepend(itemEl); // 노드를 집어넣는 것. 첫 번째 child 전에 넣는 거

    inputEl.removeAttribute("disabled");
    inputEl.focus();
}

function createTodoElement(item) {
    // 요소를 생성할 땐 document 객체가 제공해주는 메소드 사용
    const itemEl = document.createElement("div"); // 태그 이름 넣기
    //   요소를 생성했으니 이제 class에다 item을 주고 싶음.
    itemEl.classList.add("item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.complete;

    if (item.compleate) {
        itemEl.classList.add("complate");
    }

    //   모든 요소 생성 완료
    const inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.value = item.text;
    inputEl.setAttribute("disabled", "");

    const actionsEl = document.createElement("div");
    actionsEl.classList.add("actions");

    const editBtnEl = document.createElement("button");
    editBtnEl.classList.add("material-icons");
    editBtnEl.innerText = "edit";

    const removeBtnEl = document.createElement("button");
    removeBtnEl.classList.add("material-icons", "remove-btn");
    removeBtnEl.innerText = "remove_circles";

    actionsEl.append(editBtnEl);
    actionsEl.append(removeBtnEl);

    //   div에 input 넣기
    itemEl.append(checkbox);
    itemEl.append(inputEl);
    itemEl.append(actionsEl);

    // EVENTS
    checkbox.addEventListener("change", () => {
        item.complete = checkbox.checked;

        if (item.complete) {
            itemEl.classList.add("complete");
        } else {
            itemEl.classList.remove("complete");
        }

        saveToLocalStorage();
    });

    inputEl.addEventListener("input", () => {
        item.text = inputEl.value;
    });

    inputEl.addEventListener("blur", () => {
        inputEl.setAttribute("disabled", "");

        saveToLocalStorage();
    });

    editBtnEl.addEventListener("click", () => {
        inputEl.removeAttribute("disabled");
        inputEl.focus();
    });

    removeBtnEl.addEventListener("click", () => {
        todos = todos.filter((t) => t.id != item.id);
        itemEl.remove();

        saveToLocalStorage();
    });

    return { itemEl, inputEl, editBtnEl, removeBtnEl };
}

function displayTodos() {
    loadFromLocalStorage();

    for (let i = 0; i < todos.length; i++) {
        const item = todos[i];

        const { itemEl } = createTodoElement(item);

        list.append(itemEl);
    }
}

displayTodos();

function saveToLocalStorage() {
    const data = JSON.stringify(todos);

    localStorage.setItem("my_todos", data);
}

function loadFromLocalStorage() {
    const data = localStorage.getItem("my_todos");

    if (data) {
        todos = JSON.parse(data);
    }
}
