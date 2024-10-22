function togglePasswordVisibility(inputId, toggleElement) {
    const passwordInput = document.getElementById(inputId);
    const isPasswordVisible = passwordInput.type === 'text';
    
    passwordInput.type = isPasswordVisible ? 'password' : 'text';

    // Toggle the icon class between eye and eye-slash
    toggleElement.classList.toggle('fa-eye', isPasswordVisible);
    toggleElement.classList.toggle('fa-eye-slash', !isPasswordVisible);
}