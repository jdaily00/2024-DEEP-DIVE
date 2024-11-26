// 필요한 변수 및 상수 생성
const list = document.getElementById("list");
const createBtn = document.getElementById("create-btn");

// 투두 리스트의 데이터를 배열 안에 넣기
// 데이터를 이용해서 요소 리스트들을 화면에 하나씩 생성하면 됨
// let todos = [{ id: UniqueId, text: "밥 먹기", compleate: false }]; // 요소들이 하나의 객체여서 {} 사용
let todos = [];

/* 버튼을 클릭했을 때 이벤트가 발생하도록
   createBtn.onclick도 사용 가능
   클릭 이벤트가 발생했을 때 리스너 함수 등록 ::
   ("click", () => {}) 얘를 ("click", createNewTodo) 이렇게 수정
*/
createBtn.addEventListener("click", createNewTodo);

// 리스너 함수 따로 빼줌
function createNewTodo() {
  // 새로운 아이템 객체 생성
  const item = {
    id: new Date().getTime(), // 1970년부터 현재까지의 날짜를 밀리세컨드로 나타냄.=> 유니크한 값 (숫자:1534438092 이런식으로)
    text: "",
    compleate: false,
  };
  // 배열 처음에 새로운 아이템 추가
  todos.unshift(item);

  // 데이터를 생성했으면 이젠 요소 자체를 생성해줘야함. 화면에 보이게 하기 위해.
  // 요소 생성하기 => 굉장히 많은 것들이 들어있기 때문에 따로 함수로 빼줄 거임.
  const { itemEl, inputEl } = createTodoElement(item);

  //   리스트 요소 안에 방금 생성한 아이템 요소 추가
  list.prepend(itemEl); // 노드를 집어넣는 것. 첫 번째 child 전에 넣는 거

  // disabled 속성 제거
  inputEl.removeAttribute("disabled");
  // input 요소에 focus
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
