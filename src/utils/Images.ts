export function getImageUrl(url: string): string {
    return new URL(url, import.meta.url).href
}