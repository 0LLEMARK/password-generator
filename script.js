function generatePassword(length, includeAlphaUpper, includeAlphaLower, includeNumbers, includeSymbols) {
  let characters = ''
  if (includeAlphaUpper) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  if (includeAlphaLower) {
    characters += 'abcdefghijklmnopqrstuvwxyz'
  }
  if (includeNumbers) {
    characters += '0123456789'
  }
  if (includeSymbols) {
    characters += '!@#$%^&*()_+-=[]{}|;:\'",.<>/?'
  }

  let password = ''
  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)]
  }

  return password
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('password-form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const passwordLength = document.getElementById('password-length').value
    const includeAlphaUpper = document.getElementById('include-alpha-upper').checked
    const includeAlphaLower = document.getElementById('include-alpha-lower').checked
    const includeNumbers = document.getElementById('include-numbers').checked
    const includeSymbols = document.getElementById('include-symbols').checked

    const password = generatePassword(passwordLength, includeAlphaUpper, includeAlphaLower, includeNumbers, includeSymbols)

    const passwordResult = document.getElementById('password-result')
    passwordResult.textContent = password
  })
})
