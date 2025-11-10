import { Portfolio } from "./sections/Portfolio";
import { Gallery } from "./objects/Gallery";
import { Section } from "./objects/Section";
import { SectionColor } from "./objects/SectionColor";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { Contact } from "./sections/Contact";
import { About } from "./sections/About";
import { PortfolioInfo } from "./sections/PortfolioInfo";
import { Features } from "./sections/Features";
import { FAQ } from "./sections/FAQ";
import { CTA } from "./sections/CTA";
import { Reviews } from "./sections/Reviews";

export const schemaTypes = [
    Gallery,
    Section,
    Portfolio,
    Contact,
    Hero,
    About,
    PortfolioInfo,
    SectionColor,
    Services,
    Features,
    Reviews,
    FAQ,
    CTA,
];

// Migrations: https://www.sanity.io/docs/content-lake/schema-and-content-migrations
