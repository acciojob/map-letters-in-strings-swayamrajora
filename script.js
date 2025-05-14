//your JS code here. If required.
//your JS code here. If required.
function mapLetters(word) {
  const result = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    if (!result[letter]) {
      result[letter] = [];
    }

    result[letter].push(i);
  }

  return result;
}
//map letter in strings