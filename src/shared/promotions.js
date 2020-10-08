/**
 * images imported as objects to work around broken paths from the pre-deployment build.
 * Pre-deployment to github pages, the app used relative paths in the object properties to grab the images from the images folder.
 * Image paths no longer worked (though correctly written) after npm run deploy.
 */

import breadcrumbTrail from '../images/breadcrumb-trail.jpg';

export const PROMOTIONS = [
  {
    id: 0,
    name: 'Mountain Adventure',
    image: breadcrumbTrail,
    featured: true,
    description:
      'Book a 5-day mountain trek with a seasoned outdoor guide! Fly fishing equipment and lessons provided.',
  },
];
