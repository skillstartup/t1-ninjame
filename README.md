# Coding Challenge

## My Solution In Action

[Live Demo](https://imaginative-naiad-78f8fe.netlify.app/)

https://github.com/cincodemayo/coding-challenge-ninjame/assets/22010324/fd523ef3-a3d5-4caf-963e-8218fcd7cd40

## What I Built

I've built a web application that efficiently fetches news topics based on user input.

Note: The subscription input is just UI implementation for now.

### To run locally
1. Create a new [News API key](https://newsapi.org/)
2. Create a new `.env.local` file at the root and add the following

```
NEWS_API_KEY=YOUR_API_KEY
```

3. Install dependencies by running

```
yarn install
```

4. Start the app

```
yarn dev
```

## How I Built It

The construction of this web app was carefully executed, leveraging the following tools and frameworks:

### Tools & Framework used

- **App & API Framework:** [Next.js](https://nextjs.org/)
- **UI:** [shadcn/ui](https://ui.shadcn.com) & [Tailwind CSS](https://tailwindcss.com/)
- **Validation:** [zod](https://github.com/colinhacks/zod)
- **Deployment:** [Netlify](https://www.netlify.com/with/nextjs/)
- **API:** [News API](https://newsapi.org/)

## Why I Built It This Way

The technologies and frameworks chosen for this project were thoughtfully selected to deliver a refined and modern web application:

### Next.js for Enhanced Functionality

Next.js provided a solid foundation for building this application with features like server-side rendering and optimal performance. It allowed for seamless navigation and ensured that users can access news topics swiftly and efficiently.

### shadcn/ui and Tailwind CSS for Aesthetics and Responsiveness

A visually appealing and responsive user interface is essential for any modern web app. By utilizing shadcn/ui's custom UI components and Tailwind CSS's utility-first approach, I created a sleek and user-friendly interface that adapts seamlessly to various devices and screen sizes.

### zod for Robust Data Validation

Data validation is crucial to maintain data integrity and protect against security vulnerabilities. With zod, I implemented a reliable and type-safe validation system, ensuring that user inputs are accurate and consistent.

### Netlify for Easy Deployment

Efficient deployment is essential to deliver updates and improvements promptly. Netlify's integration with Next.js enabled smooth and hassle-free deployment, making it easy to keep the application up-to-date.

### News API for Reliable News Data

To provide users with the most current and relevant news topics, I integrated the News API into the application. This ensured a reliable source of news data, enhancing the overall value of the web app.

## What I Would Do Differently

- **Subscription System:** Implement a sophisticated subscription system that allows users to subscribe to specific news topics and receive timely updates through various notification channels. This feature would keep users engaged and informed.

- **Pagination for Enhanced User Experience:** Implement a pagination mechanism to enable users to navigate seamlessly through a vast array of articles. This enhancement would optimize performance and user experience, especially when dealing with a large volume of news content.
