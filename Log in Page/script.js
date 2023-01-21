let validator = {
    handleSubmit: (event) => {
        event.preventDefault();
        let send = true;

        validator.clearErrors();

        let inputs = form.querySelectorAll("input");

        for (let i = 0; i < inputs.length; i++){
            let input = inputs[i];
            let check = validator.checkInput(input);
            if (check !== true){
                send = false;
                validator.showError(input, check); // showing error 
            }
        }

        if (send) {
            form.submit();
        }
    },

    checkInput: (input) => {
        let rules = input.getAttribute('data-rules');

        if (rules !== null) { // significa que tem regra no input
            rules = rules.split('|'); // separa em uma array de regras
            for (let i in rules) { // itera no index da array
                let rulesDetails = rules[i].split('=');  // separador pro min
                switch (rulesDetails[0]) {
                    case 'required':
                        if (input.value == '') {
                            return 'Cannot be empty.';
                        }
                    break;
                    case 'min':
                        if (input.value.length < rulesDetails[1]){
                            return `Must have at least ${rulesDetails[1]} characters`;
                        }
                    break;
                    case 'email':
                        if (input.value != '') {
                            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if (!regex.test(input.value.toLowerCase())) {
                                return 'Not a valid e-mail.'
                            }
                        }
                    break;          
                }
            }
        }
        return true; // pq tava retornando true quando tinha mais de uma regra no data do html?
    },

    showError: (input, error) => {
        input.style.borderColor = '#f00';

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.ElementSibiling);
    },

    clearErrors: () => {
        let clearingInputs = form.querySelectorAll('input');
        for (let i = 0; i < clearingInputs.length; i++){
            clearingInputs[i].style = '';
        }
        
        let erasingError = document.querySelectorAll('.error'); // importante lembrar de querySelectorAll na hora de iterar.
        for (let i = 0; i < erasingError.length; i++) {
            erasingError[i].remove(); // Mas o style.display = 'none' tbm funciona
        }
    }
}

let form = document.querySelector(".validator");
form.addEventListener('submit', validator.handleSubmit);