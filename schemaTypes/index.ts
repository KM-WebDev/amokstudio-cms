import { FormBoolean } from "./objects/FormBoolean";
import { FormChoice } from "./objects/FormChoice";
import { FormQuestion } from "./objects/FormQuestion";
import { Gallery } from "./objects/Gallery";
import { PortfolioTag } from "./objects/PortfolioTag";
import { Section } from "./objects/Section";
import { SectionColor } from "./objects/SectionColor";
import { AboutPages } from "./sections/AboutPages";
import { ContactInfo } from "./sections/ContactInfo";
import { CTA } from "./sections/CTA";
import { FAQ } from "./sections/FAQ";
import { Features } from "./sections/Features";
import { Form } from "./sections/Form";
import { PortfolioPages } from "./sections/PortfolioPages";
import { PortfolioSlug } from "./sections/PortfolioSlug";
import { Reviews } from "./sections/Reviews";
import { Services } from "./sections/Services";

export const schemaTypes = [
    PortfolioPages,
    PortfolioSlug,
    PortfolioTag,
    SectionColor,
    FormQuestion,
    FormBoolean,
    FormChoice,
    AboutPages,
    Features,
    Services,
    ContactInfo,
    Gallery,
    Reviews,
    Section,
    Form,
    CTA,
    FAQ,
];

// Migrations: https://www.sanity.io/docs/content-lake/schema-and-content-migrations
