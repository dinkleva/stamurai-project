## Task Management App
A simple task management app built using React and MobX State Tree.

## Installation
npx create-next-app stamurai-project

cd stamurai-project
# Install the dependencies:
npm install 
# Run the app in development mode
npm run dev


## Usage
The app displays a list of tasks, including their title, description, and status.
To add a new task, enter the title, description, and status in the input fields and click the "Add Task" button.
To edit a task, click the "Edit" button next to the task you want to edit. A prompt will appear to enter the updated title, description, and status.
To delete a task, click the "Delete" button next to the task you want to delete.
All tasks are automatically persisted in local storage, so they will be available even after refreshing the page


## Features
Add new tasks with a title, description, and status.
Edit existing tasks.
Delete tasks.
Data Storage for tasks in local storage.

## Dependencies
The app uses the following dependencies:

React: A JavaScript library for building user interfaces.
MobX State Tree: A state management library based on MobX for creating structured state models.
MobX React Lite: A lightweight observer utility for React components.


## Link to the live website
https://stamurai-project.vercel.app/


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev # for windows
# or
yarn dev
# or
pnpm dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## The above link will open a home page which is by default src/app/page.tsx page and there I have given a link for the App. Once you click on the App it will take you 'http://localhost:3000/mypage.tsx' where the actual App will be shown.



This project uses [`node_modules/next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
