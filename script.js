function generatePassword() {
    const length = document.getElementById('length').value;
    const includeLetters = document.getElementById('letters').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    let characters = '';
    if (includeLetters) {
        characters += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (includeNumbers) {
        characters += '0123456789';
    }
    if (includeSymbols) {
        characters += '!@#$%^&*()_+[]{}|;:,.<>?';
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById('password').textContent = password;
}
