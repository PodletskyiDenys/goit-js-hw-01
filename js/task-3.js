function getElementWidth(content, padding, border) {
  const toNumber = (value) => parseFloat(value);

  const contentWidth = toNumber(content);
  const paddingWidth = toNumber(padding);
  const borderWidth = toNumber(border);

  let N = contentWidth + 2 * paddingWidth + 2 * borderWidth;
  return `Повна ширина = ${N}`;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
