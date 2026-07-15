export interface Product {
  name: string;
  variant: string;
  price: number;
  stripeUrl: string;
  buttonLabel: string;
  status: 'available' | 'preorder' | 'soldout';
}

// The solderless Q-Tune — sold as a single 1590B kit, no other options. In stock.
export const qTuneProduct: Product = {
  name: 'Q-Tune',
  variant: 'Q-Tune (1590B)',
  price: 129,
  stripeUrl: 'https://buy.stripe.com/14AeVdeCV2pb1fx02o8og0m',
  buttonLabel: 'Buy Q-Tune',
  status: 'available',
};

// The original Q-Tune Solder Kit (Through-Hole) — for builders who want to solder.
export const solderKitProducts: Product[] = [
  {
    name: '1590B',
    variant: '1590B Kit',
    price: 129,
    stripeUrl: 'https://buy.stripe.com/bJe14namFd3Pgar8yU8og0f',
    buttonLabel: 'Buy 1590B',
    status: 'soldout',
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
