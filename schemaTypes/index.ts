import type { DocumentDefinition, ObjectDefinition } from "sanity";
import { AboutCTA } from "./documents/about/AboutCTA";
import { AboutHero } from "./documents/about/AboutHero";
import { AboutPage } from "./documents/about/AboutPage";
import { AboutStats } from "./documents/about/AboutStats";
import { AboutTeam } from "./documents/about/AboutTeam";
import { AboutTestimonials } from "./documents/about/AboutTestimonials";
import { AboutTitle } from "./documents/about/AboutTitle";
import { AboutValues } from "./documents/about/AboutValues";
import { ContactForm } from "./documents/contact/ContactForm";
import { ContactHero } from "./documents/contact/ContactHero";
import { ContactInfo } from "./documents/contact/ContactInfo";
import { ContactTitle } from "./documents/contact/ContactTitle";
import { HomeAbout } from "./documents/home/HomeAbout";
import { HomeCTA } from "./documents/home/HomeCTA";
import { HomeHero } from "./documents/home/HomeHero";
import { HomePortfolio } from "./documents/home/HomePortfolio";
import { HomeReviews } from "./documents/home/HomeReviews";
import { HomeServices } from "./documents/home/HomeServices";
import { HomeSteps } from "./documents/home/HomeSteps";
import { HomeTitle } from "./documents/home/HomeTitle";
import { Navigation } from "./documents/Navigation";
import { OfferBenefits } from "./documents/offer/OfferBenefits";
import { OfferCTA } from "./documents/offer/OfferCTA";
import { OfferPage } from "./documents/offer/OfferPage";
import { OfferServices } from "./documents/offer/OfferServices";
import { OfferTitle } from "./documents/offer/OfferTitle";
import { PortfolioCTA } from "./documents/portfolio/PortfolioCTA";
import { PortfolioPage } from "./documents/portfolio/PortfolioPage";
import { PortfolioTitle } from "./documents/portfolio/PortfolioTitle";
import { PortfolioSlug } from "./documents/PortfolioSlug";
import { PortfolioTag } from "./documents/PortfolioTag";
import { ProcessCTA } from "./documents/process/ProcessCTA";
import { ProcessFAQ } from "./documents/process/ProcessFAQ";
import { ProcessHero } from "./documents/process/ProcessHero";
import { ProcessSteps } from "./documents/process/ProcessSteps";
import { ProcessTimeline } from "./documents/process/ProcessTimeline";
import { ProcessTitle } from "./documents/process/ProcessTitle";
import { Capsule } from "./objects/Capsule";
import { HCard } from "./objects/cards/HCard";
import { ICard } from "./objects/cards/ICard";
import { IHCard } from "./objects/cards/IHCard";
import { IHHCard } from "./objects/cards/IHHCard";
import { IHLCard } from "./objects/cards/IHLCard";
import { CTA } from "./objects/CTA";
import { FormBoolean } from "./objects/FormBoolean";
import { FormChoice } from "./objects/FormChoice";
import { FormEmail } from "./objects/FormEmail";
import { FormQuestion } from "./objects/FormQuestion";
import { FormSingleChoice } from "./objects/FormSingleChoice";
import { Gallery } from "./objects/Gallery";
import { HeadingSection } from "./objects/HeadingSection";
import { LocalizedString, LocalizedText } from "./objects/Localized";
import { Member } from "./objects/Member";
import { Review } from "./objects/Review";
import { Section } from "./objects/Section";
import { Testimonial } from "./objects/Testimonial";

export type Schema = {
    pages: {
        [key: string]: Page;
    };

    objects: ObjectDefinition[];
};

export type Page = {
    title: string | null;
    documents: DocumentDefinition[];
};

export const schema: Schema = {
    pages: {
        home: {
            title: "Strona główna",
            documents: [
                HomeTitle,
                HomeHero,
                HomeServices,
                HomeAbout,
                HomeSteps,
                HomePortfolio,
                HomeReviews,
                HomeCTA,
            ],
        },
        about: {
            title: "O mnie",
            documents: [
                AboutTitle,
                AboutHero,
                AboutStats,
                AboutPage,
                AboutValues,
                AboutTeam,
                AboutTestimonials,
                AboutCTA,
            ],
        },
        portfolio: {
            title: "Portfolio",
            documents: [PortfolioTitle, PortfolioPage, PortfolioCTA],
        },
        offer: {
            title: "Oferta",
            documents: [
                OfferTitle,
                OfferPage,
                OfferServices,
                OfferBenefits,
                OfferCTA,
            ],
        },
        process: {
            title: "Proces",
            documents: [
                ProcessTitle,
                ProcessHero,
                ProcessSteps,
                ProcessTimeline,
                ProcessFAQ,
                ProcessCTA,
            ],
        },
        contact: {
            title: "Kontakt",
            documents: [ContactTitle, ContactHero, ContactInfo, ContactForm],
        },
        lists: {
            title: null,
            documents: [PortfolioSlug, PortfolioTag],
        },
        singletons: {
            title: null,
            documents: [Navigation],
        },
    },

    objects: [
        HCard,
        ICard,
        IHCard,
        IHHCard,
        IHLCard,
        Member,
        Testimonial,
        CTA,
        Capsule,
        Section,
        HeadingSection,
        Gallery,
        Review,
        LocalizedString,
        LocalizedText,
        FormQuestion,
        FormChoice,
        FormSingleChoice,
        FormBoolean,
        FormEmail,
    ],
};
