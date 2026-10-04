# Test Execution Log

- **Tester:** oualid anifeg
- **Site:** https://vermigolddz.com
- **Browser:** Microsoft Edge (154.0.4258.48)
- **Device:** Windows
- **Date started:** 02-10-2026

## Results

| ID | Result | Notes | Evidence | Bug |
|---|---|---|---|---|
| TC-001 | Pass | Logged in directly after sign up; signed in again OK | [form](evidence/TC-001-1-form.png), [result](evidence/TC-001-2-success.png) | |
| TC-002 |Pass  | Duplicate email rejected with error  |[form](evidence/TC-002-check-same-email.png),[result](evidence/TC-002-pass.png) | |
| TC-003 |Pass |Empty fields rejected with errors |[form](evidence/TC-003-leave-req-fields-empty.png),[result](evidence/TC-003-pass.png) | |
| TC-004 |Pass | correct email and password is logged in  |[form](evidence/TC-004-loggedin-coorect-email-and-pass.png),[result](evidence/TC-004-pass.png) | |
| TC-005 |Pass | wrong password is rejected |[form](evidence/TC-005-wrong-password.png),[result](evidence/TC-005-pass.png) | |
| TC-006 | pass | After signing out, pressing the browser Back button does not display any account pages. The user remains logged out. | [login](evidence/TC-006-log-in-account.png), [signout](evidence/TC-006-sign-out.png),[press-back](evidence/TC-006-customer-account.png) | |
| TC-007 | Pass | The products page loads successfully, and each product displays an image, name, and price. | [products](evidence/TC-007-products-page.png) | |
| TC-008 | Pass | The selected product details match the product information shown in the product list, including the name and price. | [product-list](evidence/TC-008-product-list.png), [product-details](evidence/TC-008-product-details.png) | |
| TC-009 | Pass | The product was successfully added to the cart. The cart count increased and the added item appears in the cart. | [product](evidence/TC-009-product.png), [cart](evidence/TC-009-cart.png) | |
| TC-010 | Pass | Setting the product quantity to 0 and then to -1 is rejected/handled correctly, and invalid quantities are not accepted. | [quantity-0](evidence/TC-010-quantity-0.png), [quantity-negative](evidence/TC-010-quantity-negative.png) | |
| TC-011 | Pass | After adding an item to the cart and refreshing the page, the item remains in the cart. | [cart-before-refresh](evidence/TC-011-cart-before-refresh.png), [cart-after-refresh](evidence/TC-011-cart-after-refresh.png) | |
| TC-012 | Pass | When attempting to check out with an empty cart, checkout is blocked and a clear message is displayed. | [empty-cart](evidence/TC-012-empty-cart.png), [checkout-blocked](evidence/TC-012-checkout-blocked.png) | |
| TC-013 | Pass | Submitting the checkout form with delivery information left empty displays the appropriate validation messages. | [empty-delivery-info](evidence/TC-013-empty-delivery-info.png), [validation-message](evidence/TC-013-validation-message.png) | |
| TC-014 | Pass | The test order was completed successfully using test payment, and an order confirmation was displayed. | [checkout](evidence/TC-014-checkout.png), [order-confirmation](evidence/TC-014-order-confirmation.png) | |
| TC-015 | Pass | The new order appears in order tracking with the correct order information and status. | [order](evidence/TC-015-order.png), [tracking](evidence/TC-015-order-tracking.png) | |
| TC-016 | Pass | Entering letters such as "abc" in the phone field is rejected and a clear validation message is displayed. | [invalid-phone-letters](evidence/TC-016-invalid-phone-letters.png), [validation-message](evidence/TC-016-validation-message.png) | |
| TC-017 | Pass | Entering a phone number that is too short, such as "0555", is rejected and a clear validation message is displayed. | [short-phone](evidence/TC-017-short-phone.png), [validation-message](evidence/TC-017-validation-message.png) | |
| TC-018 | Pass | Both valid Algerian phone number formats were handled correctly, and the accepted format is clearly supported by the application. | [local-format](evidence/TC-018-local-format.png), [international-format](evidence/TC-018-international-format.png) | |

## Summary
- Tests run:
- Passed:
- Failed:
- Bugs found: