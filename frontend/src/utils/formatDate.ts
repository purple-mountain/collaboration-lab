export function formatDate(date: Date): string {
    return date.toLocaleDateString("default", {
        minute: "2-digit",
        hour: "2-digit",
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hourCycle: "h24",
    });
}
