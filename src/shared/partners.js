/**
 * images imported as objects to work around broken paths from the pre-deployment build.
 * Pre-deployment to github pages, the app used relative paths in the object properties to grab the images from the images folder.
 * Image paths no longer worked (though correctly written) after npm run deploy.
 */

import bootstrapLogo from '../images/bootstrap-logo.png';
import gitLogo from '../images/git-logo.png';
import mongoLogo from '../images/mongo-logo.png';
import nodeLogo from '../images/node-logo.png';

export const PARTNERS = [
  {
    id: 0,
    name: 'Bootstrap Outfitters',
    image: bootstrapLogo,
    featured: false,
    description:
      "Bootstrap Outfitters supplies you with the gear you need at prices you can't beat.",
  },
  {
    id: 1,
    name: 'Git Out Expeditions',
    image: gitLogo,
    featured: false,
    description:
      'Join Git Out Expeditions to explore new horizons with a group of other adventurers!',
  },
  {
    id: 2,
    name: 'Mongo Fly Shop',
    image: mongoLogo,
    featured: false,
    description:
      'Need a new fishing pole, a tacklebox, or flies of all kinds? Stop by Mongo Fly Shop.',
  },
  {
    id: 3,
    name: 'Node Outdoor Apparel',
    image: nodeLogo,
    featured: true,
    description:
      'From polar fleeces to swimsuits, hiking boots to waders, a visit to Node will be sure to get you covered.',
  },
];
