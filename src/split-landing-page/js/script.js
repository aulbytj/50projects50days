const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')
// const mediaQuery = window.matchMedia('(max-width: 857px)')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))

// if (mediaQuery.matches) {
//   // Then trigger an alert
// left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
// left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))
// right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
// right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))

// }