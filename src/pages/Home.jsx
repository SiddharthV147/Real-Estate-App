import { clamp, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react"; // Added useRef
import bg from "/home-bg.jpg";
import Navbar from "../components/Navbar";
import { tr } from "framer-motion/client";

const descriptions = [
  {
    id: 1,
    title: "The Glass House",
    location: "Malibu, California",
    price: "$4,500,000",
    details: "Floor-to-ceiling windows with a 360-degree ocean view.",
    image: bg
  },
  {
    id: 2,
    title: "Urban Loft",
    location: "Brooklyn, New York",
    price: "$1,200,000",
    details: "Industrial style with exposed brick and 20ft ceilings.",
    image: bg
  },
  {
    id: 3,
    title: "Mountain Retreat",
    location: "Aspen, Colorado",
    price: "$3,100,000",
    details: "A cozy timber-frame home perfect for winter skiing.",
    image: bg
  }
];

function DescriptionCard({ data }) {
  return (
    <div className="w-screen h-screen flex-shrink-0 flex items-center justify-center p-8">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden text-white shadow-2xl">
        
        {/* Image at the top of the card */}
        <div className="w-full h-96 overflow-hidden">
          <img 
            src={data.image} 
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text content below the image */}
        <div className="p-12">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">
            Featured Property
          </span>
          <h2 className="text-4xl font-bold mt-2">{data.title}</h2>
          <p className="text-2xl text-gray-300 mt-2">{data.location}</p>
          {/* <div className="h-[1px] w-full bg-white/20 my-6"></div> */}
          <p className="text-xl leading-relaxed text-gray-200">{data.details}</p>
          {/* <div className="mt-8 flex items-center justify-between">
            <span className="text-4xl font-light">{data.price}</span>
            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
              View Details
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

function Home() {

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Main page scrolling config
  const { scrollYProgress: globalScroll } = useScroll();
  const heroScale = useTransform(globalScroll, [0, 0.1], [1, 0.5]);
  const heroOpacity = useTransform(globalScroll, [0, 0.1], [1, 0]);

  // Horizontal Movement: Moves from 0% to 
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  return (
  <>
    <div 
      className="fixed h-screen w-screen flex"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
    </div>
    <motion.div 
    className="min-h-screen w-screen absolute bg-black/80">
      <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
      >
          {/*   
                  Start Of Hero Section
                ---------------------------------------------------------------------  
          */}
          <motion.div  
            className="relative h-screen flex flex-col pt-5"
            style={{scale: heroScale, opacity: heroOpacity}}
          >
            <Navbar/>
            <div> 
              <div className="flex justify-center items-center w-screen opacity-78 text-white flex-col relative">
                <h1 className="text-[180px] font-serif pt-44">HOMES</h1>
                <h1 className="text-3xl font-serif">We Build Places You Dream Of</h1>
              </div>
            </div>
          </motion.div>
          {/* 
                ---------------------------------------------------------------------  
                End Of Hero Section 
          */}
          {/* 
                  Start Of Description Section
                ---------------------------------------------------------------------  
          */}
          <div ref={targetRef} className="relative h-[300vh] w-screen">
            <div className="sticky top-0 h-screen w-screen overflow-hidden">
              <motion.div
                className="flex h-screen"
                style={{ x }}
              >
                {descriptions.map((item) => (
                  <DescriptionCard key={item.id} data={item} />
                ))}
              </motion.div>
            </div>
          </div>
          {/* 
                ---------------------------------------------------------------------  
                End Of Description Section
          */}           
        </motion.div>
        {/* 
                  Start Of Footer 
                ---------------------------------------------------------------------  
          */}
          <div className="h-96 bg-black text-white">
            <h1>This is footer</h1>
          </div>
          {/* 
                ---------------------------------------------------------------------  
                End Of Footer 
          */} 
    </motion.div>
  </>
  );
}

export default Home;