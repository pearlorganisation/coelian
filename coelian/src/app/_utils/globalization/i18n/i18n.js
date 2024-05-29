import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import database from "../../../_assets/json/db.js";
import Backend from "i18next-http-backend";
import i18nextBrowserLanguagedetector from "i18next-browser-languagedetector";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(i18nextBrowserLanguagedetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    resources: {

      //english translation
      en: {
        translation: {
          // here we will place our translations...
          pages: {
            aboutUs: {
              title: "About Us",
              description:database.aboutUs.content.en,
            },
            navbar: {
              home: "Home",
              about: "About Us",
              corporate: "Services",
              blog: "Blogs",
              contact: "Contact Us",
            },
            corporate: {
              title: "Looking For Corporate Purchasing !!",
              leftContent: "Own Your Office Today",
              rightContent: "Looking for stores !! we have it",
              listing: "listing",
            },
            individual: {
              title: {
                p1: "Discover the",
                p2: "Perfect Home:",
                p3: "Land, Apartment",
              },
              miniTitle: "Unlock the Key to your Dream Property.",
            },
            blogs: {
            title:"Our Blogs",
            content: database.blogs.content.en,
            images:database.blogs.images,   
            },
          },
            contactUs: {
              content :database.contactUs.content.en 
            },
            footer: {
              title:
                "Make the right data-driven decision that move your business.",
              body: {
                part1: {
                  t1: "NO CREDIT CARD REQUIRED",
                  t2: "Start using Tokyo Immo Today.",
                  t3: "Your Email",
                },
                part2: {
                  about: "About",
                  jobs: "Jobs",
                  services: "Services",
                  terms_and_condition: "Terms And Condition",
                  privacy_policy: "Privacy Policy",
                  cookie_policy: "Cookie Policy",
                },
                owned: "Owned by",
              },
            },
            trustedBy: {
              title: "TrustedBy",
            },
            partner:{
              title:database.partner.en
            }
          },
        },
      
     //french transaltion
      fr: {
        translation: {
          pages: {
            aboutUs: {
              title: "À propos de nous",
              description:database.aboutUs.content.en,
            },
            navbar: {
              home: "Accueil",
              about: "À Propos de Nous",
              individual: "Individus",
              corporate: "Corporate",
              blog: "Blogs",
              contact: "Contactez-Nous",
            },
            corporate: {
              title: "À la recherche d'achats corporatifs !!",
              leftContent: "Possédez votre bureau dès aujourd'hui",
              rightContent: "Vous cherchez des magasins !! nous l'avons",
              listing: "liste",
            },
            individual: {
              title: {
                p1: "Découvrez la",
                p2: "Maison Parfaite :",
                p3: "Terrain, Appartement",
              },
              miniTitle: "Déverrouillez la clé de votre propriété de rêve.",
            },

            blogs: {
              title: "Nos Blogs",
              content: database.blogs.content.fr,
              images:database.blogs.images,
              },
            },
            contactUs: {
              content :database.contactUs.content.fr 
            },
            footer: {
              title:
                "Prenez les bonnes décisions basées sur les données qui font avancer votre entreprise.",
              body: {
                part1: {
                  t1: "AUCUNE CARTE DE CRÉDIT REQUISE",
                  t2: "Commencez à utiliser Tokyo Immo dès aujourd'hui.",
                  t3: "Votre adresse e-mail",
                },
                part2: {
                  about: "À Propos",
                  jobs: "Emplois",
                  services: "Services",
                  terms_and_condition: "Conditions Générales",
                  privacy_policy: "Politique de Confidentialité",
                  cookie_policy: "Politique de Cookies",
                },
                owned: "Propriété de",
              },
            },
            trustedBy: {
              title: "Fait confiance par.",
            },
            partner:{
              title:database.partner.fr
            }
          },
        },
    
     // japanese translation
      ja: {
        translation: {
          pages: {
            aboutUs: {
              title: "私たちについて",
              description:
                "TOKYO IMMOは、あなたの期待に応えるアパート、家屋、または建物を提供し、日本でのスムーズなスタートを支援します。私たちは、日本で求める安心を提供する不動産を見つけるために、あなたと協力します。すべての物件はユニークです。同じ建物内でも、構造が同一の2つの物件や隣接する2つのアパート間でも、位置が完全に同じでない場合、日当たり、騒音の感じ方、風の流れなどが異なります。利用可能な豊富な情報の中から、TOKYO IMMOはあなたに最適な物件を見つけるために最善を尽くします。アパート、家屋、または建物を見せるだけでなく、引越し準備のために様々な住宅関連サービスの申し込み手続きをお手伝いすることもできます。",
            },
            navbar: {
              home: "ホーム",
              about: "私たちについて",
              individual: "個人向け",
              corporate: "法人向け",
              blog: "ブログ",
              contact: "お問い合わせ",
            },
            corporate: {
              title: "法人購買をお探しですか！！",
              leftContent: "今日、あなたのオフィスを所有してください",
              rightContent: "店舗をお探しですか！！ 私たちが持っています",
              listing: "リスト",
            },
            individual: {
              title: {
                p1: "理想の",
                p2: "住まいを発見する：",
                p3: "土地、アパート",
              },
              miniTitle: "夢の物件への鍵を開く。",
            },
            blogs: {
              title: "私たちのブログ",
              content: database.blogs.content.ja,
              images:database.blogs.images,
              },

          },
          contactUs: {
            content :database.contactUs.content.ja

          },
          footer: {
            title:
              "ビジネスを前進させる正しいデータに基づく意思決定を行います。",
            body: {
              part1: {
                t1: "クレジットカードは必要ありません",
                t2: "今日からTokyo Immoをご利用ください。",
                t3: "あなたのメールアドレス",
              },
              part2: {
                about: "紹介",
                jobs: "求人",
                services: "サービス",
                terms_and_condition: "利用規約",
                privacy_policy: "プライバシーポリシー",
                cookie_policy: "Cookieポリシー",
              },
              owned: "所有者",
            },
          },
          trustedBy: {
            title: "信頼されています",
          },
          partner:{
            title:database.partner.ja
          }
        },
      },
    },
  });

export default i18n;
