import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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
      en: {
        translation: {
          // here we will place our translations...
          pages: {
            aboutUs: {
              title: "About Us",
              description:
                "TOKYO IMMO offers you apartments, houses or buildings that meet your expectations and helps you get off to a smooth start in Japan. We'll work with you to find the real estate that will give you the peace of mind you're looking for in Japan. Each property is unique. Within the same building, between two properties with identical structures or two adjoining apartments, everything will be different if the location is not exactly the same: sunshine, perception of noise, wind flow... Among the wealth of information available, TOKYO IMMO will do its utmost to find the right property for you. We don't just show you apartments, houses or buildings, we can also take care of the formalities involved in subscribing to the various housing-related services, to help you prepare for your move",
            },
            navbar: {
              home: "Home",
              about: "About Us",
              services: "Services",
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
              title: "Our Blogs",
              legend: "Our Recent News",
              miniTitle:
                "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form. ",
              readMoreButton: "Read More",
              paragraph: {
                part1: {
                  title: "Tokyo Immo on vivreatokyo.com",
                  body: "Coelein looks back on his journey in Japan: 'After doing an exchange program at Okayama University and returning to France to validate my bachelor's degree...",
                },
                part2: {
                  title: "Tokyo Immo on Expat.org",
                  body: "TOKYO IMMO offers you apartments, houses or buildings corresponding to customer expectations and assists them in getting off to a...",
                },
              },
            },
            contactUs: {
              title: "Contact Us",
              form: {
                name: "name",
                email: "email",
                message: "message",
              },
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
          },
        },
      },

      fr: {
        translation: {
          pages: {
            aboutUs: {
              title: "À propos de nous",
              description:
                "TOKYO IMMO vous propose des appartements, maisons ou immeubles qui répondent à vos attentes et vous aident à démarrer en douceur au Japon. Nous travaillerons avec vous pour trouver l'immobilier qui vous offrira la tranquillité d'esprit que vous recherchez au Japon. Chaque propriété est unique. Au sein d'un même immeuble, entre deux biens aux structures identiques ou deux appartements mitoyens, tout sera différent si la localisation n'est pas exactement la même : ensoleillement, perception du bruit, débit du vent... Parmi la richesse des informations disponibles, TOKYO IMMO vous proposera faisons tout notre possible pour trouver le bien qui vous convient. Nous ne vous faisons pas que visiter des appartements, des maisons ou des immeubles, nous pouvons également nous charger des formalités de souscription aux différents services liés au logement, pour vous aider à préparer votre déménagement.",
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
            contactUs: {
              title: "Nous Contacter",
              form: {
                name: "Nom",
                email: "Email",
                message: "Message",
              },
            },

            blogs: {
              title: "Nos Blogs",
              legend: "Nos Actualités Récentes",
              miniTitle:
                "Il existe de nombreuses variations de passages du Lorem Ipsum, mais la majorité ont subi une altération sous une forme ou une autre.",
              readMoreButton: "Lire la suite",
              paragraph: {
                part1: {
                  title: "Tokyo Immo sur vivreatokyo.com",
                  body: "Coelein revient sur son parcours au Japon : « Après avoir effectué un programme d'échange à l'université d'Okayama et être revenu en France pour valider...",
                },
                part2: {
                  title: "Tokyo Immo sur Expat.org",
                  body: "TOKYO IMMO vous propose des appartements, des maisons ou des bâtiments correspondant aux attentes des clients et les aide à s'installer...",
                },
              },
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
          },
        },
      },

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
            contactUs: {
              title: "お問い合わせ",
              form: {
                name: "名前",
                email: "メールアドレス",
                message: "メッセージ",
              },
            },
            blogs: {
              title: "私たちのブログ",
              legend: "最近のニュース",
              miniTitle:
                "Lorem Ipsumのパッセージのバリエーションは多数ありますが、そのほとんどはある種の変更を受けています。",
              readMoreButton: "続きを読む",
              paragraph: {
                part1: {
                  title: "vivreatokyo.comの東京不動産",
                  body: "コエレインは、日本での自分の旅を振り返ります。「岡山大学での交換留学を終え、学士号を取得するためにフランスに戻り...",
                },
                part2: {
                  title: "Expat.orgの東京不動産",
                  body: "TOKYO IMMOは、お客様の期待に応えるアパート、家、または建物を提供し、お客様が円滑に移転するのを手伝います...",
                },
              },
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
          },
        },
      },
    },
  });

export default i18n;
