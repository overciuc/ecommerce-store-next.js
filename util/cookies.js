import cookies from 'js-cookie';

export function getBasketCookieValue() {
  const cookieValue = cookies.getJSON('shoppingBasket');
  return typeof cookieValue === 'object' ? cookieValue : {};
}

export function toggleAddedProductByProductId(productId, quantity) {
  const previousCookieValue = getBasketCookieValue();
  const unpacked = Object.entries(previousCookieValue);

  let newCookieValue;
  if (productId in previousCookieValue) {
    previousCookieValue[productId] += quantity;
    newCookieValue = { ...previousCookieValue };
  } else {
    unpacked.push([productId, quantity]);
    const newObject = Object.fromEntries(unpacked);
    newCookieValue = newObject;
  }

  cookies.set('shoppingBasket', newCookieValue);
  return newCookieValue;
}

export function updateProductQuantityInCookie(productId, quantity) {
  const cookieValue = getBasketCookieValue();
  cookieValue[productId] = quantity;
  cookies.set('shoppingBasket', cookieValue);
}

export function parseCookieValue(value) {
  try {
    return JSON.parse(value);
  } catch (err) {
    return undefined;
  }
}

export function removeProductFromShoppingCart(productId) {
  const cookieValue = getBasketCookieValue();
  delete cookieValue[productId];
  console.log('you are not working');
  cookies.set('shoppingBasket', cookieValue);
  return cookieValue;
}

export function showInBasketNavMenu(productId) {
  const newCookieValue = [...getBasketCookieValue()];

  const basketCookieValue = newCookieValue.find(
    (product) => product.id === productId,
  );

  if (basketCookieValue) {
    basketCookieValue.shoppingBasket = basketCookieValue.shoppingBasket + 1;
  } else {
    newCookieValue.push({
      id: productId,
      shoppingBasket: 0,
    });
  }

  cookies.set('shoppingBasket', newCookieValue);
}
