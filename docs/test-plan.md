\# Test Plan: Vermigold Store (vermigolddz.com)



\## 1. Objective

Check that customers can browse, buy, and track orders on the website

without errors, on desktop and mobile.



\## 2. Scope



\*\*In scope\*\*

\- Browse products

\- Cart and purchase

\- Delivery step at checkout

\- Customer account: sign up, sign in, sign out

\- Order tracking

\- Monthly subscriptions

\- Bootcamps (soil treatment training)

\- Consultation

\- Sale of waste

\- User guide page



\*\*Out of scope\*\*

\- Real-money payments (test mode only)

\- Load testing and security penetration testing



\## 3. Test types

Smoke, functional, regression, exploratory, API, responsive (mobile),

accessibility, performance.



\## 4. Environments

\- Browsers: Chrome and Firefox

\- Screens: desktop (1440px wide) and mobile (390px wide)

\- Site: https://vermigolddz.com with payment test keys only



\## 5. Main risks

1\. Payment and order status do not match (paid but order not confirmed).

2\. Invalid input accepted (negative quantity, empty address, wrong phone number).

3\. Page layout breaks on mobile screens.

4\. Cart is lost when the page is refreshed.

5\. Users can see other users' orders.

6\. The site was built with an AI tool, so server-side validation and

&#x20;  error handling need extra checks.



\## 6. Entry and exit criteria

\- Start testing when: the site is online and test payment mode is on.

\- Finish testing when: all critical tests pass, no Critical or High bugs

&#x20; are open, and every remaining bug is documented.



\## 7. Tools

Playwright (browser automation), Postman (API), GitHub Actions (CI),

Lighthouse (performance), axe (accessibility), GitHub (bug reports).



\## 8. Deliverables

Test cases, bug reports, automated tests, final test report.

