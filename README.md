# 🏙️ UC Frontend

A modern frontend application for **Urban Company-style service booking**. Built with React and Tailwind CSS, this project serves as the public-facing client that allows users to browse service categories, check provider availability, and book services.

## 🌐 Live Preview

> Deployed at: [https://uc-frontend-production.up.railway.app/]
> GitHub Repo: [https://github.com/usertrucks1/uc-frontend.git]

---
## 📌 System Overview
This project is a modern frontend application built with:
- Vite – Fast frontend tooling and dev server
- Tailwind CSS – Utility-first CSS framework
- PostCSS – Used to process Tailwind styles
- Docker – Containerized development environment

---

## 🚀 Features

- 📦 **Category-wise Service Listings**
- 🧑‍🔧 **Provider Availability & Booking Slots**
- 📅 **Dynamic Slot Selection**
- 📱 **Responsive UI** using TailwindCSS
- ⚡ **Fast & Interactive UX** with minimal dependencies

---
## 🧰 System Flow
- When a User visits [https://uc-frontend-production.up.railway.app/] , landing page is shown with a dynamic list of categories.
- User chooses a service category, then user is navigated to providers page that shows list of available providers in selected service category.
- Once User select a provider considering their per hour changes, User is navigated to slots page that displays slot for the current date.
- Users can also check slots for future as well upto next 7 days from current date.
- User clicks book now on a slot, then a Slot Hold request is initiated to considering concurrent users trying to book same slot.
- A given slot can be hold by only one user at a time, and other users will get slot unavailable message.
- After holding the slot, user is navigated to Review page when user can review the slot details.
- User can choose proceed with booking confirmation or can choose to cancel booking.
- If user can cancel the booking in review page, Holded slot is released and made available again.
- And If user proceed with booking, a booking request is sent and confirmed, User is navigated to confirmation page displaying booking summary.
- User can navigate to booking page to check his bookings.
- Bookings can also be cancelled from booking page.

---

## 🧰 Tech Stack

| Layer        | Technology         |
| ------------ | ------------------ |
| Frontend     | React              |
| Styling      | Tailwind CSS       |
| State Mgmt   | React State        |
| API Handling | REST via Axios     |
| Routing      | React Router DOM   |
| Build Tool   | Vite               |

---

## 📂 Project Structure

uc-frontend/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Routes (if Next.js)
│   ├── services/        # API calls
│   ├── types/           # DTOs
│   └── App.tsx / main.tsx
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md

## ⚙️ Functional Approach
1. Styling
Uses Tailwind CSS with Just-In-Time (JIT) mode.
Styles are added using utility classes in JSX/HTML.
Tailwind's plugin is loaded via PostCSS, using @tailwindcss/postcss.

2. Development Server
Served by Vite on port 3001 by default.
Vite provides HMR (Hot Module Replacement) for fast development.

3. Dockerized Development
App is containerized using Docker with the following features:
Live code changes reflected inside the container.
Node modules handled via bind mount or volume caching.
Tailwind and Vite run inside the container.

## Running Locally

git clone https://github.com/usertrucks1/uc-frontend.git
cd uc-frontend
npm install
npm run dev

Now open http://localhost:3000 in your browser.

## 📸 Screenshots
<img width="1440" height="777" alt="image" src="https://github.com/user-attachments/assets/d79e6d82-720e-4bfc-ae58-0d12ba4e1e3d" />
<img width="1437" height="773" alt="image" src="https://github.com/user-attachments/assets/454f5d3b-b315-4aca-8d0d-0ba2e3363813" />
<img width="1440" height="776" alt="image" src="https://github.com/user-attachments/assets/c19a2f56-6d2f-4dc9-963c-0525a7bbde3b" />
<img width="1440" height="666" alt="image" src="https://github.com/user-attachments/assets/22a2f9be-af8e-470e-952c-ea64764ebf79" />
<img width="1435" height="655" alt="image" src="https://github.com/user-attachments/assets/990f97f3-3fd3-4dfa-bc92-f72c437fb6c6" />
<img width="1440" height="699" alt="image" src="https://github.com/user-attachments/assets/fb8e135d-9b52-4043-8992-37d498609be2" />
<img width="1440" height="720" alt="image" src="https://github.com/user-attachments/assets/09d3d89d-17bf-4af9-a99f-186e3fe173e2" />
<img width="1439" height="631" alt="image" src="https://github.com/user-attachments/assets/94a67fa9-2306-40dc-83df-a6ea7397c77a" />




## ✍️ Author
Made with 💻 by Alok Kumar Singh
