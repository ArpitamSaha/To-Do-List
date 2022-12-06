window.addEventListener('load', () => {
	const form = document.getElementById("new-task-form");
	const input = document.getElementById("new-task-input");
	const listEle = document.getElementById("tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		if(!task || " "){
			alert("Please fill out the task !");
			return;
		}

		const taskEle = document.createElement('div');
		taskEle.classList.add('task');

		const task_contentEle = document.createElement('div');
		task_contentEle.classList.add('content');

		taskEle.appendChild(task_contentEle);

		const task_inputEle = document.createElement('input');
		task_inputEle.classList.add('text');
		task_inputEle.type = 'text';
		task_inputEle.value = task;
		task_inputEle.setAttribute('readonly', 'readonly');

		task_contentEle.appendChild(task_inputEle);

		const task_actionsEle = document.createElement('div');
		task_actionsEle.classList.add('actions');
		
		const task_editEle = document.createElement('button');
		task_editEle.classList.add('edit');
		task_editEle.innerText = 'Edit';

		const task_deleteEle = document.createElement('button');
		task_deleteEle.classList.add('delete');
		task_deleteEle.innerText = 'Delete';

		task_actionsEle.appendChild(task_editEle);
		task_actionsEle.appendChild(task_deleteEle);

		taskEle.appendChild(task_actionsEle);

		listEle.appendChild(taskEle);

		input.value = '';

		task_editEle.addEventListener('click', (e) => {
			if (task_editEle.innerText.toLowerCase() == "edit") {
				task_editEle.innerText = "Save";
				task_inputEle.removeAttribute("readonly");
				task_inputEle.focus();
			} else {
				task_editEle.innerText = "Edit";
				task_inputEle.setAttribute("readonly", "readonly");
			}
		});

		task_deleteEle.addEventListener('click', (e) => {
			listEle.removeChild(taskEle);
		});
	});
});




