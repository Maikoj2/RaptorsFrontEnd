 const calculateAge = (birthdate: Date): number => {
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const month = today.getMonth() - birthdate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    return age;
}

export const validateDateOfBirth = (value: any, MIN_AGE: number): boolean => {
    const dateOfBirth = new Date(value);
    const age = calculateAge(dateOfBirth);
    console.log(age);
    
    return age >= MIN_AGE;
  };