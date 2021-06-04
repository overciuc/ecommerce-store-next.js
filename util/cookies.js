import cookies from 'js-cookie';

export function getBasketCookieValue() {
  const cookieValue = cookies.getJSON('addToBasket');
  return Array.isArray(cookieValue) ? cookieValue : [];
}

export function toggleAddedProductByProductId(productId) {
  const previousCookieValue = getBasketCookieValue();

  let newCookieValue;
  if (previousCookieValue.includes(productId)) {
    newCookieValue = previousCookieValue.filter((pid) => pid !== productId);
  } else {
    newCookieValue = [...previousCookieValue, productId];
  }

  cookies.set('addToBasket', newCookieValue);
  return newCookieValue;
}
