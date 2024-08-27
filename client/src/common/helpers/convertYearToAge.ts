export const convertYearToAge = (year: number): number => {
    const currentDate = new Date();
    return currentDate.getFullYear() - year;
}