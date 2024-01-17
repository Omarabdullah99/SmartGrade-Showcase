import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Student from "./components/Student";


export default function App() {
  return (
    <div className="bg-[#172227] font-[Inter] text-white"> 
    <Navbar />
    <Hero />
    <Student />
    <Footer />
    </div>
  )
}
