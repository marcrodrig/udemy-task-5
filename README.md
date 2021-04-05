# Coding Exercise - Routing For Application

<h1>Create Routing for an Application</h1>
<ol>
    <li>Create reusable <strong>Button Component</strong> that will be used for login button.</li>
    <li>Create reusable <strong>Input Component</strong> that will be used for username and password.</li>
    <li>Create <strong>Header Navigation Component</strong> that contains links so user can go to home or about page.</li>
    <li>
        Create 3 Pages
        <ul>
            <li>Login Page - /login</li>
            <li>About Page - /about</li>
            <li>Home Page - /</li>
        </ul>
    </li>
    <li>If user is not logged in, it can only navigate to Login Page.</li>
    <li>
        When the user successfully logged in:
        <ul>
            <li>User will be redirected to Home Page</li>
            <li>Header Navigation Component will appear so user can go to Home or About Page.</li>
            <li>Logout Button will appear.</li>
        </ul>
    </li>
    <li>User cannot go to login page again once logged in. You can use cookies/session/local storage.</li>
    <li>Clicking Logout Button will log you out and redirected to Login Page.</li>
</ol>

## Available Scripts

In the project directory, you can run:
```bash
## Installing all dependencies
npm install
```
```bash
## Runs the app in the development mode.
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.