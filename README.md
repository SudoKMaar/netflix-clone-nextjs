# Netflix Clone - Next.js

## Overview

This project is a Netflix clone built using Next.js, React, Tailwind CSS, Recoil, Material-UI, and Heroicons, with Firebase for authentication. The goal of this project is to recreate the user interface and functionality of the popular streaming platform Netflix. Users can browse through a list of movies and TV shows, view details about each title, watch trailers, and even sign up or log in using Firebase authentication.

Deployed at [Fakeflix](https://fakeflix-kmaar.vercel.app/)

## Features

- **Authentication**: Users can sign up and log in to their accounts using their email and password. Firebase handles the authentication process.

- **Browse Movies and TV Shows**: Users can explore a curated list of movies and TV shows, including Netflix originals, top-rated titles, trending content, action movies, comedies, horror movies, romance movies, and documentaries.

- **Movie Details**: Clicking on a movie or TV show card displays more information about the title, including its release date, genre, original language, overview, and voting statistics.

- **Watch Trailers**: Users can watch trailers for movies and TV shows by clicking on the play button, which opens a modal with the trailer video.

- **Responsive Design**: The application is responsive and adapts to different screen sizes, providing a seamless experience across devices.

- **Stripe Integration (Upcoming Feature)**: In future updates, we plan to integrate Stripe to enable users to subscribe and make payments for premium content or subscription plans.

## Tech Stack

- **Next.js**: A React framework for building server-side rendered applications.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Recoil**: A state management library for React applications.
- **Material-UI**: A popular React UI framework providing pre-built components following the Material Design guidelines.
- **Heroicons**: A set of free SVG icons designed by the Heroicons team.

## Getting Started

Follow these steps to set up the project on your local machine:

1. Clone the repository:

```bash
git clone https://github.com/SudoKMaar/netflix-clone-nextjs.git
```

2. Install dependencies:

```bash
cd netflix-clone-nextjs
npm install
```

3. Rename `.env.example` to `.env.local`:

   - Rename the `.env.example` file in the root directory to `.env.local`.
   - Replace the placeholder values in `.env.local` with your actual Firebase configuration.

4. Run the development server:

```bash
npm run dev
```

5. Open your browser and visit `http://localhost:3000` to see the application running.

## Contributing

Contributions to this project are welcome! If you have any bug fixes, new features, or improvements to suggest, please create a pull request. We follow the "fork-and-pull" Git workflow.

## Authors

- [Abhishek Kumar](https://kmaar.vercel.app)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
