const decodeData = token => Buffer.from(localStorage.getItem('token').split('.')[1]).toString('ascii')

const saveToken = token => localStorage.setItem('token')

const isExpired = () => decodeData().exp < (new Date()).getTime()