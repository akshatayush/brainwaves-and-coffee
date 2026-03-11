export function readingTime(text: string): string {
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / 230);
  return `${minutes} min read`;
}
