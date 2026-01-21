# XSS Attack Lab – Scripting Vulnerability Lab

## Introduction
This project demonstrates Cross-Site Scripting (XSS) vulnerabilities caused by improper input handling in web applications.This project is developed as part of a cybersecurity minor project to understand real-world web security issues.


## Objective
To build a vulnerable web application that helps understand how XSS attacks occur and how they can be prevented.

## Types of XSS Attacks
- Stored XSS
- Reflected XSS
- DOM-Based XSS
XSS vulnerabilities occur when user input is not properly validated or encoded before being rendered in the browser.
Attackers exploit this to execute malicious JavaScript in a victim’s session.

## Tools Used
- Node.js
- Express.js
- JavaScript
- HTML
- CSS
- EJS
## Stored XSS Implementation

This application contains a deliberately vulnerable comment section where user input is stored on the server and rendered without sanitization.

By using unescaped rendering (`<%- %>` in EJS), malicious JavaScript entered by an attacker is executed whenever the page is loaded. This demonstrates a Stored Cross-Site Scripting (XSS) vulnerability.

Example payload:
<script>alert("XSS Attack Successful")</script>

## Project Status
Under active development.
