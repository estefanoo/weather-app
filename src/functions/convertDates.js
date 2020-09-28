
export const convertDateToday = (date) =>{
    const dateNum = new Date(`${date}`);
    const dateString = dateNum.toDateString().split(' ');
    const dateNewFormat = dateString[1] + ' ' + dateString[2] + ' ' + dateString[3];
    return dateNewFormat
}

export const convertDateNextDays = (date) =>{
    const dateNum = new Date(`${date}`);
    const dateString = dateNum.toDateString().split(' ');
    const dateNewFormat = dateString[0] + ' ' + dateString[2] + ' ' + dateString[1];
    return dateNewFormat
}
