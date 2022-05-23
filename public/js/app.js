console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit',(e)=>{
  e.preventDefault()

  messageOne.textContent = 'Loading..'
  messageTwo.textContent = ' '

  const title = search.value
  fetch('https://jsonplaceholder.typicode.com/todos/1').then((response)=>{
  response.json().then((data)=>{
    if(data.error){
      messageOne.textContent = data.error

    }else{
      messageOne.textContent = data.title
      messageTwo.textContent = data.userId
    console.log(data)
    }
  })
})

})