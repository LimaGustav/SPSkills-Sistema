// 

export const isEmail = email => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)

export const isGreaterThan = (str, n) => (new RegExp(`.{${n},}`)).test(str)

export const isLowerThan = (str, n) => (new RegExp(`.{${n},}`)).test(str)

// The password needs:
// - An uppercase character
// - A lowercase character
// - A number
// - A special character
// - Length more or equal to 8
export const isValidPassword = pwd => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-z\d@$!%*#?&]{8,}$/.test(pwd)

export const hasUpperCaseLetter =  str => /[A-Z]/.test(str)

export const hasLowerCaseLetter =  str => /[a-z]/.test(str)

export const hasNumber =  str => /\d/.test(str)

export const hasSpecialCharacters =  str => /[@$!%*#?&]/.test(str)

export const isCPF =  cpf => {
    if(!/^(\d{3}\.?){2}\d{3}-?\d{2}$/.test(cpf)) return false

    let numbers = cpf.replaceAll(/[.-]/, '').split('').map(x => parseInt(x))
    let total = [0, 0]

    for(let i = 0; i < 9;i++)  total[0] += numbers[i] * (10 - i)
    for(let i = 0; i < 10;i++) total[1] += numbers[i] * (11 - i)

    total.forEach((x, i) => {
        if( !( 
            (x >= 2 && 11 - x === numbers[i + 10]) ||
            11 - x === numbers[i + 10]) ) return false
    })
    return true
}