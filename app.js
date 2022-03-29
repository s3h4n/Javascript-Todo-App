const todoCard = {
    layout: {
        element: "div",
        class: "todo-item",
    },
    text: {
        element: "li",
        class: "todo-text",
    },
    button: {
        element: "button",
        class: "todo-delete-btn",
        onclick: "removeTodo();",
        icon: "<i class='fa fa-close'></i>"
    },
    build: function(string) {
        // layout
        let card_layout = document.createElement(this.layout.element);
        card_layout.setAttribute('class', this.layout.class);

        // text
        let card_text = document.createElement(this.text.element);
        card_text.setAttribute('class', this.text.class);
        card_text.appendChild(document.createTextNode(string));

        // button
        let card_button = document.createElement(this.button.element);
        card_button.setAttribute('class', this.button.class);
        card_button.setAttribute('onclick', this.button.onclick)
        card_button.innerHTML = this.button.icon;

        // build
        card_layout.appendChild(card_text);
        card_layout.appendChild(card_button);

        return card_layout;
    }
}

const addTodo = () => {
    let todo_input = document.getElementById('TodoInput');
    let todo = todo_input.value;
    if (todo.trim().length > 0) {
        document.getElementById('TodoList').appendChild(todoCard.build(todo));
        todo_input.value = "";
    }
}

function removeTodo() {
    todo = document.activeElement.parentNode;
    todo.style.opacity = 0;
    todo.addEventListener("transitionend", function() {
        todo.remove();
    })
}