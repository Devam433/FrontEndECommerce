### Task: Build an Intermediate E-commerce Website Using React/Next.js with RTK (Redux Toolkit)

#### **Objective:**

Create a fully functional e-commerce website that allows users to browse products, view details, manage a shopping cart, and perform CRUD operations on the cart using the DummyJSON API.

#### **Requirements:**

- **Framework:** React/Next.js (Next.js preferred)
- **State Management:** Redux Toolkit (RTK)
- **API Interaction:** Axios/RTK Query/Simple Fetch (choose one)
- **Styling:** Use a CSS framework like Tailwind CSS or styled-components for UI design (optional)

#### **Pages and Features:**

1. **Product Listing Page**

   - **API:** `https://dummyjson.com/products`
   - **Functionality:**
     - Fetch and display a list of products.
     - Implement sorting functionality using the `sortBy` and `order` query parameters (e.g., `https://dummyjson.com/products?sortBy=title&order=asc`).
     - Allow filtering products by categories using `https://dummyjson.com/products/categories` and `https://dummyjson.com/products/category/{category_name}`.
     - Pagination for better user experience if needed.

2. **Single Product View Page**

   - **API:** `https://dummyjson.com/products/{product-id}`
   - **Functionality:**
     - Display detailed information about a selected product, including title, price, description, and images.
     - Add an "Add to Cart" button, which will add the product to the cart.
     - Display related products based on the category (optional).

3. **Cart Page**

   - **API:**
     - Add new cart: `https://dummyjson.com/carts/add`
     - Update cart: `https://dummyjson.com/carts/1`
     - Get a single cart: `https://dummyjson.com/carts/1`
   - **Functionality:**
     - Display products added to the cart with quantities and total price.
     - Implement CRUD operations:
       - **Create:** Add products to the cart using the `POST` API.
       - **Read:** Display the current state of the cart.
       - **Update:** Modify quantities of products in the cart using `PUT` or `PATCH`.
       - **Delete:** Remove products from the cart or clear the entire cart.
     - Calculate the total price, discounted total, and total quantity of items in the cart.

4. **Product Categories Page**
   - **API:**
     - Get all categories: `https://dummyjson.com/products/categories`
     - Get products by category: `https://dummyjson.com/products/category/{category_name}`
   - **Functionality:**
     - Display a list of all product categories.
     - When a category is selected, display products belonging to that category.
     - Implement sorting and filtering options within the category.

#### **Redux State Management:**

- **Product Slice:**
  - Store the list of products, single product details, and related sorting and filtering state.
- **Cart Slice:**
  - Manage the cart state including items added, quantities, and total cost.
  - Implement actions for adding, updating, and removing items from the cart.

#### **API Interaction:**

- Use **Axios** or **RTK Query** for API requests, depending on your preference.
- Implement global error handling and loading states to enhance user experience.

#### **Additional Tasks:**

- **Responsive Design:** Ensure the website is responsive across all devices.
- **Optimized Performance:** Use code splitting, lazy loading, and other Next.js features to optimize performance.

### **Project Deliverables:**

- A fully functional e-commerce frontend with the following pages: Home, Product Listing, Product Details, Cart, Categories.
- Clear and readable code with appropriate comments.
- Effective use of Redux Toolkit for state management.
- Clean and responsive UI.

### **Resources:**

- [DummyJSON API Documentation](https://dummyjson.com/docs)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Next.js Documentation](https://nextjs.org/docs)

### Note:

- The project should be uploaded to a GitHub repository.
- The project should be hosted on Vercel.
- Share both the link in this Google Form: https://forms.gle/MU5omMAVQax2N7Wp6
