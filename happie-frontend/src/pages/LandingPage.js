import logo from "../assets/logo.svg";
import burnoutdetection from "../assets/burnout-detection.svg";
import productivity from "../assets/productivity.svg";
import peersupport from "../assets/peer-support.svg";
import resourcelibrary from "../assets/resource-library.svg";
import spiralarrow from "../assets/spiral-pointer-down.svg";
import techqueen from "../assets/tech-queen.svg";
import howitworks1 from "../assets/how-it-works1.svg";
import howitworks2 from "../assets/how-it-works2.svg";
import howitworks3 from "../assets/how-it-works3.svg";
import bulletlist from "../assets/black-bullet-list.svg";
import Footer from "../components/footer.js";

function LandingPage() {
  return (
    <div className="relative">
      {/* nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-[6.188rem] px-[4.063rem] flex items-center justify-between bg-[#f6f6f6] bg-opacity-50">
        <img src={logo} alt="Logo" />
        <button className="text-white px-5 py-5 rounded-[100px] bg-[#8600C9] text-[1.375rem]">
          Get Started
        </button>
      </nav>

      {/* section 1 */}
      <section className="bg-[url('./assets/hero-image.svg')] bg-cover bg-center h-[45.938rem] px-14 flex justify-center text-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="text-white z-10">
          <h1 className="text-[5rem] leading-[96px] font-bold mb-2 mt-[18.75rem]">
            Be a happie techie
          </h1>
          <p className="text-4xl leading-[57.6px] font-normal">
            Track your well-being, avoid burnout, and thrive in tech.
          </p>
          <div className="gap-6 mt-14 text-white text-[1.375rem] flex justify-center">
            <button className="px-16 py-5 rounded-[100px] bg-[#8600C9]">
              Get Started
            </button>
            <button className="border-white border rounded-[100px] px-5 py-5 bg-transparent">
              Join the Community
            </button>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className="my-20 mx-11 bg-[#FAFAFA] flex items-center justify-center h-[78.688rem] z-10 relative">
        <div className="relative">
          <img src={techqueen} alt="a happy woman in tech" />
          <div className="absolute top-[-210px] left-[-160px] bg-white px-10 py-[70px] rounded-[20px] max-w-[407px] text-center shadow-lg z-20">
            <div className="flex items-center justify-center mb-7">
              <img
                src={burnoutdetection}
                alt="Burnout Detection"
                className="h-[90px] w-[90px]"
              />
            </div>
            <h3 className="text-4xl font-[500px] mb-4">Burnout Detection</h3>
            <p className="text-[#656565] font-[500px] text-[20px] leading-6">
              Track your mental health and receive personalized insights to
              prevent burnout.
            </p>
          </div>
          {/* Other divs */}
          <div className="absolute top-2 right-[-250px] bg-white px-10 py-[70px] rounded-[20px] max-w-[407px] text-center shadow-lg">
            <div className="flex items-center justify-center mb-7">
              <img
                src={peersupport}
                alt="Peer support"
                className="h-[90px] w-[90px]"
              />
            </div>
            <h3 className="text-4xl font-[500px] mb-4">Peer Support</h3>
            <p className="text-[#656565] font-[500px] text-[20px] leading-6">
              Connect with fellow tech professionals in a safe, anonymous
              environment.
            </p>
          </div>
          <div className="absolute bottom-[-40px] left-[-200px] bg-white px-10 py-[70px] rounded-[20px] max-w-[407px] text-center shadow-lg">
            <div className="flex items-center justify-center mb-7">
              <img
                src={resourcelibrary}
                alt="Resource library"
                className="h-[90px] w-[90px]"
              />
            </div>
            <h3 className="text-4xl font-[500px] mb-4">Resource library</h3>
            <p className="text-[#656565] font-[500px] text-[20px] leading-6">
              Access a curated collection of mental health resources tailored
              for tech professionals.
            </p>
          </div>
          <div className="absolute bottom-[-260px] right-[-130px] bg-white px-10 py-[70px] rounded-[20px] max-w-[407px] text-center shadow-lg">
            <div className="flex items-center justify-center mb-7">
              <img
                src={productivity}
                alt="Resource library"
                className="h-[90px] w-[90px]"
              />
            </div>
            <h3 className="text-4xl font-[500px] mb-4">Productivity</h3>
            <p className="text-[#656565] font-[500px] text-[20px] leading-6">
              Boost your focus and well-being with our integrated Pomodoro and
              mindfulness tools.
            </p>
          </div>
          <div className="absolute bottom-[-440px] left-[220px]">
            <img
              src={spiralarrow}
              alt="spiral arrow down"
              className="h-[338.26px]"
            />
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="mt-48 mb-20 mx-11 py-[1.875rem]">
        <h3 className="font-bold text-5xl text-center mb-[3.313rem]">
          How it works
        </h3>
        <div className="flex gap-[3.75rem]">
          <div className="flex gap-4">
            <img src={howitworks1} alt="how it works" />
            <div className="flex gap-4 flex-col">
              <img src={howitworks3} alt="how it works" />
              <img src={howitworks2} alt="how it works" />
            </div>
          </div>
          <div className="mt-[1.875rem]">
            <div className="flex items-center gap-[7.125rem]">
              <div className="flex gap-6">
                <img src={bulletlist} alt="bullet list" />
                <p className="text-[2rem] text-[#2E2E2E]">Sign up</p>
              </div>
              <div className="flex gap-[1.875rem] items-center">
                <div className="h-[10.75rem] w-[1px] bg-[#8E8E93]"></div>
                <p className="max-w-[30rem] text-[#8E8E93] text-[2rem]">
                  Join our community with just a few clicks. Create your free
                  account, and you’re ready to begin your mental wellness
                  journey.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[1.688rem] mt-[2.5rem]">
              <div className="flex gap-6">
                <img src={bulletlist} alt="bullet list" />
                <p className="text-[2rem] text-[#2E2E2E]">Check in daily</p>
              </div>
              <div className="flex gap-[1.875rem] items-center">
                <div className="h-[10.75rem] w-[1px] bg-[#8E8E93]"></div>
                <p className="max-w-[30rem] text-[#8E8E93] text-[2rem]">
                  Spend less than a minute each day checking in with yourself.
                  Track your mood, energy levels, and stress with quick, simple
                  prompts.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[3.438rem] mt-[2.5rem]">
              <div className="flex gap-6">
                <img src={bulletlist} alt="bullet list" />
                <p className="text-[2rem] text-[#2E2E2E]">Get support</p>
              </div>
              <div className="flex gap-[1.875rem] items-center">
                <div className="h-[10.75rem] w-[1px] bg-[#8E8E93]"></div>
                <p className="max-w-[30rem] text-[#8E8E93] text-[2rem]">
                  With insights from your check-ins, explore mindfulness
                  exercises, break-timers, and peer support whenever you need
                  it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;
