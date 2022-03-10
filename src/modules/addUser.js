export const addUser = () => {
    const form = document.querySelector('form')
    const nameInput = form.querySelector('#form-name')
    const emailInput = form.querySelector('#form-email')
    const childrenInput = form.querySelector('#form-children')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        console.log(nameInput.value);
        console.log(emailInput.value);
        console.log(childrenInput.checked);
    })
}