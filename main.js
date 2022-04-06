const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')
const items = []


function addItem(event) {
  event.preventDefault()
  // Could use this becuase that is the form tag
  const text = (this.querySelector('[name=item]')).value
  const item = {
    text: text,
    done: false
  }
  console.log(item)
  this.reset()
}

addItems.addEventListener('submit', addItem)