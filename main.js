const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')
const items = JSON.parse(localStorage.getItem('items')) || [];


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
  localStorage.setItem('items', JSON.stringify(items))
  this.reset()
}


function populateList(items = [], platesList) {
  platesList.innerHTML = items.map((item, index) => {
    return `
    <li>
    <input type='checkbox' data-index=${index} id=item${index} ${item.done ? 'checked' : ''} />
    <label for="item${index}">${item.text}</label>
    </li>
    `
  })
}

function toggleDone(event) {
  if (!event.target.matches('input')) return // skip this unless its an input
  const el = event.target
  const index = el.dataset.index
  items[index].done = !items[index].done
  localStorage.setItem('items', JSON.stringify(items))
  populateList(items, itemsList)
}

addItems.addEventListener('submit', addItem)

populateList(items, itemsList)

itemsList.addEventListener('click', toggleDone)