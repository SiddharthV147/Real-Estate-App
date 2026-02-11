import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react"; // Added useRef
import bg from "/home-bg.jpg";
import Navbar from "../components/Navbar";

const descriptions = [
  {
    id: 1,
    title: "The Glass House",
    location: "Malibu, California",
    price: "$4,500,000",
    details: "Floor-to-ceiling windows with a 360-degree ocean view."
  },
  {
    id: 2,
    title: "Urban Loft",
    location: "Brooklyn, New York",
    price: "$1,200,000",
    details: "Industrial style with exposed brick and 20ft ceilings."
  },
  {
    id: 3,
    title: "Mountain Retreat",
    location: "Aspen, Colorado",
    price: "$3,100,000",
    details: "A cozy timber-frame home perfect for winter skiing."
  }
];

function DescriptionCard({ data }) {
  return (
    // w-screen ensures each card takes up exactly one full viewport width
    <div className="w-screen h-screen flex-shrink-0 flex items-center justify-center p-8">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-white shadow-2xl">
        <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">
          Featured Property
        </span>
        <h2 className="text-6xl font-bold mt-2">{data.title}</h2>
        <p className="text-2xl text-gray-300 mt-2">{data.location}</p>
        <div className="h-[1px] w-full bg-white/20 my-8"></div>
        <p className="text-xl leading-relaxed text-gray-200">{data.details}</p>
        <div className="mt-10 flex items-center justify-between">
          <span className="text-4xl font-light">{data.price}</span>
          <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

function Home() {
  // Reference for the horizontal section
  const targetRef = useRef(null);
  
  // Track scroll specifically for the horizontal section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Main Page Scroll (For Hero Fade) - we use the global scroll for this
  const { scrollYProgress: globalScroll } = useScroll();
  const heroScale = useTransform(globalScroll, [0, 0.1], [1, 0.8]);
  const heroOpacity = useTransform(globalScroll, [0, 0.1], [1, 0]);

  // Horizontal Movement: Moves from 0% to -200% (covering 3 cards)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  return (
    <div className="relative bg-black">
      {/* Fixed Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* SECTION 1: HERO (Stays Vertical) */}
      <motion.div
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative z-10 h-screen flex flex-col text-white"
      >
        <Navbar />
        <div className="flex-1 flex justify-center items-center flex-col">
          <h1 className="text-9xl font-bold">HOMES</h1>
          <h2 className="text-3xl font-semibold opacity-70 text-center px-4">
            Ghar dhundo gareebo
          </h2>
        </div>
      </motion.div>

      {/* SECTION 2: HORIZONTAL CARDS */}
      {/* h-[600vh] controls the speed. Higher = Slower scroll. */}
      <div ref={targetRef} className="relative h-[600vh] z-10">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <motion.div style={{ x }} className="flex">
            {descriptions.map((item) => (
              <DescriptionCard key={item.id} data={item} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer / End of content */}
      <div className="h-screen bg-white relative z-20 flex items-center justify-center">
        <h2 className="text-black text-5xl font-bold italic">End of List.</h2>
      </div>
    </div>
  );
}

export default Home;