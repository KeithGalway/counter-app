let saveEl = document.getElementById('save-el')       // get saved element - displays previous passenger counts
let countEl = document.getElementById('count-el')     // get count element - displays current passenger count
let count = 0                                         // Declare count state - holds passenger count

// increment function increment count element and display
function increment() {
    count += 1                                        // increment count by 1
    countEl.textContent = count                       // set count element content to incremented count value
}

// save function saves previous entries and display
function save() {
    let countStr = count + " - "                       // declare count string to count value (concatenate 'dash')
    saveEl.textContent += countStr                     // concatenate paragraph element content to count value (in string form)
    countEl.textContent = 0                            // reset count element content to 0
    count = 0                                          // reset count state value to 0 
}