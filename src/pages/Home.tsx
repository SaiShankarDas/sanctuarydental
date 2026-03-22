import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import BookingBar from '../components/home/BookingBar';
import Specializations from '../components/home/Specializations';
import BeforeAfter from '../components/home/BeforeAfter';
import Features from '../components/home/Features';
import DoctorProfile from '../components/home/DoctorProfile';
import Reviews from '../components/home/Reviews';
import Location from '../components/home/Location';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Best Dental Clinic in Sanctuary | Advanced Dental Care</title>
        <meta name="description" content="Experience top-tier dental care in our tranquil sanctuary. Book your appointment in under 15 minutes." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Sanctuary Dental",
              "image": "",
              "url": "https://www.sanctuarydental.com",
              "telephone": "+1234567890",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Sanctuary Blvd",
                "addressLocality": "City",
                "addressRegion": "ST",
                "postalCode": "12345",
                "addressCountry": "US"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="pt-20 min-h-screen">
        <Hero />
        <BookingBar />
        <Specializations />
        <BeforeAfter />
        <Features />
        <DoctorProfile />
        <Reviews />
        <Location />
      </div>
    </>
  );
}
