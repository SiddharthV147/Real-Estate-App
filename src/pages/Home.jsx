import { motion } from "framer-motion";
import bg from "/home-bg.jpg";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <motion.div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Page content */}
      <div className="relative z-10 text-white">        
        { /* Navbar */}
        <Navbar />

        <div className="flex justify-center items-center flex-col py-32 font-stretch-125%">
            <h1 className="text-9xl font-bold">HOMES</h1>
            <h2 className="text-3xl font-semibold">Ghar dhundo gareebo</h2> 
        </div>

      </div>
    </motion.div>
  );
}

export default Home;
