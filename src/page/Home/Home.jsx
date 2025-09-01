import React from "react";
import Navbar from "../../component/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Header Section */}
      <section
        style={{
          backgroundImage: "url('/background/bg-home.jpg')", // path file gambarnya
          backgroundSize: "cover", // supaya gambar menutupi penuh
          backgroundPosition: "center", // posisi gambar di tengah
          backgroundRepeat: "no-repeat", // supaya tidak berulang
          height: "100vh", // tinggi penuh layar
        }}
        className="pt-16 "
      >
        {/* <h1 className="text-2xl font-bold text-center">Ini Adalah halaman Home</h1> */}
      </section>
    </div>
  );
};

export default Home;
