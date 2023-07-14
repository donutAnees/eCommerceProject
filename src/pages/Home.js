import HeroSection from "../component/homeComponents/HeroSection";
import LatestProducts from "../component/homeComponents/LatestProducts";
import Review from "../component/homeComponents/Review";
import TrustedSection from "../component/homeComponents/TrustedSection";
export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <LatestProducts></LatestProducts>
      <Review></Review>
      <TrustedSection></TrustedSection>
    </>
  );
}
