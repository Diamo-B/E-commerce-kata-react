export default function sliceProductTitle (title: string, maxLength: number = 15): string {
    if (title.length > maxLength) {
        return title.slice(0, maxLength) + " ...";
    } else {
        return title.padEnd(maxLength);
    }
}