export function formatTime(timeString: string): string {
    if (!timeString || typeof timeString !== "string") {
        return "Loading...";
    }

    const timeAndZone = timeString.split(" ");
    if (timeAndZone.length !== 2) {
        return "Invalid Time Format";
    }

    const [time, timezone] = timeAndZone;

    const timeParts = time.split(":");
    if (timeParts.length !== 2) {
        return "Invalid Time Format";
    }

    const [hours, minutes] = timeParts;

    let formattedHours = Number(hours) % 12;
    formattedHours = formattedHours === 0 ? 12 : formattedHours;

    const period = Number(hours) < 12 ? "AM" : "PM";

    return `${formattedHours}:${minutes} ${period}`;
}
