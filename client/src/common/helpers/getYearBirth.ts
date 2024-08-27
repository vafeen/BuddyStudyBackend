export const getYearBirth = (age: number): number => {
    const currentDate = new Date();
    return currentDate.getFullYear() - age;
}