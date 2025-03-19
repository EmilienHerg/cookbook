export default function timeToNumber(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
}