import { PortfolioInfo } from "./sections/PortfolioInfo";
import { SectionColor } from "./objects/SectionColor";
import { FormChoice } from "./objects/FormChoice";
import { Portfolio } from "./sections/Portfolio";
import { Features } from "./sections/Features";
import { Services } from "./sections/Services";
import { Contact } from "./sections/Contact";
import { Gallery } from "./objects/Gallery";
import { Reviews } from "./sections/Reviews";
import { Section } from "./objects/Section";
import { About } from "./sections/About";
import { Form } from "./sections/Form";
import { Hero } from "./sections/Hero";
import { CTA } from "./sections/CTA";
import { FAQ } from "./sections/FAQ";
import { FormQuestion } from "./objects/FormQuestion";
import { FormBoolean } from "./objects/FormBoolean";

export const schemaTypes = [
    PortfolioInfo,
    SectionColor,
    FormQuestion,
    FormBoolean,
    FormChoice,
    Portfolio,
    Features,
    Services,
    Contact,
    Gallery,
    Reviews,
    Section,
    About,
    Form,
    Hero,
    CTA,
    FAQ,
];

// Migrations: https://www.sanity.io/docs/content-lake/schema-and-content-migrations
