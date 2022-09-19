# FormAndViz

A simple form submission and a summary statistics of the form responses.

> Author: Faris Durrani </br>
> GitHub Repo: https://github.com/farisdurrani/FormAndViz

# How to Run

1. Install these prerequisites:
   - NodeJS v16
   - NPM v8
2. At the root of the project directory, run the following commands:
   ```
   npm install
   npm start
   ```

## Admin Access

To access the /results page, you must login as an admin, i.e.,

- Email: a@gmail.com
- Password: 123456

# Architecture

Frontend - ReactJS </br>
Backend - NodeJS, Firebase Authentication </br>
Database - Firebase NoSQL Firestore Database

```
📦FormAndViz
 ┣ 📂.github
 ┃ ┣ 📂workflows
 ┃ ┃ ┗ 📜node.js.yml - Build Check on GitHub Actions CI/CD
 ┃ ┣ 📜CODEOWNERS - Codeowners of this repo
 ┃ ┗ 📜CODE_OF_CONDUCT - Code of conduct for contributors
 ┣ 📂.vscode
 ┃ ┗ 📜settings.json - Custom VS Code settings
 ┣ 📂public
 ┃ ┣ 📜favicon.ico - Default logo
 ┃ ┣ 📜index.html - Main sole HTML file
 ┃ ┣ 📜logo192.png  - Default logo
 ┃ ┣ 📜logo512.png - Default logo
 ┃ ┣ 📜manifest.json - Default logo serializer
 ┃ ┣ 📜robots.txt - Default configuration file
 ┃ ┗ 📜_redirects - Redirection instructions for Netlify
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂results
 ┃ ┃ ┃ ┣ 📜CheckboxRes.js - Response data visualizer for multiple select questions
 ┃ ┃ ┃ ┣ 📜FreeAnsRes.js - Response data visualizer for free response questions
 ┃ ┃ ┃ ┣ 📜NumberRes.js - Response data visualizer for number response questions
 ┃ ┃ ┃ ┗ 📜RadioRes.js - Response data visualizer for single select questions
 ┃ ┃ ┣ 📜Checkbox.js - Question container for checkbox questions
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜LongAns.js - Question container for textarea free response questions without validation
 ┃ ┃ ┣ 📜NumberAns.js - Question container for number questions with validation
 ┃ ┃ ┣ 📜Radio.js - Question container for radio questions
 ┃ ┃ ┣ 📜Range.js - Question container for range questions
 ┃ ┃ ┣ 📜ResponseBox.js - General question container which imports one other question container depending on the type of the question
 ┃ ┃ ┣ 📜ResponseBoxData.js - General response data visulzation container which imports one other response data visualizer container depending on the type of the question
 ┃ ┃ ┣ 📜Select.js - Question container for select/dropdown questions
 ┃ ┃ ┣ 📜ShortAns.js - Question container for short free response questions with optional validation
 ┃ ┃ ┗ 📜Spacer.js - Simple component to take up white space
 ┃ ┣ 📂navbar-footer
 ┃ ┃ ┣ 📜Footer.js - Footer component
 ┃ ┃ ┗ 📜MainNavbar.js - Header / Navbar component
 ┃ ┣ 📂screens
 ┃ ┃ ┣ 📜Fill.js - Screen where user fills out the form by any logged-in user
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜Login.js - Login screen for all users; first page if they haven't signed in
 ┃ ┃ ┗ 📜Results.js - Results summary of all form responses, viewable only by the admin
 ┃ ┣ 📜App.css - Main sole CSS file
 ┃ ┣ 📜App.js - Main App.js file
 ┃ ┣ 📜constants.js - Contstants
 ┃ ┣ 📜firebase.js - Firebase backend functions
 ┃ ┣ 📜index.css
 ┃ ┣ 📜index.js
 ┃ ┣ 📜logo.svg
 ┃ ┣ 📜reportWebVitals.js
 ┃ ┗ 📜setupTests.js
 ┣ 📜.eslintrc.json - ESLint rules for CI/CD Build Check
 ┣ 📜.gitignore
 ┣ 📜LICENSE
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜README.md
```

# Project Requirements

> Source: https://github.com/rajatbhagat/interview-project

Create a Survey Application, where users can login and fill forms. The responses should be saved in a backend database. Create an Admin dashboard, where the data of the filled forms is visible to the admin only.

A survey form is similar to what we see in Google Forms with different field types like text fields, text areas, radio buttons, checkboxes, dropdowns, etc. You can also try and add validations if you feel certain fields are required to be filled by the user. You are free to choose the fields of the survey and the UI of the application. Just ensure that you are using different types of fields in the form. For the admin dashboard, think what all information would be required for the admin and how it should be presented so that it is most useful. You can even be creative and as a bonus create graphs for the admin to understand patterns in the data.

Create the application using ReactJS/Typescript - NodeJS technologies. Use the database of your choice (SQL / NoSQL).

# License

FormAndViz is MIT licensed, as found in the [LICENSE](./LICENSE) file.

FormAndViz documentation is Creative Commons licensed, as found in the [LICENSE-docs](./.github/LICENSE-docs) file.
