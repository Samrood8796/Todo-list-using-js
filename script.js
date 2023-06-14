const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')
let addTask = () => {
    console.log("hhhhhhhhhhh");
    if (!inputBox.value) {
        Toastify({
            text: "you should write something",
          }).showToast();
        return;
    }
    const node = document.createElement("li")
    node.innerHTML = inputBox.value
    listContainer.appendChild(node)
    const span = document.createElement("span")
    span.innerHTML = "\u00d7"
    node.appendChild(span)
    inputBox.value = ""
    saveTask()
}

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked")
        saveTask()
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveTask()
    }
}, false)

const saveTask = () => {
    localStorage.setItem("todos", listContainer.innerHTML)
}
const showTask = () => {
    const data = localStorage.getItem('todos')
    listContainer.innerHTML = data
}
showTask();