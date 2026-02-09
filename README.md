# XSS Attack Lab – Cybersecurity Mini Project

## 📌 Project Overview
**XSS Attack Lab** is a beginner-friendly web application built to demonstrate how **Cross-Site Scripting (XSS)** vulnerabilities work and how they can be prevented.

This project shows **three common types of XSS attacks** and also includes a **Secure Version** to show how developers can fix these issues.

The goal is **educational only** — to understand vulnerabilities, not to misuse them.

---

## 🧠 What is XSS?

**XSS (Cross-Site Scripting)** is a security vulnerability where an attacker injects **malicious JavaScript code** into a website.  
When another user visits the page, the script runs in their browser.

This can lead to:
- Stealing cookies
- Session hijacking
- Redirecting users
- Defacing websites
- Data theft

---

## ⚙️ Technologies Used
- **Node.js**
- **Express.js**
- **EJS Templates**
- **HTML**
- **CSS**
- **JavaScript**

---

## 🔍 Types of XSS Demonstrated

### 1. Stored XSS
**What happens?**
- User enters a comment.
- That comment is saved on the server.
- When the page reloads, the comment is displayed.
- If the comment contains a script, it runs every time the page loads.

**Example Payload**
``html
<script>alert('Stored XSS')</script>

**Real-World Impact**

- Any visitor who opens the page triggers the attack.
- Dangerous because it affects multiple users.
- The malicious script stays stored on the server and runs every time the page loads.

---

 ### 2. Reflected XSS
**What Happens?**
- User enters input (for example, a search query).
- The website immediately shows that input in the response.
- If the input contains a script, it runs instantly.
- The data is **not stored** on the server.

### Example Payload
``html
<script>alert('Reflected XSS')</script>

**Real-World Impact**

- Usually sent through malicious links.
- Happens only when the user clicks the crafted link.
- Does not affect future visitors.

### 3. DOM-Based XSS
**What Happens?**

- Vulnerability exists in client-side JavaScript.
- The page changes its content using user input.
- No server involvement.
- Script runs directly in the browser.

### Example Payload
<img src=x onerror=alert('DOM XSS')>

**Real-World Impact**

- Harder to detect.
- Happens entirely in the browser.
- Does not require server storage.

### Secure Version

- The secure page shows how to prevent XSS attacks
- Protection Techniques Used
- Escaping user input
- Output encoding
- Avoiding direct HTML injection
- Safe rendering

**Result:**
Scripts are displayed as plain text, not executed.

### How to Run the Project

- Step 1 – Install Dependencies
npm install

- Step 2 – Start Server
node server.js

- Step 3 – Open Browser
http://localhost:3000

### Project Structure
project-folder/

├── public/

│   ├── style.css

│   └── dom.js
│
├── views/

│   ├── index.ejs

│   ├── stored.ejs

│   ├── reflected.ejs

│   ├── dom.ejs

│   └── secure.ejs
│
├── server.js

├── package.json

└── README.md
