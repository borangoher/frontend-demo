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
            part1: "Giriş Yap",
            part2: "Ödeme",
            part3: "Bilgi",
          },
          home: {
            title: "Payment Service'e hoş geldiniz!",
            desc_notLoggedIn:
              "Payment Service'e hoş geldiniz. Ödemelerinizi bu site aracılığıyla yürütebilirsiniz. Lütfen devam etmek için giriş yapın.",
            desc_LoggedIn:
              "Payment Service'e hoş geldiniz. Ödemelerinizi bu site aracılığıyla yürütebilirsiniz. Şu anda giriş yapmış durumdasınız.",
            login: "Giriş Yap",
          },
          info: {
            title: "Payment Service'e hoş geldiniz!",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere metus ipsum, a ornare erat pulvinar et. Nulla sodales odio nec porttitor condimentum. Nunc a diam metus. Proin quis turpis tempus, venenatis nibh at, lobortis augue. Sed vel nisl id libero vehicula convallis nec non arcu. Donec imperdiet pulvinar volutpat. Fusce eu velit risus. Donec vitae fringilla justo. Aliquam erat volutpat. Duis dui mauris, efficitur non commodo ut, rutrum vel nulla. Quisque eu efficitur felis, at mattis ipsum.",
          },
          login: {
            loggedIn:
              "Şu anda giriş yapmış durumdasınız. Çıkış yapmak ister misiniz?",
            logout: "Çıkış Yap",
            username: "Kullanıcı Adı",
            password: "Şifre",
            login: "Giriş Yap",
          },
          payment: {
            cardholderName: "Kart Sahibi İsmi",
            cardNumber: "Kart Numarası",
            expiryDate: "Son Geçerlilik Tarihi",
            securityNumber: "Güvenlik Kodu",
            accountNumber: "Hesap Numarası",
            amount: "Miktar",
            displaySenderName: "Gönderici ismini gösterme",
            useService: "Bu transfer için SERVICE kullan",
            execute: "Transferi",
            executeNow: "Şimdi gerçekleştir (ekstra ücerlet açığa çıkabilir)",
            executeTomorrow: "Yarın sabah gerçekleştir",
            makePayment: "Ödeme Yap",
            mustLogIn:
              "Ödeme yapmak için giriş yapmış olmalısınız. Lütfen önce hesabınıza giriş yapınız.",
            login: "Giriş Yap",
          },
        },
      },
    },
  });

export default i18n;
