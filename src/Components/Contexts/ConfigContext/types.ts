import { ReactElement } from 'react';


type LinkItem = {
  link: string,
  label: string
}

export type SiteConfig = {
  name: string,
  domain: string,
  email: {
    address: string,
    subject: string,
    contactDetailsLabel: string,
    phoneLabel: string,
    emailLabel: string
  },
  content: {
    brandName: string,
    brandWordmarkStart: string,
    brandWordmarkEnd: string,
    technologyListSuffix: string,
    storyNumbers: string[],
    skipLinkLabel: string,
    pageTitles: { home: string, healthinote: string, assetService: string, guestFlow: string },
    hero: { title: string, skills: string, scrollLabel: string },
    about: {
      title: string,
      biography: string[],
      imageAlt: string,
      capabilities: { title: string, description: string }[],
      cta: string[],
      ctaLink: string
    },
    clients: { title: string, description: string, names: string[] },
    selectedWork: { title: string, description: string, linkLabel: string },
    siteHeader: { homeLabel: string, logoAlt: string, navigationLabel: string, contactLabel: string },
    caseStudyNavigation: { navigationLabel: string, selectedWorkLabel: string, portfolioLabel: string }
  },
  contactForm: {
    title: string,
    tagline: string,
    disabledButtonLabel: string,
    enabledButtonLabel: string,
    thankyouMessage: string,
    errorMessage: string,
    requiredFieldsMessage: string,
    labels: {
      nameLabel: string,
      emailLabel:  string,
      contactNumberLabel: string,
      messageLabel: string
    },
    placeholders: { name: string, email: string, contactNumber: string, message: string }
  },
  links: {
    [key: string]: LinkItem
  }
  work: {
    selectedWork: SelectedWorkProps[]
  },
  caseStudies: Record<string, Record<string, string>>
}

export type ConfigObject = {
  key: string
  value: unknown 
};

export type ConfigContextState = {
  configs: SiteConfig;
};

export type ProviderPorps = {
  configJson: SiteConfig,
  children: ReactElement
}

export interface SelectedWorkProps   {
  title: string;
  category: string;
  subtitle: string;
  description: string;
  technologies: string[];
  href: string;
}
