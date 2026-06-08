import HeroSection from "@/Components/Hero-section";
import BusinessDivisions from "@/Components/BusinessDivisions";
import WhyChooseUs from "@/Components/WhyChooseUs";
import Products from "@/Components/Products";
import ImpactGallery from "@/Components/ImpactGallery";
import Testimonials from "@/Components/Testimonials";

const Homepage = () => {
  
  return (
    <div className="overflow-hidden bg-white">
      <div>
        <HeroSection /> 
      </div>  
      <BusinessDivisions />
      <WhyChooseUs />
      <Products />
      <ImpactGallery />
      <Testimonials />
    </div>
    
    
  )
}
export default Homepage
      
