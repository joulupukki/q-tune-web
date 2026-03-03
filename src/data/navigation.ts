export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Build', href: '/build/' },
  { label: 'Install', href: '/install/' },
  { label: 'Manual', href: '/user-manual/' },
  { label: 'Specs', href: '/specifications/' },
  { label: 'Tools', href: '/image-tools/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];
