const scriptURL = 'https://script.google.com/macros/s/AKfycbzBxm9U4I0XBdDAU-cU0SNL1QQKzi5jJsyfMYWkznXpGRV5irquQ9cmozBO9WWzr0r0/exec' 

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(Response => alert("Thank you! Your Booking is Successfully."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!',error.message))
})