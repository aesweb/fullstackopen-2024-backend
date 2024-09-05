# Backend Exercises for Full Stack Open 2024 - Part 3

This repository contains the backend exercises for Part 3 of the Full Stack Open 2024 course. The project is a Node.js application that serves as the backend for a phonebook application.

## Project Structure

The project is set up with the following key components:

- Node.js backend using Express
- MongoDB for database storage
- Deployment configuration for Fly.io

## Scripts

The following npm scripts are available:

- `npm run dev`: Start the development server
- `npm run build:ui`: Build the frontend application
- `npm run deploy`: Deploy the application to Fly.io
- `npm run deploy:full`: Deploy the application and build the frontend
- `npm run logs:prod`: View the production logs
- `npm run lint`: Run the linter

## Dependencies

The project uses several key dependencies:

- Express.js for the web server
- Mongoose for MongoDB object modeling
- Cors for enabling Cross-Origin Resource Sharing
- Dotenv for environment variable management
- Morgan for HTTP request logging

## Development

To run the project in development mode:

## Deployment

The project is configured for deployment to Fly.io. Deployment can be triggered manually or automatically:

1. Manual deployment:

   ```
   npm run deploy
   ```

2. Automatic deployment via GitHub Actions:
   - Push a tag starting with 'v' to trigger the deployment workflow

## Linting

ESLint is configured for code quality. Run the linter with:

## Environment Variables

Make sure to set up the following environment variables:

- `PORT`: The port on which the server will run (default is 3000)
- `MONGODB_URI`: The connection string for your MongoDB database

## Contributing

This project is for educational purposes as part of the Full Stack Open course. However, if you notice any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.
