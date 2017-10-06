
//Home Objects

const largeCouch = {
    "name": "Large Couch",
    "type": "furniture",
    "location": "Living Room",
    "description": "This is a relatively new couch with a fold out bed."
}

const draftingTable = {
    "name": "Drafting Table",
    "type": "furniture",
    "location": "Bedroom",
    "description": "This is a desk I purhased for drawing and puzzling."
}

const queenBed = {
    "name": "Queen Bed",
    "type": "furniture",
    "location": "Master Bedroom",
    "description": "This is our bed in the master bedroom."
}

const recordPlayer = {
    "name": "Record Player",
    "type": "electronics",
    "location": "Living Room",
    "description": "This is one of my favorite electronics within our house!"
}

const speakerSystem = {
    "name": "Speaker System",
    "type": "electronics",
    "location": "Living Room",
    "description": "My speaker system is fantastic becasue it plays almost all of the electronics within our home."
}

const blender = {
    "name": "Ninja Blender",
    "type": "appliances",
    "location": "Kitchen",
    "description": "We make smoothies almost every morning with this awesome blender."
}

const fridge = {
    "name": "Fridge",
    "type": "appliances",
    "location": "Kitchen",
    "description": "Our may be small, but it is full of great food and drinks!"
}

const largeTv = {
    "name": "Large TV",
    "type": "electronics",
    "location": "Living Room",
    "description": "I got this tv when I wasn't able to go to a football game, and made a great deal with my wife to get a TV instead."
}

const rubberBroom = {
    "name": "Rubber Broom",
    "type": "supplies",
    "location": "Kitchen Closet",
    "description": "This is a broom that has rubber fingers on it that is perfect for sweeping up dog hair on carpet."
}

const pencilDrawing = {
    "name": "Pencil Drawing",
    "type": "art",
    "location": "Hallway",
    "description": "I drew this picture of my wife and I for our anniversary."
}

//Arrays of Objects

let furniture = []
let electronics = []
let appliances = []
let art = []
let supplies = []

//Pushing objects into arrays

furniture.push(largeCouch, draftingTable, queenBed)
electronics.push(recordPlayer, speakerSystem, largeTv)
appliances.push(blender, fridge)
art.push(pencilDrawing)
supplies.push(rubberBroom)

// Database

let HomeInventory = {
    "furniture": furniture,
    "electronics": electronics,
    "appliances": appliances,
    "art": art,
    "supplies": supplies
  }

let homeInventoryString = JSON.stringify(HomeInventory)
localStorage.setItem("homeInventory", homeInventoryString)




