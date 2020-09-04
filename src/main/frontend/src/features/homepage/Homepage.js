import React from 'react';
import { useSelector } from 'react-redux';

import { GLogin } from '../auth/GLogin';
import { GLogout } from '../auth/GLogout';
import { selectGoogleAuth } from '../auth/authSlice';
import { CoverImageSlider } from './coverimage/CoverImageSlider';
import { SeeOurProducts } from './common/SeeOurProducts';
import { FeaturedCarousel } from './featured/FeaturedCarousel';
import { TrustedBy } from './common/TrustedBy';
import { ReviewsComponent } from './reviews/ReviewsComponent';
import { NewsLetter } from './common/NewsLetter';
import { WhyChooseUs } from './common/WhyChooseUs';
import { KeyBenefits } from './common/KeyBenefits';
import { OurCompany } from './common/OurCompany';
import { OurProcess } from './common/OurProcess';
import { HomepageIntro } from './common/HomepageIntro';

export const Homepage = () => {
  const googleAuth = useSelector(selectGoogleAuth);

  return (
    <div>
      {/* {googleAuth.token ? <GLogout /> : <GLogin />} */}
      <CoverImageSlider />
      <HomepageIntro />
      <SeeOurProducts />
      <FeaturedCarousel />
      <WhyChooseUs />
      <KeyBenefits />
      <OurCompany />
      <OurProcess />
      <ReviewsComponent />
      <NewsLetter />
      <TrustedBy />
    </div>
  )
}
