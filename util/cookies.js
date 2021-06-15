import cookies from 'js-cookie';

export function getBasketCookieValue() {
  const cookieValue = cookies.getJSON('addToBasket');
  return typeof cookieValue === 'object' ? cookieValue : {};
}

export function toggleAddedProductByProductId(productId, quantity) {
  const previousCookieValue = getBasketCookieValue();
  // unpack the object into array
  const unpacked = Object.entries(previousCookieValue);

  let newCookieValue;
  if (productId in previousCookieValue) {
    previousCookieValue[productId] += quantity;
    newCookieValue = { ...previousCookieValue };
  } else {
    // TODO: how to correctly set the int product id as key in this object via state
    unpacked.push([productId, quantity]);
    // pack as object
    const newObject = Object.fromEntries(unpacked);
    newCookieValue = newObject;
  }

  cookies.set('addToBasket', newCookieValue);
  return newCookieValue;
}

export function updateProductQuantityInCookie(productId, quantity) {
  const cookieValue = getBasketCookieValue();
  cookieValue[productId] = quantity;
  cookies.set('addToBasket', cookieValue);
}

export function parseCookieValue(value) {
  try {
    return JSON.parse(value);
  } catch (err) {
    return undefined;
  }
}
