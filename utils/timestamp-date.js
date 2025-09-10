export function TimeStampToDate (stamp) {
    const t = new Date();
    return t.toLocaleDateString();
}