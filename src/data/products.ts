export interface Product {
  name: string;
  variant: string;
  price: number;
  stripeUrl: string;
  buttonLabel: string;
  status: 'available' | 'preorder';
}

// The Q-Tune kit — the standard, solderless product. Pre-orders ship June–July 2026.
// TODO: replace placeholder Stripe URLs with the real pre-order payment links.
export const qTuneProducts: Product[] = [
  {
    name: '1590B',
    variant: '1590B Kit',
    price: 129,
    stripeUrl: 'https://buy.stripe.com/PLACEHOLDER_QTUNE_PREORDER_1590B',
    buttonLabel: 'Pre-Order 1590B',
    status: 'preorder',
  },
  {
    name: '125B',
    variant: '125B Kit',
    price: 129,
    stripeUrl: 'https://buy.stripe.com/PLACEHOLDER_QTUNE_PREORDER_125B',
    buttonLabel: 'Pre-Order 125B',
    status: 'preorder',
  },
  {
    name: 'No Enclosure',
    variant: 'No Enclosure Kit',
    price: 117,
    stripeUrl: 'https://buy.stripe.com/PLACEHOLDER_QTUNE_PREORDER_NO_ENCLOSURE',
    buttonLabel: 'Pre-Order w/o Enclosure',
    status: 'preorder',
  },
];

// The original Q-Tune Solder Kit (Through-Hole) — for builders who want to solder.
export const solderKitProducts: Product[] = [
  {
    name: '1590B',
    variant: '1590B Kit',
    price: 129,
    stripeUrl: 'https://buy.stripe.com/bJe14namFd3Pgar8yU8og0f',
    buttonLabel: 'Buy 1590B',
    status: 'available',
  },
  {
    name: '125B',
    variant: '125B Kit',
    price: 129,
    stripeUrl: 'https://buy.stripe.com/fZu28rbqJ4xjcYfdTe8og0e',
    buttonLabel: 'Buy 125B',
    status: 'available',
  },
  {
    name: 'No Enclosure',
    variant: 'NO Enclosure Kit',
    price: 117,
    stripeUrl: 'https://buy.stripe.com/4gM4gzamFaVH4rJeXi8og0d',
    buttonLabel: 'Buy w/o Enclosure',
    status: 'available',
  },
];
