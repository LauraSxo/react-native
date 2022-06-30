export default function getFormattedDate(date) {
    return `${date.getDate()} ${date.toLocaleString('en-us',{month:'short', year:'numeric'}).slice(4,7)}, ${date.getFullYear()}`
}

export function getDateMinusDays(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
