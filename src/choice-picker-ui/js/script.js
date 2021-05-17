const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

// this will automatically place the cursor in the textarea afterthe page is loaded
textarea.focus()

textarea.addEventListener('keyup', function(e) {
  // e.target.value will get the value of what is typed in the the textarea
  createTags(e.target.value)

  if (e.key === 'Enter') {
    setTimeout(function() {
      e.target.value = ''
    }, 10)
    randomSelection()
  }
})




function createTags(input) {
  const tags = input.split(',') // will split the values after a comma into array elements
    .filter(tag => tag.trim() !== '') // tag value must not be an empty string
    .map(tag => tag.trim()) // removes the whitespace
    
  tagsEl.innerHTML = ''

  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  });
}

function randomSelection() {
  const times = 30

  const interval = setInterval(function() {
    const randomTag = pickRandomTag()

    highlightTag(randomTag)

    setTimeout(function() {
      unhighlightTag(randomTag)
    }, 100)
  }, 100)

  setTimeout(function() {
    clearInterval(interval)

    setTimeout(function() {
      const randomTag = pickRandomTag()

      highlightTag(randomTag)
      
    }, 100)
  }, times * 100)
  // clearInterval(interval)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}


function highlightTag(tag) {
  tag.classList.add('highlight')
}


function unhighlightTag(tag) {
  tag.classList.remove('highlight')
}