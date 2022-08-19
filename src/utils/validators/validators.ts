class Validators {
    isValidEmail = (email: string): boolean => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    }

    isValidPhone = (phone: string) => {
        return /[+][7]\d{10}/.test(phone)
    }
}

export default new Validators()