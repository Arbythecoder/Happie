import logo from "../assets/logo.svg";

function LandingPage() {
  return (
    <div className="relative">
      <nav className="absolute top-0 left-0 right-0 z-10 h-[99px] px-[65px] flex items-center justify-between bg-white bg-opacity-50">
        <img src={logo} alt="Logo" />
        <button className="text-white px-16 py-5 rounded-[100px] bg-black text-[1.375rem]">
          Get Started
        </button>
      </nav>
      <section className="bg-[url('./assets/hero.png')] bg-cover bg-center h-[45.938rem] px-14 flex items-center">
        <div>
          <h1 className="text-white text-[4rem] leading-[76.8px] font-[700]">
            Be a happie techie
          </h1>
          <p className="text-[#e5e5ea] text-[2rem] leading-[38.4px] font-[400]">
            Track your well-being, avoid burnout, and thrive in tech.
          </p>
          <div className="flex gap-6 mt-12 text-white text-[1.375rem]">
            <button className="px-16 py-5 rounded-[100px] bg-black">
              Get Started
            </button>
            <button className="border-white border rounded-[100px] px-5 py-5 bg-transparent">
              Join the Community
            </button>
          </div>
        </div>
      </section>
      <section className="my-20 mx-11"></section>
    </div>
  );
}

export default LandingPage;
