// DOM
const container = document.querySelector(".container");
const addTaskBtn = document.getElementById("addBtn");
// const added = document.querySelector(".added");
const counter_one = document.querySelector(".numberOfTasks");
const counter_two = document.querySelector(".taskNumber");
const message = document.querySelector(".msg");
const input_task = document.getElementById("inputTask");
const date_input = document.getElementById("dateInput");
const time_input = document.getElementById("timeInput");
const clear_btn = document.getElementById("clear");
const submit_btn = document.getElementById("submit");
const taskInputContainer = document.querySelector(".addTask");
// const checkbox = document.querySelector(".check");
// const do_list = document.querySelector(".todo");
// const activeDiv = document.querySelector(".active");
// const edit_list = document.querySelector(".edit");
// const del_list = document.querySelector(".del");
const message_two = document.querySelector(".msg-two");
const cancel = document.querySelector(".cancel");
const selector = document.getElementById("select");
const active = document.getElementById("active");
const all = document.getElementById("all");
const completed = document.getElementById("completed");
const body = document.querySelector("body");
// const trio_div = document.querySelector(".trio");
// const duo_div = document.querySelector(".duo");
// const activePro = document.querySelector(".activated");
const edit_task = document.getElementById("editTask");
const edit_input = document.getElementById("editInput");
const divTask = document.getElementById("divTask");

const activeText = "Active";
const completedText = "Completed";
const editText = "edit";
const delText = "delete";
let counter = 0;
let check = true;
let unmatch = false;
let reuse = 1;
let update = 0;



// add btn task function
function addTasks(){
    counter_two.textContent= reuse;
    taskInputContainer.style.visibility = "visible";
    body.style.backgroundColor = "rgba(0,0,0, 0.5)";
    container.style.backgroundColor = "rgba(255,255,255, 0.5)";
}

addTaskBtn.addEventListener('click', addTasks);


// clear btn function

function clear(e){
    e.preventDefault();
    if (
      (input_task.value === input_task.value &&
        input_task.value !== "") ||
      (date_input.value === date_input.value && date_input.value !== "") ||
      (time_input.value === time_input.value && time_input.value !== "")
    ) {
      input_task.value = "";
      date_input.value = "";
      time_input.value = "";
      message_two.textContent = "Deleted!! Pls enter all fields.";
      message_two.style.opacity = "1";
      message_two.classList.replace("msg-two", "msg_two");
      setTimeout(() => message_two.style.opacity = "0", 3000);
    } else if (
      input_task.value === "" &&
      date_input.value === "" &&
      time_input.value === ""
    ) {
      input_task.value = "";
      date_input.value = "";
      time_input.value = "";
      message_two.textContent = "Nothing to delete!! Pls enter all fields.";
      message_two.style.opacity = "1";
      message_two.classList.replace("msg-two", "msg_two");
      setTimeout(() => message_two.style.opacity = "0", 3000);
      
    }
}

clear_btn.addEventListener('click', clear); // not fully functioning as I expected. Would come back to it in the future.



//cancel or back function
function back(e){
  e.preventDefault();
  body.style.backgroundColor = "grey";
  container.style.backgroundColor = "#f1efef";
  taskInputContainer.style.visibility = "hidden";
  console.log("worked!!");
}

cancel.addEventListener('click', back);



/* SUBMIT BUTTONN FUNCTION*/

