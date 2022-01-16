function search(operator, text, word) {
  let all = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] == word[0]) {
      let all1 = "";
      for (let n in word) {
        all1 += text[Number(i) + Number(n)];
      }
      if (all1 == word) {
        if (operator == "g") {
          all.push([i, i + word.length]);
        } else if (operator == "l") {
          return [i, i + word.length];
        }
      }
    }
  }
  if (all == false) {
    return false;
  } else {
    return all;
  }
}
module.exports = search;
