class Login {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.validateonSubmit();
    }

    validateonSubmit() {
        let self = this;
        
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            let error = 0; 
            self.fields.forEach((field) => {
                const input = document.querySelector(`#${field}`);
                if (self.validateFields(input) == false) {
                    error++;
                }
            });
            if (error == 0) {
                window.location.href = '../../todos-produtos.html'
            }
        });
    }

    validateFields(field) {
        if (field.value.trim() == "") {
            alert("O campo deve ser preenchido")
            return false;
        }
        if (field.value !== "Admin") {
            console.log("o ademe ta on");
            return false;
        }
        if (field.value == "Admin") {
            return true;
        }
    }
}

const form = document.querySelector('.login-form');
if (form) {
    const fields = ["login-email", "login-senha"];
    const validator = new Login(form, fields);
}