class Validators {
    isValidEmail = (email: string): boolean => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    }

    isValidPhone = (phone: string) => {
        return /[+][7]\d{10}/.test(phone)
    }

    isValidDate = (d: unknown) => {
        return d instanceof Date && !isNaN(d.valueOf());
    }
}

export default new Validators()