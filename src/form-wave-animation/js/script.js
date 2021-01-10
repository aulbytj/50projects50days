const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
  // grabs the individual letters
  label.innerHTML = label.innerText

  // splits the letters into an array
    .split('')

    // takes each letter and wraps a span around each letter
    .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)

    // turns the array of letters back to a string
    .join('')
})