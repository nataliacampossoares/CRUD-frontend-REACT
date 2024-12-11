export function validatePhone(value) {
    return value
      .replace(/\D/g, "") 
      .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
      .substring(0, 15); 
  }
  
  export function validateEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }
  