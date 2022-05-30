import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SEO from '@/components/SEO';
import React from 'react';

const ArticleLayout = ({ children, details }) => {
  return (
    <>
      <SEO details={details} />
      <Header />
      <main>{children}</main>
      <Contacts />
      <Footer />
    </>
  );
};

export default ArticleLayout;
