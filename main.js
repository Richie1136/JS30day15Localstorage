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
  items.push(item)
  populateList(items, itemsList)
  this.reset()
}


function populateList(items = [], platesList) {
  platesList.innerHTML = items.map((item, index) => {
    return `
    <li>
    <label for="">${item.text}</label>
    </li>
    `
  })
}

addItems.addEventListener('submit', addItem)