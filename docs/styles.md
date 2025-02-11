# Styles Documentation

This document provides an overview of the CSS styles used in the Alchemix Self-Repaying Loans dApp, detailing their roles and structure.

## Table of Contents
- [General Reset](#general-reset)
- [App Container](#app-container)
- [Header and Logo](#header-and-logo)
- [Content Layout](#content-layout)

## General Reset

The general reset styles are applied to ensure a consistent look across different browsers:

```css
body {
  margin: 0;
  font-family: 'Neue Kabel', Josefin Sans, sans-serif;
  background: linear-gradient(171.08deg, #010101 -11.16%, #141921 6.1%, #0a0d11 49.05%, #000000 93.22%) no-repeat fixed;
  color: rgba(255, 255, 255, 0.9);
  min-height: 100vh;
}
```

## App Container

The app container styles define the main layout of the application:

```css
.app-container {
  max-width: 600px;
  margin: 0 auto;
  min-height: 100vh;
  padding-top: 77px;
}
```

## Header and Logo

The header styles define the fixed header at the top of the application:

```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 77px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background-color: rgb(14, 17, 22);
  z-index: 1000;
}
```

### Logo Section

The logo section styles define the appearance of the logo:

```css
.logo {
  height: 50px;
  width: auto;
  object-fit: contain;
}
```

## Content Layout

The content layout styles define the main content area of the application:

```css
.content-wrapper {
  padding: 20px;
}
```

## Responsive Design

Media queries are used to ensure the application is responsive:

```css
@media (max-width: 768px) {
  .app-container {
    flex-direction: column;
    padding-top: 77px;
  }
}
```

## Conclusion

This document outlines the main styles used in the Alchemix dApp. It is essential to maintain a consistent design and ensure a good user experience.
