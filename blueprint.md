
# Lotto Number Generator

## Overview

This project is a simple web application that generates random lottery numbers. The application is built using HTML, CSS, and JavaScript, following modern web development best practices.

## Implemented Features

*   Generate 6 unique random numbers between 1 and 45.
*   Display the generated numbers in a clear and visually appealing way.
*   A "Generate Numbers" button to trigger the number generation.
*   A responsive design that works on both desktop and mobile devices.
*   **Initial Design:** A simple design with a blue color scheme and fade-in animation for the numbers.

## Current Plan: Refactor to Web Component

I will refactor the application to use a Web Component, following modern web standards for better encapsulation and reusability.

1.  **Refactor to Web Component (`main.js`):**
    *   Create a `<lotto-generator>` custom element.
    *   This component will encapsulate its own HTML structure, styles (via Shadow DOM), and logic.
    *   The styles previously in `style.css` for the generator will be moved inside the component's Shadow DOM.
2.  **Update `index.html`:**
    *   Simplify the `<body>` by replacing the manual HTML structure with the `<lotto-generator></lotto-generator>` element.
3.  **Clean up `style.css`:**
    *   Remove the styles that are now handled by the Web Component, leaving only global styles.
