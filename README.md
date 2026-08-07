<div align="center">
  
# Harem Accountant Dashboard

**A modern, comprehensive financial dashboard and management system designed for accounting professionals and salon owners. It features robust tools for salary processing, tax compliance tracking, multi-salon revenue management, budgeting, and secure document storage.**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

---

## Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Security](#-security)
- [License](#-license)
- [Author & Maintainer](#-author--maintainer)

---

## Overview

The **Harem Accountant Dashboard** is a powerful platform tailored for accountants, owners, and administrators. It streamlines the management of salaries, taxes, documents, budgeting, and multiple salon locations, all within a sleek, modern, and highly responsive user interface.

---

## Key Features

- **Comprehensive Budgeting & Financial Overviews**: Track income, expenses, and payments with interactive charts and automated tracking.
- **Salary Management**: Review, manage, and extract salary information from uploaded documents with real-time approval pipelines.
- **Tax Uploads & History**: Securely upload, review, and maintain historical tax records.
- **Document Management**: Centralized repository for contracts, employee notices, and sensitive owner documents.
- **Multi-Salon Management**: Manage multiple salon locations, review revenue shares, handle payouts, and invite new members to the platform.
- **Real-time Notifications**: Keep track of pending approvals, deadlines, and critical alerts.

---

## Architecture

The application is built using a modern decoupled architecture:

- **Frontend**: Next.js App Router for server-side rendering (SSR), static site generation (SSG), and optimized routing.
- **State Management**: React Context API for global state (e.g., Salon Context) combined with local component state.
- **Styling**: Tailwind CSS v4 utilizing utility classes for rapid, responsive design.
- **Components**: A modular approach using Shadcn UI and custom components to ensure reusability and consistent design patterns.

---

## Tech Stack

| Technology                                        | Description                         |
| ------------------------------------------------- | ----------------------------------- |
| **[Next.js](https://nextjs.org)**                 | React framework (App Router)        |
| **[React 19](https://react.dev)**                 | UI Library                          |
| **[Tailwind CSS](https://tailwindcss.com)**       | Utility-first CSS framework (v4)    |
| **[Shadcn UI](https://ui.shadcn.com/)**           | Reusable accessible components      |
| **[Lucide React](https://lucide.dev)**            | Beautiful & consistent icons        |
| **[Chart.js](https://www.chartjs.org)**           | Interactive data visualization      |
| **[TypeScript](https://www.typescriptlang.org/)** | Strongly typed programming language |

---

## Project Structure

```text
harem-accountant-dashboard-new/
├── app/                  # Next.js App Router & Pages
│   ├── budgeting/        # Budgeting module
│   │   ├── expense/
│   │   ├── income/
│   │   ├── overview/
│   │   ├── payments/
│   │   └── receipts/
│   ├── documents/        # Document management
│   ├── salaries/         # Salary processing & history
│   │   ├── history/
│   │   ├── overview/
│   │   ├── pending/
│   │   └── upload/
│   ├── salons/           # Multi-salon management
│   │   ├── my-salons/
│   │   ├── pending-invitations/
│   │   └── request-access/
│   └── taxes/            # Tax records & uploads
│       ├── history/
│       ├── new-upload/
│       ├── overview/
│       └── pending/
├── components/           # Reusable UI components
│   ├── modal/            # Popups and dialogs
│   ├── notifications/    # Alert components
│   └── ...               # Feature-specific components
├── context/              # Global React context providers
├── public/               # Static assets (images, icons)
├── package.json          # Project dependencies & scripts
├── postcss.config.mjs    # PostCSS configuration
└── tsconfig.json         # TypeScript configuration
```

---

## Security

- **Authentication & Authorization**: Role-based access control ensuring users only see data corresponding to their assigned salons and permissions.
- **Data Protection**: Strict client-side and server-side validation to prevent unauthorized data manipulation.
- **Environment Variables**: Sensitive keys and API routes are protected securely within `.env` files and never exposed to the client bundle.

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Author & Maintainer

**Taijul Aman**

- GitHub: [@TAIJULAMAN](https://github.com/TAIJULAMAN)

<div align="center">
  Made with ❤️
</div>
