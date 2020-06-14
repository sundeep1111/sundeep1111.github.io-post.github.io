var btnAddTodo = document.getElementById("btn-add-todo");
var todoInput = document.getElementById("todo-input");
var todoList = document.getElementById("todo-list");
var count = 0;

function getTODOsFromBackend(){
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://5ee248c68b27f30016094891.mockapi.io/todos', true)
    xhttp.send()

    xhttp.onreadystatechange = function(){
        if(xhttp.readyState === 4){

        
        var response = JSON.parse(xhttp.responseText);
         console.log(response);
        for( var i=0; i<response.length; i++){
           todoList.append(createTodoCard(response[i].message)) 
        }
    }
}
}

getTODOsFromBackend();

function createTodoCard(enteredText) {
    var mainCard = document.createElement("div");
    mainCard.classList.add("todo-card", "dyndropshadow");
    mainCard.id = 'todo' + count++;
    var checkInfo = document.createElement("span");
    checkInfo.classList.add("Checkbox");
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "myCheck";
    checkInfo.appendChild(checkbox);



    var vischeck = document.createElement('div');
    vischeck.classList.add("Checkbox-visible");
    checkInfo.appendChild(vischeck);



    mainCard.appendChild(checkInfo);

    var todoInfo = document.createElement("span");
    todoInfo.id = 'hello1' + count;
    todoInfo.classList.add("fontwidth");
    var todoText = document.createTextNode(enteredText);
    todoInfo.appendChild(todoText);

    mainCard.appendChild(todoInfo);

    checkInfo.addEventListener('click', function () {
        var stritxt = document.getElementById(todoInfo.id)
        //stritxt.classList.add('striptxt')
        if (stritxt.classList.contains('striptxt')) {
            stritxt.classList.remove('striptxt');
        } else {
            stritxt.classList.add('striptxt');
        }

    })

    var faInfo = document.createElement("span");
    faInfo.classList.add("faicon");
    var faicon = document.createElement("i");
    faicon.classList.add("fas", "fa-trash-alt");
    faInfo.appendChild(faicon);


    faInfo.addEventListener('click', function () {
        var currentcard = document.getElementById(mainCard.id);
        currentcard.remove();
        // for(var i=0; i<obj.length; i++){
        //     if(obj[i].id === mainCard.id){
        //         obj.splice(i,1)
        //         break;
        //     }
        // }
       // localStorage.setItem("todolocal", JSON.stringify(obj));
    })
    mainCard.appendChild(faInfo);


    return mainCard;

}
//var obj = [];
//var todoitems = localStorage.getItem("todolocal");
// var todoitems1 = JSON.parse(todoitems);
// if (todoitems1) {
//     for (var i = 0; i < todoitems1.length; i++) {
//         var toobj = {
//             id: 'todo' + count,
//             name: todoitems1[i].name
//         }
//       //  obj.push((toobj));
//       //  renderTODOCreation(todoitems1[i].name);
//       //  count++;
//     }
// }


// function renderTODOCreation(enteredText, i) {
//     if (enteredText !== null && enteredText !== "") {
//         todoList.appendChild(createTodoCard(enteredText));
//     } else {
//         alert("Please enter a valid TODO item!!");
//     }

// }

function handleTODOCreation() {
    var enteredText = todoInput.value;
    if (enteredText !== null && enteredText !== "") {
       

        var toobj = {
            id: 'todo' + count,
            message: enteredText,
            isCompleted:false
        }

        var xhttp = new XMLHttpRequest();
        xhttp.open('POST','https://5ee248c68b27f30016094891.mockapi.io/todos',true)
        xhttp.setRequestHeader('Content-type',"application/json;charset=UTF-8");
        xhttp.send(JSON.stringify(toobj));
        xhttp.onreadystatechange =function(){
            if(xhttp.readyState === 4){
                todoList.appendChild(createTodoCard(enteredText));
                todoInput.value = "";
            }
        }
        // obj.push((toobj));

        // localStorage.setItem("todolocal", JSON.stringify(obj))
    } else {
        alert("Please enter a valid TODO item!!");
    }
   // count++;
}

btnAddTodo.addEventListener("click", function () {
   handleTODOCreation();
    console.log(createTodoCard());

});

todoInput.addEventListener("keyup", function (e) {
    if (e.which === 13) {
       handleTODOCreation();
    }
});



// var btn_label = document.getElementById("btn-label");
// var test_button = document.getElementById("test-button");
// var font_size = document.getElementById("font-size");
// var font_color = document.getElementById("font-color");
// var paddingtop = document.getElementById("top");
// var paddingright = document.getElementById("right");
// var paddingbottom = document.getElementById("bottom");
// var paddingleft = document.getElementById("left");
// var bg_color = document.getElementById("bg-color");
// var border_color = document.getElementById("border-color");

// var border_width = document.getElementById("border-width");
// var border_radius = document.getElementById("border-radius");
// var finalbtn = document.getElementById("generate");
// var temp1;
// var temp2;
// var temp3;
// var temp4;
// var temp5;
// var temp6;
// var temp7;
// var temp8;
// var temp9;
// var temp10;
// var temp11;

// btn_label.addEventListener("input", function () {
//     temp1 = btn_label.value;
//     console.log(temp1)
//   });
//   font_size.addEventListener("input", function () {
//     temp2 = font_size.value + 'px';
//     console.log(temp2)
//   });
//   font_color.addEventListener("input", function () {
//     temp3 = font_color.value;
//     console.log(temp3)
//   });
//   paddingtop.addEventListener("input", function () {
//     temp4 = paddingtop.value + 'px';
//     console.log(temp4)
//   });
//   paddingright.addEventListener("input", function () {
//     temp5 = paddingright.value + 'px';
//     console.log(temp5)
//   });
//   paddingbottom.addEventListener("input", function () {
//     temp6 = paddingbottom.value + 'px';
//     console.log(temp6)
//   });
//   paddingleft.addEventListener("input", function () {
//     temp7 = paddingleft.value + 'px';
//     console.log(temp7)
//   });

//   bg_color.addEventListener("input", function () {
//     temp8 = bg_color.value;
//     console.log(temp8)
//   });
//   border_color.addEventListener("input", function () {
//     temp9 = border_color.value;
//     console.log(temp9)
//   });
//   border_width.addEventListener("input", function () {
//     temp10 = border_width.value + 'px';
//     console.log(temp10)
//   });
//   border_radius.addEventListener("input", function () {
//     temp11 = border_radius.value + 'px';
//     console.log(temp11)
//   });
//   finalbtn.addEventListener("click", function () {
//   test_button.innerText = temp1;
//   test_button.style.fontSize=temp2;
//   test_button.style.fontSize=temp2;
//   test_button.style.color=temp3;
//   test_button.style.paddingTop= temp4;
//   test_button.style.paddingRight= temp5;
//   test_button.style.paddingBottom= temp6;
//   test_button.style.paddingLeft= temp7;
//   test_button.style.backgroundColor= temp8;
//   test_button.style.borderColor= temp9;
//   test_button.style.borderWidth= temp10;
//   test_button.style.borderRadius= temp11;
//   });