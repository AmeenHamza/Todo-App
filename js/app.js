document.getElementById("inputValue").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        // Prevent the default behavior of the Enter key (submitting a form)
        event.preventDefault();
        // Call your clicke() function to add the todo item
        clicke();
    }
});

function clicke() {

    let inputValue = document.getElementById("inputValue").value;

    if (document.getElementById("inputValue").value == '') {
        document.getElementById("inputValue").style.border = "1px solid red";
        
    }

    else {

        document.getElementById("inputValue").style.border = "1px solid #ccc";
        let todoList = document.getElementById("todoList");

        let addList = document.createElement("li");
        addList.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");

        let addSpan = document.createElement("span");
        addSpan.style.fontWeight = "600";
        addSpan.style.fontSize = "18px";
        addSpan.setAttribute("class", "fo-text");
        let text = document.createTextNode(inputValue);
        addSpan.appendChild(text);

        let addDiv = document.createElement("div");
        addDiv.setAttribute("class", "butons");

        let btn1 = document.createElement("button");
        btn1.setAttribute("class", "btn btn-primary mx-md-2");
        btn1.setAttribute("onclick", "todoEdit(this)")

        addDiv.appendChild(btn1);
        let icon1 = document.createElement("i");
        icon1.setAttribute("class","fa-sharp fa-regular fa-pen-to-square");

        btn1.appendChild(icon1);

        let btn2 = document.createElement("button");
        btn2.setAttribute("class", "btn mark btn-primary mx-md-2");
        btn2.setAttribute("onclick", "todoDone(this)")

        let icon = document.createElement("i");
        icon.setAttribute("class","fa-sharp fa-solid fa-check");

        btn2.appendChild(icon);


        let forDelete = document.createElement("button");
        forDelete.setAttribute("class", "btn delete btn-primary mx-md-2");
        forDelete.textContent = "Delete";
        forDelete.style.display = "none";
        forDelete.setAttribute("onclick", "todoDelete(this)")
        addDiv.appendChild(forDelete);
        

        addDiv.appendChild(btn2);

        addList.appendChild(addSpan);
        todoList.appendChild(addList);
        addList.appendChild(addDiv);

        document.getElementById("inputValue").value = "";
    }
}

function todoDone(e) {
    let listItem = e.parentElement.parentElement;
    let textElement = listItem.querySelector(".fo-text");

    textElement.classList.add('text-decoration-line-through');
    
    let markButton = listItem.querySelector(".mark");
    markButton.style.display = "none";

    let deleteButton = listItem.querySelector(".delete");
    deleteButton.style.display = "inline-block";
}


function todoDelete(e) {
    e.parentNode.parentNode.remove();
}

function todoEdit(e) {
    let listItem = e.parentElement.parentElement;
    let textElement = listItem.querySelector(".fo-text");
    
    let getText = textElement.innerHTML;
    document.getElementById("inputValue").value = getText;
    document.getElementById("inputValue").focus();
    
    listItem.remove();
}


// function todoEdit(e) {

//     let getText = document.querySelector(".fo-text").innerHTML;
//     document.getElementById("inputValue").value = getText;
//     console.log(getText);

//     e.parentNode.parentNode.remove();
// }

// function todoDone(e) {
//     e.parentElement.previousSibling.setAttribute("class", 'text-decoration-line-through')

//     let mark = document.querySelector(".mark");
//     mark.style.display = "none";

//     let delet = document.querySelector(".delete");
//     delet.style.display = "inline-block";
// }