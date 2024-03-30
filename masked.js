function maskify(cc) {
  stringArray = cc.split("");
  if (stringArray === "") {
    return "";
  } else if (stringArray.length > 4) {
    for (let i = 0; i < stringArray.length - 4; i++) {
      stringArray[i] = "#";
    }
  }
  maskedString = stringArray.join("");
  return maskedString;
}

console.log(maskify("Javascript"));
console.log(maskify("four"));
console.log(maskify("1"));
console.log(maskify(""));
