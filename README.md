<h1 align="center">
  Vite Template React
</h1>

<p align="center">
  <a href="https://github.com/SafdarJamal/vite-template-react/releases">
    <img src="https://img.shields.io/github/v/release/SafdarJamal/vite-template-react" alt="GitHub Release (latest by date)" />
  </a>
  <a href="https://github.com/SafdarJamal/vite-template-react/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/SafdarJamal/vite-template-react" alt="License" />
  </a>
</p>

<p align="center">
    A <a href="https://vitejs.dev">Vite</a> +  + <a href="https://www.typescriptlang.org/docs/">typescript</a> + <a href="https://reactjs.org">React</a> starter project.
</p>



## Folder Structure

No configuration or complicated folder structures, just the files you need to build your app:

```
vite-template-react
├── public
│   ├── favicon.svg
└── src
    ├── api
    ├── assets
    ├── components
    ├── guards
    ├── helpers
    ├── hooks
    ├── models
    ├── pages
    ├── redux
    ├── style-components
    ├──utilities
    ├── App.css
    ├── App.tsx
    ├── index.css
    ├── index.tsx
    └── logo.svg
├── .gitignore
├── .env.example
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.js
└── yarn.lock
```

## Development

To get a local copy of the code, clone it using git:

```
git clone https://github.com/Maikoj2/RaptorsFrontEnd.git
cd RaptorsFrontEnd
```

Make it your own:

```
rm -rf .git && git init && npm init
git add .
git commit -m "Initial commit"
```

Install dependencies:

```
yarn 
```

Now, you can start a local web server by running:

```
yarn dev
```

And then open ttp://127.0.0.1:5173/ to view it in the browser.

#### Available Scripts

In this project, you can run the following scripts:

| Script        | Description                                         |
| ------------- | --------------------------------------------------- |
| npm run dev   | Runs the app in the development mode.               |
| npm run build | Builds the app for production to the `dist` folder. |
| npm run serve | Serves the production build from the `dist` folder. |

## License

This project is licensed under the terms of the [MIT license](https://github.com/SafdarJamal/vite-template-react/blob/main/LICENSE).