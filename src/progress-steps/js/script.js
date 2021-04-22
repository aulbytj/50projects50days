const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

// act as the index of the current element
let currentActive = 1

next.addEventListener('click', () => {
  currentActive++

  // keep the currentActive from going over the total amount of circles
  if (currentActive > circles.length ) {
      currentActive = circles.length
  }

  update()
})

prev.addEventListener('click', () => {
  currentActive--

  // keep the currentActive from going below one (1)
  if (currentActive < 1 ) {
    currentActive = 1
  }

  update()
})



function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')

  // calculates the length of the progress bar when clicked
  progress.style.width = ((actives.length -1) / (circles.length -1)) * 100 + '%'

  // makes previous button available after prgress moves to the second step
  if (currentActive === 1) {
    prev.disabled = true;

    // disables next button when progress reaches the last step
  } else if (currentActive === circles.length) {
    next.disabled = true;

    // makes both next and previous buttons available when not at the first step or the last step
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}