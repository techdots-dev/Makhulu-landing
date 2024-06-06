# Makhulu-Landing
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3002](http://localhost:3002) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deployment

- ssh root@your_droplet_ip
- cd /path/to/your/project
- git pull origin main
- docker ps
- docker stop "id" `id of the image makhulu-landing`
- docker rm "id"
- docker build -t makhulu-landing .
- docker run -d -p 3002:3000 makhulu-landing

