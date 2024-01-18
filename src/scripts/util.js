export function formatString(inputString) {
  if (!inputString || typeof inputString !== "string") {
    return "";
  }

  const words = inputString.toLowerCase().split(/[_\s]+/);

  // Capitalize the first letter of each word
  const formattedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Join the words with spaces
  return formattedWords.join(" ");
}
