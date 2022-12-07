const input = document.querySelector("#new-task-input");
const addTask = document.querySelector("#new-task-submit");
const todotask = document.querySelector("#tasks");

input.addEventListener("keypress" , function(event){
	if(event.key === "Enter"){
		event.preventDefault();
		addTask.click();
	}
});

addTask.addEventListener("click", () => {
	if (input.value.trim() != 0) {
		let newTask = document.createElement("div");
		newTask.classList.add("task");
		newTask.innerHTML =
			`
				<div class="content">
					<p class="text">${input.value}</p>
				</div>
				<div class="actions">
					<button class="done">Done</button>
					<button class="delete">Delete</button>
				</div>
		`
		todotask.appendChild(newTask);
		input.value = "";
	} else {
		alert("Please enter the task !");
	}
})

todotask.addEventListener("click", (e) => {
	if (e.target.classList.contains("done")) {	
		e.target.parentElement.parentElement.classList.toggle("completed");
	}
})

todotask.addEventListener("click", (e) => {
	if (e.target.classList.contains("delete")) {
		e.target.parentElement.parentElement.remove();
	}
	if(e.target.classList.contains('edit')){
		input.value = '';
	}
})