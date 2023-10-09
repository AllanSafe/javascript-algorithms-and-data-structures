function palindrome(str) {
  const start = /[\W_]/g;
  const lowStr = str.toLowerCase().replace(start, '')
  const revStr = lowStr.split('').reverse().join('')
  return revStr === lowStr
}

palindrome("eye");