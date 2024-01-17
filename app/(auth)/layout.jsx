'use client'
import '../styles/bootstrap.min.css'
import '../../public/auth/css/style.css'
import React, { useEffect } from 'react'
import {ToastContainer} from "react-toastify";
import {SnackbarProvider} from "notistack";
import Avatar from "../../components/account/avatar";
const AuthLayout = ({ children }) => {
    useEffect(() => {
        const jquery = document.createElement('script');
        const popper = document.createElement('script');
        const main = document.createElement('script');

        jquery.src = "/auth/js/jquery.min.js";
        jquery.async = true;

        popper.src = "/auth/js/popper.js";
        popper.async = true;

        main.src = "/auth/js/popper.js";
        main.async = true;

        document.body.appendChild(jquery);
        document.body.appendChild(popper);
        document.body.appendChild(main);

        return () => {
            document.body.removeChild(jquery);
            document.body.removeChild(popper);
            document.body.removeChild(main);
        }
    })
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                />
            </head>
            <body className="img js-fullheight">
                <main>{children}</main>
                <SnackbarProvider />
            </body>
        </html>
    )
}

export default AuthLayout