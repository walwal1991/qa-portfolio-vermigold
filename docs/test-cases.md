\# Test Cases: Vermigold Store



Result column: write Pass or Fail after you test each case.



| ID | Feature | Steps | Expected result | Priority | Result |

|---|---|---|---|---|---|

| TC-001 | Sign up | Enter valid name, email, phone number, password, then submit | Account is created | High | |

| TC-002 | Sign up | Use an email that already exists | Clear error, no duplicate account | High | |

| TC-003 | Sign up | Leave required fields empty, then submit | Validation messages are shown | Medium | |

| TC-004 | Sign in | Enter correct email and password | Logged in, account page opens | High | |

| TC-005 | Sign in | Enter a wrong password | Error shown, not logged in | High | |

| TC-006 | Sign out | Log out, then press the browser Back button | Account pages are not visible | Medium | |

| TC-007 | Browse products | Open the products page | Products load with image, name, price | High | |

| TC-008 | Product details | Open one product | Details match the list (name, price) | Medium | |

| TC-009 | Cart | Add a product to the cart | Cart count and items update | High | |

| TC-010 | Cart | Set quantity to 0, then to -1 | Rejected or handled, never accepted | High | |

| TC-011 | Cart | Add an item, then refresh the page | Item is still in the cart | Medium | |

| TC-012 | Checkout | Try to check out with an empty cart | Blocked with a clear message | Medium | |

| TC-013 | Checkout | Leave delivery info empty, then submit | Validation messages are shown | High | |

| TC-014 | Checkout | Complete an order (test payment only) | Confirmation shown, order is created | Critical | |

| TC-015 | Order tracking | Open tracking for your new order | Correct order and status shown | High | |

| TC-016 | Sign up (phone) | Enter letters in the phone field, e.g. abc, then submit | Rejected with a clear message | High | |

| TC-017 | Sign up (phone) | Enter a number that is too short, e.g. 0555, then submit | Rejected with a clear message | High | |

| TC-018 | Sign up (phone) | Enter a valid Algerian number, e.g. 0555123456, then try +213555123456 | Both accepted, or the site clearly says which format to use | Medium | |



