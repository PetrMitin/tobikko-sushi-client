import validators from "../validators/validators"

class HelperFunctions {
    static toYYYYDDMM = (d: Date) => {
        if (!validators.isValidDate(d)) return undefined
        let year = d.getFullYear().toString()
        year = '0'.repeat((4-year.length > 0) ? 4-year.length : 0) + year
        let month = (d.getMonth()+1).toString()
        month = '0'.repeat((2-month.length > 0) ? 2-month.length : 0) + month
        let day = d.getDate().toString()
        day = '0'.repeat((2-day.length > 0) ? 2-day.length : 0) + day
        return `${year}-${month}-${day}` 
    }
}

export default HelperFunctions