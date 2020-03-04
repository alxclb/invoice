export function checkItemNumberField(value) {
  if (typeof +value === "number" && isFinite(value)) {
    // console.log(true)
    return true;
  } else {
    return false;
  }
}
export function calculatePrice(a, b, c) {
  let tax = itemTax(c);
  if (a >= 0 && b >= 0) {
    let price = (a * b * tax).toFixed(2);
    return price;
  } else return "";
}
function itemTax(value) {
  if (value > 0 && value < 101) {
    let taxValue = +value / 100 + 1.0;
    return taxValue;
  } else {
    let taxValue = 1;
    return taxValue;
  }
}
export function findIndex(ev, data) {
  let i = ev.target.parentElement.id;
  let element = x => x.id === i;
  return data.findIndex(element);
}
export function floatPrice(x) {
  return Number.parseFloat(x).toFixed(2);
}
export function isColor(strColor) {
  const s = new Option().style;
  s.color = strColor;
  return s.color !== "";
}
