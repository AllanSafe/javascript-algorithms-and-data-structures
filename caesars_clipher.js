function rot13(string) {
    let newText = "";
    let num;
    for (let i = 0; i < string.length; i++) {
      num = string.charCodeAt([i]);
      if (num >= 65 && num <= 90) {
        num = ((num - 90 - 13) % 26) + 90;
        newText = newText.concat(String.fromCharCode(num));
      }
      else if (num >= 97 && num <= 122) {
        num = ((num - 122 - 13) % 26) + 122;
        newText = newText.concat(String.fromCharCode(num));
      }
      else {
        newText = newText.concat(String.fromCharCode(num));
      }
    } 
    console.log(newText)
    return newText;
  }
  
  rot13("SERR PBQR PNZC");