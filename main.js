const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')
const items = []


function addItem(event) {
  event.preventDefault()
  // Could use this becuase that is the form tag
  const text = (this.querySelector('[name=item]')).value
  console.log(text)
  const item = {
    text: text,
    done: false
  }
}

addItems.addEventListener('submit', addItem)