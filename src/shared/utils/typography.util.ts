export function breakWord(word: string) {
  return word.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
}
