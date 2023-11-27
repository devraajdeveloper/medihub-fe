import Body from "../../components/Body/Body";
import ReviewCard from "../../components/Body/ReviewCard";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
export default function HomePage() {
  return (
    <>

      <div className="Body">
        <Navbar/>
        <Body/>
        <ReviewCard/>
        <Footer/>
      </div>
      
    </>
  );
}
