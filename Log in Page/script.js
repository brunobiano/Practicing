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

        if (rules !== null) {
            rules = rules.split('|');
            for (let i in rules) {
                let rulesDetails = rules[i].split('='); 
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
        return true;
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
        
        let erasingError = document.querySelectorAll('.error');
        for (let i = 0; i < erasingError.length; i++) {
            erasingError[i].remove();
        }
    }
}

let form = document.querySelector(".validator");
form.addEventListener('submit', validator.handleSubmit);