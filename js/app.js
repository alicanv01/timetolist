function creatTodolist() {
    const data  = {
        "todolistlink": "http://example.com/todolist/123",
        "todolistid": "123",
        "todolistname": "Ma liste de tâches",
        "tododata": [
          {
            "todoname": "taskname",
            "todocoment": "taskcoment"
            ,"todocheck":0
          }
        ]
    }
    const todolist = document.createElement("div");

    const todolistnamevalue = data.todolistname;
    const todolistname = document.createElement("input");
    todolistname.setAttribute("value",todolistnamevalue);
    todolistname.id="todolistname";
    document.body.appendChild(todolist)
    todolist.appendChild(todolistname)
    const tododiv = document.createElement("div");
    tododiv.setAttribute("id","tododiv");
    
    const addbtn = document.createElement("input");
    addbtn.setAttribute("type","button");
    addbtn.setAttribute("value","add");
    addbtn.setAttribute("id","add");
    todolist.appendChild(addbtn)
    
    todolist.appendChild(tododiv)


    const tododata = data.tododata;
    let i=0
    tododata.forEach(element => {
        const todo = document.createElement("div");
        todo.setAttribute("class","todo");
        //todo.id=`todo${i++}`;
        tododiv.appendChild(todo)
        const suppbtn = document.createElement("input");
        suppbtn.setAttribute("type","button");
        suppbtn.setAttribute("value","supp");
        todo.appendChild(suppbtn)

        Object.entries(element).forEach(([key, value]) => {
            if (value == 1) {
                const todoinput = document.createElement("input");
                todoinput.setAttribute("type", "checkbox");
                todoinput.checked = false; // Unchecked state
                todo.appendChild(todoinput);
            } else if (value == 0) {
                const todoinput = document.createElement("input");
                todoinput.setAttribute("type", "checkbox");
                todoinput.checked = true; // Checked state
                todo.appendChild(todoinput);
            }
            const todoinput = document.createElement("input");
            todoinput.setAttribute("value",value);
            todo.appendChild(todoinput)     
        });
    });

}

creatTodolist()
const btnadd=document.getElementById("add")
btnadd.addEventListener("click",function name(params) {
    const addtodo = document.createElement("div");
        addtodo.setAttribute("class","todo");

        const tododiv=document.getElementById("tododiv")

        const suppbtn = document.createElement("input");
        suppbtn.setAttribute("type","button");
        suppbtn.setAttribute("value","supp");
        tododiv.appendChild(suppbtn)

        const todoname = document.createElement("input");
        todoname.setAttribute("value","name");
        tododiv.appendChild(todoname)  

        const todocoment = document.createElement("input");
        todocoment.setAttribute("value","commentaire");
        tododiv.appendChild(todocoment)  

        const todocheckbox = document.createElement("input");
        
        todocheckbox.setAttribute("type", "checkbox");
        tododiv.appendChild(todocheckbox)
        
        
        tododiv.appendChild(addtodo)
    })
    