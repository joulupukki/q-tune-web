export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Specs', href: '/specifications/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'About', href: '/about/' },
  {
    label: 'Owners',
    children: [
      { label: 'Assembly Guide', href: '/assembly/' },
      { label: 'Solder Kit Build', href: '/build/' },
      { label: 'Firmware Install', href: '/install/' },
      { label: 'User Manual', href: '/user-manual/' },
      { label: 'Image Tools', href: '/image-tools/' },
    ],
  },
  { label: 'Contact', href: '/contact/' },
];
