export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: 'Build', href: '/build/' },
  { label: 'Install', href: '/install/' },
  { label: 'Specs', href: '/specifications/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'About', href: '/about/' },
];
