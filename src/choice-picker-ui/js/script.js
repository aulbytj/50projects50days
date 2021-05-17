const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

// this will automatically place the cursor in the textarea afterthe page is loaded
textarea.focus()

textarea.addEventListener('keyup', function(e) {
  // e.target.value will get the value of what is typed in the the textarea
  createTags(e.target.value)
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

