

document.addEventListener("DOMContentLoaded", () => {
    const actionForm = document.querySelector(".helpForm");

    const validationRules = {
        name: {
            validate: (value) => value.length !== 0,
            errorMessage: "обовьязкове текстове поле"
        },
        message: {
            validate: (value) => value.length > 5,
            errorMessage: "текстове поле не меньше 5 символів"
        },
        phone: {
            validate: (value) => /^\+380\d{9}$/.test(value),
            errorMessage: "обовьязкове поле типу phone. З початком на +380 і має 9 цифр"
        },
        email: {
            validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            errorMessage: "email обовьязково повинен мати @ та крапку"
        }
    };

    const validateField = (inputField) => {
        const dataValue = inputField.value;
        const errorClass = `${inputField.id}Error`;
        const existingError = inputField.nextElementSibling;

        const validationRule = validationRules[inputField.id];
        if (!validationRule) return true;

        if (!validationRule.validate(dataValue)) {
            if (!existingError || !existingError.classList.contains(errorClass)) {
                const errorMessage = document.createElement("p");
                errorMessage.textContent = validationRule.errorMessage;
                errorMessage.className = `${errorClass} error`;
                inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling);
            }
            return false;
        } else if (existingError && existingError.classList.contains(errorClass)) {
            existingError.remove();
        }
        return true;
    };

    actionForm.addEventListener("submit", (evt) => {
        evt.preventDefault();

        let formIsValid = true;
        const inputs = actionForm.querySelectorAll("input");

        inputs.forEach(input => {
            if (!validateField(input)) {
                formIsValid = false;
            }
        });

        if (formIsValid) {
            const formData = new FormData(actionForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            console.log("Data inserted by user:", data);
        }
    });

    const inputs = actionForm.querySelectorAll("input");
    inputs.forEach(input => {
        input.addEventListener("input", () => validateField(input));
    });
});