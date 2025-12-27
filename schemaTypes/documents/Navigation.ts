import { NavigationIcon } from "lucide-react";
import { ALL_FIELDS_GROUP, defineField } from "sanity";
import { defineLocalizedString, defineSingletonDocument } from "../definitions";

export const Navigation = defineSingletonDocument({
    title: "Nawigacja",
    name: "navigation",
    icon: NavigationIcon,
    groups: [
        {
            title: "Główna nawigacja",
            name: "main",
        },
        {
            title: "Reszta nawigacji",
            name: "legal",
        },
        {
            title: "Tytuły kolumn w stopce",
            name: "footerTitles",
        },
        {
            ...ALL_FIELDS_GROUP,
            hidden: true,
        },
    ],
    fields: [
        defineLocalizedString({
            title: "Strona Główna",
            name: "home",
            group: "main",
        }),
        defineLocalizedString({
            title: "O mnie",
            name: "about",
            group: "main",
        }),
        defineLocalizedString({
            title: "Oferta",
            name: "offer",
            group: "main",
        }),
        defineLocalizedString({
            title: "Portfolio",
            name: "portfolio",
            group: "main",
        }),
        defineLocalizedString({
            title: "Proces",
            name: "process",
            group: "main",
        }),
        defineLocalizedString({
            title: "Kontakt",
            name: "contact",
            group: "main",
        }),
        defineLocalizedString({
            title: "Zacznij Projekt",
            name: "startProject",
            group: "main",
        }),

        defineLocalizedString({
            title: "Polityka Prywatności",
            name: "privacyPolicy",
            group: "legal",
        }),
        defineLocalizedString({
            title: "Warunki korzystania z usługi",
            name: "termsOfService",
            group: "legal",
        }),

        defineLocalizedString({
            title: "Nagłówek pierwszej kolumny w stopce",
            name: "footerNavigationHeading",
            group: "footerTitles",
        }),

        defineLocalizedString({
            title: "Nagłówek drugiej kolumny w stopce",
            name: "footerMiddleHeading",
            group: "footerTitles",
        }),
        defineLocalizedString({
            title: "Nagłówek trzeciej kolumny w stopce",
            name: "footerLegalHeading",
            group: "footerTitles",
        }),
        defineField({
            title: "Plik polityki prywatności (PDF)",
            name: "privacyPolicyFile",
            type: "file",
            group: "legal",
        }),
    ],
});

// { name: "Strona Główna", link: "/" },
// { name: "o mnie", link: "/o-mnie" },
// { name: "Oferta", link: "/oferta" },
// { name: "portfolio", link: "/portfolio" },
// { name: "Proces", link: "/proces" },
// { name: "Kontakt", link: "/kontakt" },
//  {
//         name: "Zacznij Projekt",
//         ctaName: "Zacznij Projekt",
//         link: "/kontakt",
//         cta: true,
//     },
