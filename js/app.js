window.addEventListener("load", () => {
    const form = document.querySelector("#new_task_form");
    const input = document.querySelector("#new_task_input");
    const tasks = document.querySelector("#tasks");

    let savedTodos = [];

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert("please fill out the text box");
            return;
        }

        const task_elem = document.createElement("div");
        task_elem.classList.add("task");

        const task_content_elem = document.createElement("div");
        task_content_elem.classList.add("content");
        // task_content_elem.innerText = task

        const task_input = document.createElement("input");
        task_input.classList.add("text");
        task_input.type = "text";
        task_input.value = task;
        task_input.setAttribute("readonly", "readonly");

        task_content_elem.appendChild(task_input);

        task_elem.appendChild(task_content_elem);

        const task_action_el = document.createElement("div");
        task_action_el.classList.add("actions");

        const edit_btn = document.createElement("button");
        edit_btn.classList.add("edit");
        edit_btn.innerHTML = "Edit";

        const delete_btn = document.createElement("button");
        delete_btn.classList.add("delete");
        delete_btn.innerHTML = "Delete";

        task_action_el.appendChild(edit_btn);
        task_action_el.appendChild(delete_btn);

        task_elem.appendChild(task_action_el);

        tasks.appendChild(task_elem);

        input.value = " ";

        edit_btn.addEventListener("click", () => {
            if (edit_btn.innerText == "Edit") {
                task_input.removeAttribute("readonly");
                task_input.focus();
                edit_btn.innerText = "Save";
            }
            else {
                task_input.setAttribute("readonly", "readonly");
                edit_btn.innerText = "Edit";
            }
        })

        delete_btn.addEventListener("click", () => {
            tasks.removeChild(task_elem);
        })
    })

})