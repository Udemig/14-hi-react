# PRD.md — Drop Cream

## Product Overview

**Drop Cream** is a single-page frontend web application where users can browse ice cream products, select an order type, and add items to a shopping cart. The application focuses on a clean user experience, clear feedback states, and predictable cart behavior.

---

## Goals & Objectives

- Display a list of ice cream products fetched from a mock API.
- Allow users to select an order type and add products to a cart.
- Provide real-time cart feedback and notifications.
- Ensure a simple, intuitive, and error-resilient single-page flow.

---

## Scope

**In Scope**

- Single-page application layout
- Product listing
- Cart management (add, update, remove)
- Notifications for user actions
- Loading and error handling

**Out of Scope**

- Authentication
- Payments
- Backend persistence beyond mock API
- Multi-page navigation

---

## Page Structure

The application consists of **one page** with the following sections, rendered in order:

1. **Header**
2. **Hero Section**
3. **Product List**

---

## Header

### Features

- Displays the application name: **Drop Cream**
- Includes a **Cart Button**
  - Shows the total number of items currently in the cart
  - Clicking the button opens the cart as a **right-side drawer**

---

## Hero Section

### Purpose

- Acts as a visual introduction to the brand
- Highlights the ice cream theme and sets context for the user

---

## Product List

### Data Source

- Products are fetched from **JSON Server** via an HTTP request.

### States

- **Loading State**
  - Display a loading indicator while products are being fetched
- **Error State**
  - Display a clear error message if the request fails
- **Success State**
  - Render product cards once data is successfully loaded

---

## Product Card

Each product card represents a single ice cream item.

### Elements

- Product name
- Product image (if available)
- Order type selector
- “Add to Cart” button

### Order Type Selection

- Available options:
  - **Cone**
  - **Cup**
- Only **one option can be selected at a time**
- **Default selection:** Cone

---

## Add to Cart Behavior

- Clicking **Add to Cart**:
  - Adds the product to the cart via **Redux**
  - Default quantity is set to **1**
- Cart logic:
  - Same product + same order type → quantity increases
  - Same product + different order type → treated as a **separate cart item**
- A **success notification** is shown when a product is added to the cart

---

## Cart (Drawer)

### Behavior

- Opens from the **right side** when the cart button in the header is clicked
- Displays products retrieved from **Redux state**

### Cart Item Display

Each cart item includes:

- Product name
- Selected order type (Cone or Cup)
- Quantity
- Controls:
  - Increase quantity
  - Decrease quantity
  - Remove item from cart

---

## Cart Actions

### Quantity Management

- Increasing quantity updates Redux state
- Decreasing quantity:
  - If quantity reaches zero, the item is removed from the cart

### Complete Order

- A **“Complete Order”** button is displayed at the bottom of the cart drawer
- On click:
  - Cart state is completely cleared
  - A **“Order Confirmed”** notification is displayed

---

## Notifications

Notifications are shown using a toast system for:

- Product added to cart
- Order successfully completed
- Error scenarios (if applicable)

---

## State Management

- **Redux Toolkit** is used for global state management
- Cart state includes:
  - Product ID
  - Product name
  - Order type
  - Quantity

---

## Non-Functional Requirements

- Single-page, client-side rendered
- Responsive layout
- Accessible interactions (keyboard support, focus handling)
- Clear user feedback for all major actions
- Predictable and consistent cart behavior

---

## Success Criteria

- Users can add, update, and remove items without confusion
- Cart state behaves correctly across different order types
- All loading, error, and success states are clearly communicated
- The application works smoothly without crashes or inconsistent UI states
