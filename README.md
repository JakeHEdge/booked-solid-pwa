# Booked Solid — Progressive Web App

## Overview

Booked Solid is a full-stack Progressive Web Application (PWA) bookstore built using Firebase for backend services and data storage.  
The application simulates a modern e-commerce environment with real-time database integration, shopping cart functionality, and offline capability via service workers.

The goal of this project was to design and implement a structured client-driven web application with cloud-based backend infrastructure.

---

## Tech Stack

- HTML
- CSS
- JavaScript
- Firebase (Authentication & Firestore)
- Service Workers (PWA support)

---

## Key Features

- Browse and search books
- Persistent shopping cart functionality
- Real-time database integration using Firestore
- CRUD operations for book and cart data
- Firebase-based authentication (if implemented)
- Offline capability via service worker
- Installable as a Progressive Web App

---

## Architecture

- Frontend-driven architecture with Firebase backend services
- Firestore used for real-time document-based data storage
- Client-side authentication using Firebase Auth
- Service worker registered for offline caching
- Modular JavaScript structure for maintainability

---

## Challenges & Solutions

- **Managing cart persistence across sessions**  
  Implemented Firestore-based storage to ensure data consistency.

- **Structuring NoSQL database collections**  
  Designed document-based schema for efficient retrieval and updates.

- **Offline support implementation**  
  Configured service worker caching strategy to enable installable PWA behaviour.

---

## What I Learned

- Working with cloud-hosted backend services
- Structuring NoSQL document-based databases
- Implementing authentication and real-time data updates
- Building Progressive Web Applications with offline support

---

## Future Improvements

- Admin dashboard for inventory management
- Enhanced caching strategy
- Payment integration
- Performance optimisation
