export function formatDate(date){
    return date.toLocaleDateString(
        "en-US", {
            year: "short",
            month: "short",
            day: "short"
        }
    );
}