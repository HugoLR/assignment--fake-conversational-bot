// Encontrar todos los elementos donde insertaremos nuestro texto
var greeting = document.querySelector('h1')
var myStory = document.querySelector('.myStory')
var hobbies = document.querySelector('.hobbies')
var usersName = document.querySelector('input')
var longName = document.querySelector('.longName')
var shortName = document.querySelector('.shortName')
var hello = document.querySelector('.hello')
var str = document.querySelector('.nombre')


//Saludamos
setTimeout(function() {
  greeting.style.display = "inline-block"
},1000)

//Contamos nuestra historia
setTimeout(function() {
  myStory.style.display = "inline-block"
},2000)

//Mencionamos nuestros gustos
setTimeout(function() {
  hobbies.style.display = "inline-block"
},3000)

//Preguntamos al usuario su nombre
setTimeout(function() {
  usersName.style.display = "inline-block"
},4000)

//Creamos nuestro escuchador
usersName.addEventListener('keypress', function(e){

  //Evaluamos si presiona enter 
  if (e.keyCode === 13){

    if(usersName.value === "" || usersName.value.length < 2){
      alert('You should enter your name')
    } else if (usersName.value.length >= 2){

      if(usersName.value.length > 6){
        setTimeout(function() {
          longName.style.display = "inline-block"
          shortName.style.display = "none"
        },1000)

        setTimeout(function() {
          hello.style.display = "inline-block"
          str.textContent = usersName.value
        },2000)
      }

      if(usersName.value.length <= 6){
        setTimeout(function() {
          shortName.style.display = "inline-block"
          longName.style.display = "none"
        },1000)

        setTimeout(function() {
          hello.style.display = "inline-block"
          str.textContent = usersName.value
        },2000)
      }
    }
  }
})
