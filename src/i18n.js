import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { ValidLengthLimits } from "./components/login/Login.constant";
import { ValidLengths } from "./components/payment-form/paymentForm.constant";

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
            errorMessages: {
              usernameLength: `Username should be between ${ValidLengthLimits.MIN_USERNAME_LENGTH} and ${ValidLengthLimits.MAX_USERNAME_LENGTH} characters`,
              passwordLength: `Password should be between ${ValidLengthLimits.MIN_PASSWORD_LENGTH} and ${ValidLengthLimits.MAX_PASSWORD_LENGTH} characters`,
            },
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
            errorMessages: {
              required: "This field is required",
              cardholderNameMin: `Cardholder name must at least contain ${ValidLengths.MIN_CARDHOLDER_NAME_LENGTH} characters`,
              cardNumberType: "Card number must be a number",
              cardNumberLength: `Card number must be exactly ${ValidLengths.CARD_NUMBER_LENGTH} digits`,
              expiryDateMin: "Expiry date must be a future date",
              securityNumberType: "Security number must be a number",
              secuirtyNumberLength: `Security number must be exactly ${ValidLengths.SECURITY_NUMBER_LENGTH} digits`,
              accountNumberType: "Account number must be a number",
              accountNumberLength: `Account number must be exactly ${ValidLengths.ACCOUNT_NUMBER_LENGTH} digits`,
              amountType: "Amount to transfer must be a number",
              amountMax:
                "You can transfer no more than 25000 in a single transaction",
              serviceAgreement:
                "You must agree to use SERVICE for this transfer",
              noOptionsSelected: "Please select one of the options",
            },
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
            errorMessages: {
              usernameLength: `Kullancı adı uzunluğu ${ValidLengthLimits.MIN_USERNAME_LENGTH} ve ${ValidLengthLimits.MAX_USERNAME_LENGTH} karakter arasında olmalıdır`,
              passwordLength: `Şifre uzunluğu ${ValidLengthLimits.MIN_PASSWORD_LENGTH} ve ${ValidLengthLimits.MAX_PASSWORD_LENGTH} karakter arasında olmalıdır`,
            },
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
            executeNow: "Şimdi gerçekleştir (ekstra ücretler açığa çıkabilir)",
            executeTomorrow: "Yarın sabah gerçekleştir",
            makePayment: "Ödeme Yap",
            mustLogIn:
              "Ödeme yapmak için giriş yapmış olmalısınız. Lütfen önce hesabınıza giriş yapınız.",
            login: "Giriş Yap",
            errorMessages: {
              required: "Bu alanın doldurulması zorunludur",
              cardholderNameMin: `Kart sahibi ismi en az ${ValidLengths.MIN_CARDHOLDER_NAME_LENGTH} karakter uzunluğunda olmalıdır`,
              cardNumberType: "Kart numarası bir sayı olmalıdır",
              cardNumberLength: `Kart numarası tam olarak ${ValidLengths.CARD_NUMBER_LENGTH} haneli olmalıdır`,
              expiryDateMin: "Son geçerlilik tarihi gelecekte olmalıdır",
              securityNumberType: "Güvenlik kodu bir sayı olmalıdır",
              secuirtyNumberLength: `Güvenlik kodu tam olarak ${ValidLengths.SECURITY_NUMBER_LENGTH} haneli olmalıdır`,
              accountNumberType: "Hesap numarası bir sayı olmalıdır",
              accountNumberLength: `Hesap numarası tam olarak ${ValidLengths.ACCOUNT_NUMBER_LENGTH} haneli olmalıdır`,
              amountType: "transfer edilecek miktar bir sayı olmalıdır",
              amountMax: "Tek işlemde 25000 üzerinde transfer yapılamaz",
              serviceAgreement:
                "Bu transferi gerçekleştirmek için SERVICE kullanmayı kabul etmeniz gerekmektedir",
              noOptionsSelected: "Lütfen seçeneklerden birini seçin",
            },
          },
        },
      },
    },
  });

export default i18n;
