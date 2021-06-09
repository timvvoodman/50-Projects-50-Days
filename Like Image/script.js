const likeMe = document.querySelector('.like-me')
const times = document.querySelector('#times')

let clickTime = 0
let timesLiked = 0

//Custom double-click event listener
likeMe.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime()
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e)
      clickTime = 0
    } else {
      clickTime = new Date().getTime()
    }
  }
})

const createHeart = (e) => {
  //create new heart icon
  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')

  //insert heart element at click position
  const x = e.clientX
  const y = e.clientY

  const leftOffset = e.target.offsetLeft
  const topOffset = e.target.offsetTop

  const xInside = x - leftOffset
  const yInside = y - topOffset

  heart.style.top = `${yInside}px`
  heart.style.left = `${xInside}px`

  likeMe.appendChild(heart)

  //set times liked
  times.innerHTML = ++timesLiked
}
