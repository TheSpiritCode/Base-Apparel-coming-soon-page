(()=>{
    document.addEventListener('DOMContentLoaded', ()=>{

        const form = document.getElementById('form');
        const email = document.getElementById('email');
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        form.addEventListener('submit', (e)=>{

            e.preventDefault();
            form.classList.remove('error');

            if(email.validity.typeMismatch || email.validity.valueMissing || !re.test(email.value))
            {
                form.classList.add('error');
            }

        })

    })
})();