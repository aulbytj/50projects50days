const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4

  boxes.forEach(box => {

    // 'getBoundingClientRect' returns the size and position of an element relative to the viewport.

    // the 'top' property will return the position of the top of the element
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}