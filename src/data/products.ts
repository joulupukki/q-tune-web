export interface Product {
  name: string;
  variant: string;
  price: number;
  stripeUrl: string;
  buttonLabel: string;
}

export const products: Product[] = [
  {
    name: '1590B',
    variant: '1590B Kit',
    price: 129,
    stripeUrl: 'https://buy.stripe.com/bJe14namFd3Pgar8yU8og0f',
    buttonLabel: 'Buy 1590B',
  },
  {
    name: '125B',
    variant: '125B Kit',
    price: 129,
    stripeUrl: 'https://buy.stripe.com/fZu28rbqJ4xjcYfdTe8og0e',
    buttonLabel: 'Buy 125B',
  },
  {
    name: 'No Enclosure',
    variant: 'NO Enclosure Kit',
    price: 117,
    stripeUrl: 'https://buy.stripe.com/4gM4gzamFaVH4rJeXi8og0d',
    buttonLabel: 'Buy w/o Enclosure',
  },
];
