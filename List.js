const form = document.querySelector('.form-todo')
const inputText = document.querySelector(".form-todo input[type='text']")
const ul = document.querySelector('.todo-list')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const inputTextValue = inputText.value
    console.log(inputTextValue)
    inputText.value= ""
    let newLi = document.createElement('li')
    const newLiInnerHtml =  `<span class="text">${inputTextValue}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`
    newLi.innerHTML = newLiInnerHtml 
    ul.append(newLi)
    newLi = inputTextValue;
})
// const lis = document.querySelector('ul')
ul.addEventListener('click',(e)=>{
    if(e.target.classList.contains('done')){
        const btnDone = e.target.parentNode.previousElementSibling
        btnDone.style.textDecoration = 'line-through'
    }
    if(e.target.classList.contains('remove')){
        const btnDone = e.target.parentNode.parentNode;
        btnDone.remove();
    }
})