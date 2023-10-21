import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
    /* GENERAL STYLES */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 0;
        margin-bottom: 0.5em;
        font-weight: 600;
    }

    p {
        margin-top: 0;
        margin-bottom: 0.5em;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        color: var(--colorTextDark);
        text-decoration: none;
        transition: color var(--cubic-transition);
    }

    a:hover,
    a:focus {
        color: var(--colorPrimary);
    }

    button {
        cursor: pointer;
        border: none;
        background-color: transparent;
        padding: 0;
        font-size: 16px;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
        object-fit: cover;
    }

    hr {
        border-top: 1px solid var(--colorBorder);
    }

    th,
    td {
        padding: 10px 20px;
        text-align: left;
    }

    tr:nth-child(even) {
        background-color: var(--colorSecondary);
    }

    th {
        background-color: var(--colorPrimary);
        color: var(--white);
        text-transform: uppercase;
    }

    input:focus,
    textarea:focus {
        outline: 1px solid var(--colorPrimary);
    }

    body {
        font-family: var(--font-primary);
        font-size: 16px;
        line-height: 1.2;
        font-weight: 400;
        color: var(--black);
        background-color: var(--colorBody);
        margin: 0;
    }

    #root {
        margin: 20px;
    }

    .card {
        max-width: 50%;
        margin-left: auto;
        margin-right: auto;
    }

    .btn {
    padding: 8px 15px;
    border-radius: 5px;
    }

    .btn.btn-primary {
    background-color: var(--colorPrimary);
    color: var(--white);
    transition: box-shadow var(--cubic-transition),
        background-color var(--cubic-transition);
    }

    .btn.btn-primary:hover {
    box-shadow: rgba(0, 0, 0, 0.48) 0 4px 12px;
    }

    .btn.btn-primary:focus {
    background-color: var(--colorPrimaryDark);
    }

    .btn.btn-outline {
    border: 1px solid var(--colorPrimary);
    color: var(--colorPrimary);
    transition: box-shadow var(--cubic-transition), border var(--cubic-transition),
        color var(--cubic-transition);
    }

    .btn.btn-outline:hover {
        box-shadow: rgba(0, 0, 0, 0.48) 0 4px 12px;
    }

    .btn.btn-outline:focus {
        border: 1px solid var(--colorPrimaryDark);
        color: var(--colorPrimaryDark);
    }


    .container {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    label {
        margin-bottom: 5px;
        color: var(--colorPrimary);
        font-weight: 600;
    }

    input {
        padding: 5px 10px;
        border-radius: 5px;
        border: 1px solid var(--black);
    }

    :root {
    /* 
    ================
    COLORS 
    ================
    */
    --white: #ffffff;
    --black: #000000;

    --colorPrimary: #6200ee;
    --colorPrimaryDark: #4a01af;
    --colorSecondary: #303030;
    --colorText: #141414;
    --colorBody: #eaedee;

    --colorBorder: rgb(65 64 64 / 20%);

    /* 
    ==============
    FONTS
    ==============
    */
    --font-primary: Inter, sans-serif;

    /*
    ===========
    OTHER
    ===========
    */

    --cubic-transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
`;
