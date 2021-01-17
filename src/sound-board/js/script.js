const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.classList.add('btn')

  btn.addEventListener('click', () => {
    stopSound()
    document.getElementById(sound).play()
  })

  btn.innerText = sound
  document.getElementById('buttons').appendChild(btn)
})

function stopSound() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound)

    song.pause();
    song.currentTime = 0;
  })
}