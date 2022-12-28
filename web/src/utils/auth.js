export const decodeData = token => Buffer.from(localStorage.getItem('token').split('.')[1]).toString('ascii')

export const saveToken = token => localStorage.setItem('token')

export const isExpired = () => decodeData().exp < (new Date()).getTime()