
// Load storage.js data from local storage

const storedInventory = JSON.parse(localStorage.getItem("homeInventory"))

// Add new inventory of each array type

const kitchenTable = {
    "name": "Kitchen Table",
    "type": "furniture",
    "location": "Kitchen",
    "description": "I hand painted this table when we moved into our home."
}
const guitar = {
    "name": "Guitar",
    "type": "electronics",
    "location": "Bedroom",
    "description": "This is my one and only electric guitar."
}
const splatterPainting = {
    "name": "Splatter Painting",
    "type": "art",
    "location": "Bedroom",
    "description": "I made a splatter painting last fall that my wife doesn't like all that much."
}
const swiffer = {
    "name": "Swiffer",
    "type": "supplies",
    "location": "Kitchen",
    "description": "We use the swiffer when there is a nasty spill."
}
const washingMachine = {
    "name": "Washing Machine",
    "type": "appliances",
    "location": "Kitchen",
    "description": "This is my washing machine."
}

storedInventory.appliances.push(washingMachine)
storedInventory.art.push(splatterPainting)
storedInventory.supplies.push(swiffer)
storedInventory.furniture.push(kitchenTable)
storedInventory.electronics.push(guitar)

// Parse string into JS object

homeInventoryString = JSON.stringify(HomeInventory)
localStorage.setItem("homeInventory", homeInventoryString)
