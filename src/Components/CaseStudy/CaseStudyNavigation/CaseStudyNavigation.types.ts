export type CaseStudyNavigationItem = {
  label: string;
  title: string;
  to: string;
};

export type CaseStudyNavigationProps = {
  previous?: CaseStudyNavigationItem;
  next?: CaseStudyNavigationItem;
};