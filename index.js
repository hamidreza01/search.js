function search(operator, text, word) {
  try {
    let all = [];
    let alln = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === word[0]) {
        let all1 = "";
        for (let n in word) {
          all1 += text[Number(i) + Number(n)];
        }
        if (all1 === word) {
          if (operator == "g") {
            all.push([i, i + word.length]);
          } else if (operator == "n") {
            alln++;
          } else if (operator == "l") {
            return [i, i + word.length];
          } else {
            console.log(
              "search-dot-js : The imported operator is inaudible, you can only use l, g "
            );
          }
        }
      }
    }
    if (operator == "n") {
      return alln;
    } else if (operator == "g") {
      if (all == false) {
        return false;
      } else {
        return all;
      }
    }
  } catch (err) {
    console.log(
      `search-dot-js : oh, it's like there's a problem, please read https://www.npmjs.com/package/search-dot-js‍`
    );
  }
}

module.exports = search;
