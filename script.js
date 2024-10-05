// QuerySelector seleciona pelo CSS, logo usar # . ou só o nome da tag importa

const openInputTodo = document.querySelector('#openInputTodo')
const enterTodo = document.querySelector('#enterTodo')

const inputTodo = document.querySelector('#inputTodo')
const addTodo = document.querySelector('#addTodo')
const todoList = document.querySelector('#todoList')

/* Processo de adição por clique da tarefa a lista
O bloco abaixo recupera o texto da caixa de texto numa
variavel e faz tres verificações: se o texto está vazio,
se é um texto sendo editado ou se é um novo texto,
realizando ações respectivas e após essas limpando a caixa 
de texto
*/

openInputTodo.addEventListener('click', () =>{
    enterTodo.style.display = 'block'
})


addTodo.addEventListener('click', ()=>{
    const todo = inputTodo.value

    if (todo === ''){
        alert('DIGITE UMA TAREFA MEUGRO >:(')
    } else {
        addTodoInList(todo)
    }
    inputTodo.value = ''
})


// Adiciona a tarefa na lista de tarefas
function addTodoInList (todo) {
    const todoListItem = document.createElement('li')
    const todoText = document.createElement('span')
    todoText.textContent = todo

    const delBtn = document.createElement('button')
    const editBtn = document.createElement('button')
    delBtn.classList.add('actions')
    editBtn.classList.add('actions')

    delBtn.addEventListener('click', () =>{
        todoList.removeChild(todoListItem)
    })

    editBtn.addEventListener('click', ()=>{
        inputTodo.value = todoText.textContent

        todoList.removeChild(todoListItem)

        // mais simples do que eu esperava; tá funcionando, então por ora basta
        // Uma meta pro futuro é mudar esse sistema pra usar arrays, editando 
        // pelo indice, assim a tarefa volta pro seu lugar ao inves de ser
        // readicionada
    })


    const divActions = document.createElement('div')
    divActions.classList.add('actions')
    delBtn.innerHTML = '&#x1F5D1'
    editBtn.innerHTML = '&#x1F589'

    divActions.appendChild(delBtn)
    divActions.appendChild(editBtn)

    todoListItem.appendChild(todoText)
    todoListItem.appendChild(divActions)

    todoList.appendChild(todoListItem)

}
