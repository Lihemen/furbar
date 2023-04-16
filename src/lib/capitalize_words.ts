export function capitalizeWords(word: string): string {
  return word
    .split(/[-\s_/]/)
    .map((element) => {
      return element.charAt(0).toUpperCase() + element.slice(1);
    })
    .join(' ');
}