function submit(e){
  e.preventDefault();
  update++;
  reuse++;
     if ( update >= 1 &&
       (input_task.value === input_task.value && input_task.value !== "") &&
       (date_input.value === date_input.value && date_input.value !== "") &&
       (time_input.value === time_input.value && time_input.value !== "")
     ) {
       taskInputContainer.style.visibility = "hidden";
       body.style.backgroundColor = "grey";
       container.style.backgroundColor = "#f1efef";
       counter_one.textContent = update;
       counter_two.textContent = reuse;
       message.style.opacity = "1";
       message.textContent = `New Task Added(${update})!`;
       message.classList.replace("msg-two-red", "msg");
       setTimeout(() => message.style.opacity = "0", 3000);
       const newInput = document.createElement("input");
       newInput.setAttribute("type", "checkbox");

       const todoText = document.createElement("span"); //will return to this for cross-checking to see if I could actually append the todo text without having to store in a span element tag.

       const active_div = document.createElement("div");
       const edit_div = document.createElement("div");
       const del_div = document.createElement("div");
       const added = document.createElement("div");
       const trio_div = document.createElement("div");
       const duo_div = document.createElement("div"); 
       duo_div.classList.add("duo");
       trio_div.classList.add("trio");  
       todoText.textContent = `${input_task.value} : ${date_input.value} : ${time_input.value}`; 
       duo_div.append(newInput, todoText);
       trio_div.append(active_div, edit_div, del_div);
       added.append(duo_div, trio_div);
       active_div.classList.add("active", "same");
       active_div.textContent = activeText;
       edit_div.classList.add("edit");
       del_div.classList.add("del");
       added.classList.add("added");
       todoText.setAttribute("contenteditable", "true");
       todoText.classList.add("todo");
       edit_div.textContent = editText;
       del_div.textContent = delText; 
       newInput.classList.add("check");
       divTask.append(added);
       

       //clear input fields after submit
       input_task.value = "";
       date_input.value = "";
       time_input.value = "";
       

     } else if(input_task.value === "" &&
       date_input.value === "" &&
       time_input.value === "")
       {
        console.log(update);
        message_two.style.opacity = "1";
        message_two.textContent = "Pls enter all fields!!";
        message_two.classList.replace("msg-two", "msg_two");
        setTimeout(()=> message_two.style.opacity = "0", 3000);
       }
       selectedItem();
}

submit_btn.addEventListener('click', submit);


divTask.addEventListener('click', function(e){
  if(e.target.classList.contains("del")){
    e.target.parentElement.parentElement.remove();
    update--;
    reuse--;
    counter_one.textContent = update;
    counter_two.textContent = reuse;
    message.style.opacity = "1";
    message.textContent = "Task Deleted!!";
    message.classList.add("msg-two-red");
    message.classList.remove("msg");
    setTimeout(() => message.style.opacity = "0", 3000);
  }
  });


  divTask.addEventListener('change', (e) => {
    const todoTask = e.target.closest(".added");
    const status = todoTask.querySelector(".same");
    if (e.target.checked){
      status.textContent = completedText;
      status.classList.add("completed");
      status.classList.remove("active");
      // status.classList.replace("active", "completed");
    }else{
       status.textContent = activeText;
       status.classList.add("active");
       status.classList.remove("completed");
      //  status.classList.replace("completed", "active");
    }
  })

// I want this to behave in a way that when completed is selected from the select option, only the divs with completed should be shown the rest should be hidden or removed

  // function selectedItem(e){
  //   const filterDiv = divTask.querySelectorAll(".added");
  //   const childFilter = divTask.querySelector(".same");
  //   const delActive = document.querySelector(".active");
  //   const delCompleted = divTask.querySelector(".completed");
  //   if(selector.value === "completed"  && childFilter.classList.contains("completed")){
  //     delActive.parentElement.parentElement.remove();
  //   }
  // }
  function selectedItem(e) {
    const allTasks = divTask.querySelectorAll(".added");

    allTasks.forEach((task) => {
      const status = task.querySelector(".same");
      const isCompleted = status?.classList.contains("completed");

      if (selector.value === "completed") {
        task.style.display = isCompleted ? "flex" : "none";
      } else if (selector.value === "active") {
        task.style.display = !isCompleted ? "flex" : "none";
      } else {
        // "all" — show everything
        task.style.display = "flex";
      }
    });
  }


  selector.addEventListener("change", selectedItem);