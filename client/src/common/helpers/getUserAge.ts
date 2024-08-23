export const getUserAge = (date: string): number => {
    const currentDate = new Date();
    const userDate = new Date(date);
    return currentDate.getFullYear() - userDate.getFullYear();
}