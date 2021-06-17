/**
 * @jest-environment jsdom
 */

import cookie from 'cookie';
import cookies from 'js-cookie';
import {
  toggleAddedProductByProductId,
  updateProductQuantityInCookie,
} from '../cookies';

// 1. Jest test for adding info to cookie
test('toggleAddedProductByProductId adds product to cookie', () => {
  const expectedValue = { 1: 10 };
  toggleAddedProductByProductId(1, 10);
  const cookieValue = cookie.parse(window.document.cookie);
  const shoppingBasket = JSON.parse(cookieValue.shoppingBasket);
  expect(shoppingBasket).toEqual(expectedValue);
});

// 2. Jest Unit test for updating the amount in cookie
test('updateProductQuantityInCookie changes quantity in cookie', () => {
  // put data into cookie
  const initialValue = { 1: 10 };
  cookies.set('shoppingBasket', initialValue);
  // change the quantity
  updateProductQuantityInCookie(1, 11);
  const cookieValue = cookie.parse(window.document.cookie);
  const shoppingBasket = JSON.parse(cookieValue.shoppingBasket);
  expect(shoppingBasket[1]).toEqual(11);
});
