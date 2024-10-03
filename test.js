function getTimeString(time) {
    const hour = parseInt(time/3600);
    let remaningSecond = time % 3600;
    const minute = parseInt(remaningSecond / 60);
    remaningSecond = remaningSecond % 60;
    return `${hour} hour ${minute} m ${remaningSecond}sec ago`
}
console.log(getTimeString(7865))