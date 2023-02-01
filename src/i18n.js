import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          navbar: {
            part1: "Log In",
            part2: "Payment",
            part3: "Information",
          },
          home: {
            title: "Welcome to Payment Service!",
            desc_notLoggedIn:
              "Welcome to Payment Service. You can handle your payments through this website. Please log in to continue.",
            desc_LoggedIn:
              "Welcome to Payment Service. You can handle your payments through this website. You are currently logged in.",
            login: "Log In",
          },
          info: {
            title: "Welcome to Payment Service!",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere metus ipsum, a ornare erat pulvinar et. Nulla sodales odio nec porttitor condimentum. Nunc a diam metus. Proin quis turpis tempus, venenatis nibh at, lobortis augue. Sed vel nisl id libero vehicula convallis nec non arcu. Donec imperdiet pulvinar volutpat. Fusce eu velit risus. Donec vitae fringilla justo. Aliquam erat volutpat. Duis dui mauris, efficitur non commodo ut, rutrum vel nulla. Quisque eu efficitur felis, at mattis ipsum.",
          },
          login: {
            loggedIn: "You are currently logged in. Would you like to log out?",
            logout: "Log Out",
            username: "Username",
            password: "Password",
            login: "Log In",
          },
          payment: {
            cardholderName: "Cardholder Name",
            cardNumber: "Card Number",
            expiryDate: "Expiry Date",
            securityNumber: "Security Number",
            accountNumber: "Account Number",
            amount: "Amount",
            displaySenderName: "Do not display sender name",
            useService: "Use SERVICE for transfer",
            execute: "Execute transfer",
            executeNow: "Now (extra charges may be incurred)",
            executeTomorrow: "Tomorrow morning",
            makePayment: "Make Payment",
            mustLogIn:
              "You must be logged in to make a payment. Please log in to your account first.",
            login: "Log In",
          },
        },
      },
      tr: {
        translation: {
          navbar: {
            part1: "Giriş yap",
          },
        },
      },
    },
  });

export default i18n;
