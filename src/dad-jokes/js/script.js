const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// async/await method
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }

  const response = await fetch('https://icanhazdadjoke.com/', config)

  const data = await response.json()

  jokeEl.innerHTML = data.joke

}

// fetch .then method
// function generateJoke() {

//   // creating a variable and storing the header 
//   const config = {
//     headers: {
//       Accept: 'application/json'
//     }
//   }

//   // the fetch request
//   // learn more about fetch https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//   fetch('https://icanhazdadjoke.com/', config)

//     // fetchs the json data
//     .then(response => response.json())

//     // console logs that data
//     // .then(data => console.log(data))

//     // displays the joke property from the json object to the jokeEl
//     .then(data => {jokeEl.innerHTML = data.joke})

// }