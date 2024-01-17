'use client'
import Header from "../../components/layouts/header"
import Footer from "../../components/layouts/footer"
import '../../public/lib/animate/animate.min.css'
import '../../public/lib/owlcarousel/assets/owl.carousel.min.css'
import '../../public/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css'
import '../styles/bootstrap.min.css'
import '../styles/style.css'
import React, { useEffect } from "react"
import { ToastContainer } from "react-toastify";
import {SnackbarProvider} from "notistack";
import AvatarUser from "../../components/account/avatar";
export default function PublicLayout({ children }) {
  const hasJWT = !!localStorage.getItem('jwt');
  useEffect(() => {
    const jquery = document.createElement('script');
    const bundle = document.createElement('script');
    const wow = document.createElement('script');
    const easing = document.createElement('script');
    const waypoints = document.createElement('script');
    const counterup = document.createElement('script');
    const carousel = document.createElement('script');
    const moment = document.createElement('script');
    const timezone = document.createElement('script');
    const tempusdominus = document.createElement('script');
    const main = document.createElement('script');

    jquery.src = "https://code.jquery.com/jquery-3.4.1.min.js";
    jquery.async = true;

    bundle.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js";
    bundle.async = true;

    wow.src = "/lib/wow/wow.min.js";
    wow.async = true;

    easing.src = "/lib/easing/easing.min.js";
    easing.async = true;

    waypoints.src = "/lib/waypoints/waypoints.min.js";
    waypoints.async = true;

    counterup.src = "/lib/counterup/counterup.min.js";
    counterup.async = true;

    carousel.src = "/lib/owlcarousel/owl.carousel.min.js";
    carousel.async = true;

    moment.src = "/lib/tempusdominus/js/moment.min.js";
    moment.async = true;

    timezone.src = "/lib/tempusdominus/js/moment-timezone.min.js";
    timezone.async = true;

    tempusdominus.src = "/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js";
    tempusdominus.async = true;

    main.src = "/js/main.js";
    main.async = true;

    document.body.appendChild(jquery);
    document.body.appendChild(bundle);
    document.body.appendChild(wow);
    document.body.appendChild(easing);
    document.body.appendChild(waypoints);
    document.body.appendChild(counterup);
    document.body.appendChild(carousel);
    document.body.appendChild(moment);
    document.body.appendChild(timezone);
    document.body.appendChild(tempusdominus);
    document.body.appendChild(main);

    return () => {
      document.body.removeChild(jquery);
      document.body.removeChild(bundle);
      document.body.removeChild(wow);
      document.body.removeChild(easing);
      document.body.removeChild(waypoints);
      document.body.removeChild(counterup);
      document.body.removeChild(carousel);
      document.body.removeChild(moment);
      document.body.removeChild(timezone);
      document.body.removeChild(tempusdominus);
      document.body.removeChild(main);
    }
  }, []);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>The Valley House</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="" name="keywords" />
        <meta content="" name="description" />
        {/* Favicon */}
        <link href="img/favicon.ico" rel="icon" />
        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&family=Pacifico&display=swap" rel="stylesheet" />
        {/* Icon Font Stylesheet */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="container-xxl bg-white p-0">
          <Header />
          <main>{children}</main>
          <SnackbarProvider />
          <div id="fb-root"></div>
          <script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v18.0&appId=1074364267025758" nonce="OC5QXmBq"></script>
          <Footer />
          {hasJWT && <AvatarUser/>}
        </div>
      </body>
    </html>
  )
}
