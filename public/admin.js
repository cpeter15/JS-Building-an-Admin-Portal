
async function main() {

    let respone = await fetch('http://localhost:3001/listBooks')

    let books = await respone.json()

    books.forEach(displayBook)
}

function displayBook(book) {

    let root = document.querySelector('#root')

    let list = document.createElement('li')
    list.textContent = book.title

    let updateInput = document.createElement('input')
    updateInput.value = book.quantity

    let submitButton = document.createElement('button')
    submitButton.textContent = "Update"

    submitButton.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: updateInput.value
            })
        })
    })

    list.append(updateInput, submitButton)

    root.append(list)
}

main();