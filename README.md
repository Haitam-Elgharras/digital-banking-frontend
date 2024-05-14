# Digital Banking Frontend

## Overview

Digital Banking Frontend is an Angular application that serves as the user interface for the Digital Banking system. This application allows users to manage bank accounts, view customer details, perform account operations, and much more. It provides a seamless and interactive experience for both bank employees and customers.

## Functionalities

### Dashboard

- **Overview**: Displays a summary of the user's bank accounts and recent transactions for quick access and monitoring.

### Customer Management

- **View Customers**: Lists all customers with detailed information such as name, email, and ID. Allows for the search, edit, and deletion of customers.
- **Add Customer**: Provides a form for creating a new customer with necessary details.
- **Edit Customer**: Allows updating the information of an existing customer through a form.
- **Delete Customer**: Enables the deletion of a customer from the system.
- **Search Customers**: Offers functionality to search for customers using keywords.

### Bank Account Management

- **View Accounts**: Lists all bank accounts, showing details like balance, account type, and status.
- **Add Current Account**: Provides a form to create a new current account with an overdraft limit.
- **Add Saving Account**: Provides a form to create a new saving account with an interest rate.
- **View Account Details**: Offers a detailed view of a specific bank account, including transaction history.
- **Delete Account**: Allows for the removal of a bank account from the system.

### Account Operations

- **View Transactions**: Lists all transactions associated with a specific account.
- **Debit Account**: Provides a form to perform a debit operation on an account.
- **Credit Account**: Provides a form to perform a credit operation on an account.
- **Transfer Funds**: Facilitates the transfer of funds from one account to another.

## Installation

To set up and run the project locally, follow these steps:

### Prerequisites

- Node.js and npm installed
- Angular CLI installed

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/digital-banking-frontend.git
   cd digital-banking-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   ng serve
   ```
   Navigate to `http://localhost:4200/` in your web browser to see the application in action.

## Components

### AccountsComponent

Responsible for managing and displaying bank accounts and their related operations.

#### Methods

- **ngOnInit**: Initializes the form groups for searching accounts and performing operations.
- **handleSearchAccount**: Searches for an account based on the account ID.
- **goToPage**: Handles pagination for account operations.
- **handleOperation**: Performs debit, credit, or transfer operations on an account.

#### HTML Template

- Displays a form for searching accounts.
- Lists account details and operations.
- Provides forms for performing debit, credit, and transfer operations.

```html
<div class="container mt-2">
    <!-- Template content here -->
</div>
```

### CustomerComponent

Handles the display, search, creation, update, and deletion of customers.

#### Methods

- **ngOnInit**: Initializes the form group for searching customers.
- **handleSearchCustomers**: Searches for customers based on a keyword.
- **handleEditCustomer**: Initiates the process to edit customer details.
- **handleDeleteCustomer**: Deletes a customer from the system.

#### HTML Template

- Displays a form for searching customers.
- Lists customer details.
- Provides buttons for editing and deleting customers.

```html
<div class="container mt-2">
    <!-- Template content here -->
</div>
```

## Services

### AccountService

Handles API calls related to bank accounts.

- **getAccount**: Fetches account details by ID.
- **operation**: Performs debit, credit, or transfer operations.

### CustomerService

Handles API calls related to customers.

- **getCustomers**: Fetches a list of customers.
- **saveCustomer**: Creates a new customer.
- **updateCustomer**: Updates customer details.
- **deleteCustomer**: Deletes a customer.

### AuthService

Handles authentication and authorization tasks.

## Conclusion

This Digital Banking Frontend application provides a comprehensive set of functionalities for managing bank accounts and customers efficiently. By following the installation steps, you can run the application locally and explore its features. For further customization and development, the modular structure of the components and services ensures ease of maintenance and scalability.
