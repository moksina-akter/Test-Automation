# Test-Automation

# Playwright API Automation Assignment (4BEATS)

This repository contains automated API test cases developed for the **TEST Automation Engineer / Intern** position recruitment process at **4BEATS**. The project demonstrates hands-on skills in API testing, response validation, and clean code structure using **Playwright**.

---

## 🛠️ Tooling & API Details

- **Automation Tool:** [Playwright](https://playwright.dev/)
- **Target API:** [JSONPlaceholder](https://jsonplaceholder.typicode.com)
- **Programming Language:** JavaScript
- **Reporting:** Playwright HTML Reporter

---

## Setup & Installation

Follow these steps to set up and run the project locally on your machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/moksina-akter/Test-Automation
   cd Test-Automation
   npm install
   npx playwright install
   npx playwright test
   npx playwright test --ui
   npx playwright test --headed
   npx playwright show-report
   ```

## Testing Approach & Strategy

Functional Validation: Verified GET and POST methods to ensure the API behaves correctly.

Status Code Verification: Ensured successful requests return 200 OK and creation requests return 201 Created.

Payload Assertion: Validated JSON responses by checking properties like id, userId, title, and body.

Negative Testing: Included tests for non-existing resources to verify 404 Not Found handling.

Strategic Note: Initially, ReqRes.in was explored, but due to Cloudflare-related bot protection (403 errors), JSONPlaceholder was used for this final submission to ensure stable execution for the reviewers.
Submitted By: Moksina Akter

Position: TEST Automation Engineer / Intern

Company: 4BEATS
