import { createContext } from 'react';
import { ConfigContextState } from './types';

const contextDefaultValues: ConfigContextState = {
  configs: {
    name: '',
    domain: '',
    email: {
      address: '',
      subject: '',
      contactDetailsLabel: '',
      phoneLabel: '',
      emailLabel: ''
    },
    content: {
      brandName: '',
      brandWordmarkStart: '',
      brandWordmarkEnd: '',
      technologyListSuffix: '',
      storyNumbers: [],
      skipLinkLabel: '',
      pageTitles: { home: '', healthinote: '', assetService: '', guestFlow: '' },
      hero: { title: '', skills: '', scrollLabel: '' },
      about: { title: '', biography: [], imageAlt: '', capabilities: [], cta: [], ctaLink: '' },
      clients: { title: '', description: '', names: [] },
      selectedWork: { title: '', description: '', linkLabel: '' },
      siteHeader: { homeLabel: '', logoAlt: '', navigationLabel: '', contactLabel: '' },
      caseStudyNavigation: { navigationLabel: '', selectedWorkLabel: '', portfolioLabel: '' }
    },
    contactForm: {
      title: '',
      tagline: '',
      disabledButtonLabel: '',
      enabledButtonLabel: '',
      thankyouMessage: '',
      errorMessage: '',
      requiredFieldsMessage: '',
      labels: {
        nameLabel: '',
        emailLabel:  '',
        contactNumberLabel: '',
        messageLabel: ''
      },
      placeholders: { name: '', email: '', contactNumber: '', message: '' }
    },
    links: {
      github: {
        label: '',
        link: ''
      },
      linkedin: {
        label: '',
        link: ''
      }
    },
    work: {
      selectedWork: []
    },
    caseStudies: {}
  }
};

const ConfigContext = createContext<ConfigContextState>(
  contextDefaultValues
);

export default ConfigContext;
