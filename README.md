# User Dashboard Application

This is a dynamic user dashboard built with Angular. It allows you to manage users by displaying them in a table, filtering the list, viewing detailed information, and adding new users via a reactive form. Additionally, it features a simple counter component that demonstrates state management using an Angular service and RxJS.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Building for Production](#building-for-production)


## Features

- **Dynamic User Dashboard:** View a list of users with columns for Name, Email, Phone, and Actions.
- **Search & Filter:** Filter users by name or email using a custom pipe.
- **User Details:** View detailed information (address, company, etc.) for a selected user.
- **Add User:** Use a reactive form with validations to add a new user.
- **State Management:** A counter component with Increment, Decrement, and Reset buttons demonstrating real-time state management.
- **Navigation:** A responsive navbar for easy navigation between different components.
- **Styling:** Utilizes Bootstrap for a clean, responsive UI.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v12 or later)
- [Angular CLI](https://angular.io/cli) (v14 or later)

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/muiruri7/user-dashboard.git
   cd user-dashboard

2. **Install Dependencies:**

    npm install

3. **Running the Application:**

    '''ng serve'''
    Then, open your browser and navigate to http://localhost:4200 to view the application.