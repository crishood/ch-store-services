Project structure:
We are developing an eCommerce platform to sell digital music products, including:

Sample packs
Drum kits
MIDI packs
Plugins
Max for Live devices
Ableton presets
Ableton templates

## Use cases

1. User Registration and Login
   Primary Actor: Customer
   Use Case:

A customer creates an account by providing personal details such as name, email, and password.
The system sends a verification email.
The customer logs in using the registered email and password.
If the login fails, an error message is displayed. 2. Browsing Products
Primary Actor: Customer
Use Case:

The customer navigates through categories such as Sample Packs, Drum Kits, MIDI Packs, Plugins, Max for Live Devices, Ableton Presets, and Templates.
The customer can filter products by category, price range, and popularity.
Each product has a detailed page with descriptions, previews (audio or video), and pricing.
The customer can view related products based on their selection. 3. Product Search
Primary Actor: Customer
Use Case:

The customer uses the search bar to find specific products by name, category, or keyword.
The system displays relevant search results with filters for refinement.
If no results are found, the system displays an appropriate message. 4. Add Product to Cart
Primary Actor: Customer
Use Case:

The customer adds a product to their shopping cart.
The system confirms the product addition and updates the cart icon with the total number of items.
The customer can continue shopping or proceed to checkout. 5. View Cart and Modify Contents
Primary Actor: Customer
Use Case:

The customer views the shopping cart, which lists added products, prices, and the total cost.
The customer can:
Change item quantities.
Remove items.
View product details.
The system updates the total price dynamically. 6. Checkout Process
Primary Actor: Customer
Use Case:

The customer proceeds to checkout.
The system prompts for billing details and payment method selection (e.g., Stripe, PayPal).
The system applies discounts or promo codes if provided.
The customer confirms and completes the purchase. 7. Order Confirmation and Receipt
Primary Actor: Customer
Use Case:

After completing the purchase, the system displays an order confirmation page with purchase details.
The system sends a confirmation email with a receipt and download links for digital products. 8. Order History and Download Management
Primary Actor: Customer
Use Case:

The customer can view a history of their past orders.
The customer can re-download purchased digital products.
Product licenses or activation codes are accessible from the order history. 9. Product Review and Rating
Primary Actor: Customer
Use Case:

Customers leave reviews and rate purchased products.
Reviews are displayed on product pages for other customers to see. 10. Admin - Manage Products
Primary Actor: Admin
Use Case:

The admin can:
Add, edit, or delete products.
Upload digital files (e.g., presets, templates, plugins).
Assign products to categories.
Mark products as “featured” or “on sale.” 11. Admin - Order Management
Primary Actor: Admin
Use Case:

The admin can:
View customer orders and their statuses.
Update order statuses (e.g., completed, refunded).
Process refunds or cancellations. 12. Admin - User Management
Primary Actor: Admin
Use Case:

The admin can:
View and manage user accounts.
Reset user passwords.
Suspend or ban users if necessary. 13. Admin - Payment and Discount Management
Primary Actor: Admin
Use Case:

The admin manages payment gateway integrations.
The admin creates and manages discounts or promo codes.
The admin tracks revenue and payment reports. 14. Admin - Reports and Analytics
Primary Actor: Admin
Use Case:

The admin generates reports on sales and customer behavior.
The system provides insights on popular products and revenue trends. 15. Customer Support/Helpdesk
Primary Actor: Customer
Use Case:

Customers contact support via live chat, email, or contact forms.
Support staff manage inquiries and provide assistance.

## Project structure

src/
├── core/
│ ├── entities/
│ │ ├── index.ts
│ │ ├── product.entity.ts
│ │ ├── category.entity.ts
│ │ └── license.entity.ts
│ └── interfaces/
│ ├── repositories/
│ │ └── product-repository.interface.ts
│ └── use-case.interface.ts
├── application/
│ ├── dtos/
│ │ └── product.dto.ts
│ ├── use-cases/
│ │ └── product/
│ │ └── create-product.use-case.ts
│ └── application.module.ts
├── infrastructure/
│ ├── database/
│ │ └── repositories/
│ │ └── product.repository.ts
│ └── infrastructure.module.ts
├── presentation/
│ ├── controllers/
│ │ └── products.controller.ts
│ └── presentation.module.ts
├── app.module.ts
└── main.ts
