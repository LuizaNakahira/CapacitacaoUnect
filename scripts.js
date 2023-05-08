const toggleSwitch = document.querySelector('#switch');

      
      toggleSwitch.addEventListener('click', switchTheme, false);

      function switchTheme(e) {
        
        if (e.target.checked) {
          
          document.body.classList.add('dark');
        } else {
         
          document.body.classList.remove('dark');
        }
      }

/*=======================================================================================*/

const apresenteFraseBtn = document.getElementById('apresente-frase-btn');
const novaJanFrase = document.querySelector('.nav2');
const closeFraseBtn = document.querySelector('#close-frase-btn');

apresenteFraseBtn.addEventListener('click', () => {
    novaJanFrase.classList.add('apresente');
});

closeFraseBtn.addEventListener('click', () => {
    novaJanFrase.classList.remove('apresente');
});


const form = document.querySelector('form');
const taskList = document.querySelector('.primeira');
const addTaskBtn = document.getElementById('add-task-btn');
const novaJan = document.querySelector('.novaJan');
const closenovaJanBtn = document.querySelector('#close-btn');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskInput = form.querySelector('input[type="text"]');
    const taskDescriptionTextarea = form.querySelector('textarea');
    const taskText = taskInput.value.trim();
    const taskDescriptionText = taskDescriptionTextarea.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
      <div>
        <h3>${taskText}</h3>
        <button class="material-icons" id="remove-btn">delete_outline</button>
      </div>
      <div>
            <div id="description">
		        <div class="description-btn">
	                <input type="checkbox" id="description-btn" />
	                <label for="description-btn">
	                    <span id="visible-btn">
	                        <p>Ler descrição</p>
	                        <i class="material-icons">expand_more</i>
	                    </span>
	                    <span id="hidden-btn">
	                        <p>Esconder descrição</p>
	                        <i class="material-icons">expand_less</i>
	                    </span>
	                </label>
		        </div>
                <p class="hidden">${taskDescriptionText}</p>
            </div>
            <div class="status">
                <button id="back-btn">
                    <i class="material-icons">navigate_before</i>
                </button>
                <button id="advance-btn">
                    <i class="material-icons">navigate_next</i>
                </button>
            </div>
        </div>
    `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
        taskDescriptionTextarea.value = '';

        const apresenteDescripiontBtn = taskItem.querySelector('.description-btn');
        const descriptionBtn = taskItem.querySelector('#description-btn');
        const description = taskItem.querySelector('#description');
        const descriptionText = taskItem.querySelector('#description p.hidden');

        if (taskDescriptionText === '') {
            apresenteDescripiontBtn.style.display = 'none'
        }

        descriptionBtn.addEventListener('change', () => {
            description.classList.toggle('visible');
            descriptionText.style.display = description.classList.contains('visible') ? 'flex' : 'none';
        });

        const advanceButton = taskItem.querySelector('#advance-btn');
        advanceButton.addEventListener('click', () => {
            const currentList = taskItem.parentElement;
            if (currentList.classList.contains('primeira')) {
                const eList = document.querySelector('.segunda');
                eList.appendChild(taskItem);
                advanceButton.querySelector('.material-icons').textContent = 'navigate_next';
            } else if (currentList.classList.contains('segunda')) {
                const fList = document.querySelector('.f-list');
                fList.appendChild(taskItem);
                advanceButton.querySelector('.material-icons').textContent = 'replay';
                taskItem.querySelector('h3').classList.add('completed');
            } else if (currentList.classList.contains('f-list')) {
                const aList = document.querySelector('.primeira');
                aList.appendChild(taskItem);
                advanceButton.querySelector('.material-icons').textContent = 'navigate_next';
                taskItem.querySelector('h3').classList.remove('completed');
            }
        });
        const backButton = taskItem.querySelector('#back-btn');
        backButton.addEventListener('click', () => {
            const currentList = taskItem.parentElement;
            if (currentList.classList.contains('segunda')) {
                const aList = document.querySelector('.primeira');
                aList.appendChild(taskItem);
            } else if (currentList.classList.contains('f-list')) {
                const eList = document.querySelector('.segunda');
                eList.appendChild(taskItem);
                advanceButton.querySelector('.material-icons').textContent = 'navigate_next';
                taskItem.querySelector('h3').classList.remove('completed');
            }
        });
        
        const removeButton = taskItem.querySelector('#remove-btn');
        removeButton.addEventListener('click', () => {
            const confirmation = confirm('Tem certeza que deseja excluir esta tarefa?');
            if (confirmation) {
                taskItem.remove();
            }
        });
    }
});

addTaskBtn.addEventListener('click', () => {
    novaJan.classList.add('apresente');
});

closenovaJanBtn.addEventListener('click', () => {
    novaJan.classList.remove('apresente');
});

form.addEventListener('submit', () => {
    novaJan.classList.remove('apresente');
});

/*=====================================================================================*/
                       
