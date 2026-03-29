import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '₹560',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '₹590',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '₹440',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '₹310',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '₹260',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '₹200',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '₹160',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '₹100',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '₹310',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '₹260',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Recognized for exceptional quality, service, and culinary standards.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Recognized for exceptional growth and innovation in culinary excellence.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Recognized for exceptional quality, service, and culinary standards.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Recognized for exceptional quality, service, and culinary standards.',
  },
];

export default { wines, cocktails, awards };
