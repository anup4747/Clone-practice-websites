export default function Home() {
  return (
    <div className="mt-40 ">
      <div className=" flex flex-col  ">
        <h1 className="text-6xl font-poppins font-bold ">
          The <span className="bg-yellow-200 px-2">Composition Engine</span> for
          daily{" "}
        </h1>
        <h1 className="text-6xl font-poppins mt-5 font-bold">
          retail email personalization{" "}
        </h1>
        <p className="text-balck text-2xl mt-8">
          Fully automated personalization for enterprize retailers that works{" "}
          <br /> seamlessly with your email service provider.
        </p>

        <div className="mt-12 flex flex-col justify-center sm:flex-row gap-4">
          <button className="bg-black text-white px-8 py-4 rounded-md text-xl font-medium hover:bg-gray-800">
            Get Started
          </button>
          <button className="border border-black px-8 py-4 rounded-md text-xl font-medium hover:bg-gray-100">
            Book a Demo
          </button>
        </div>
      </div>

      <div id="features" className="mt-28 bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why choose our Composition Engine?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex justify-center items-center w-full">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl">⚡</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">Automated Workflows</h3>
              <p>
                Set up once and let our AI handle personalization for all your
                email campaigns.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex justify-center items-center w-full">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl">📈</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">Increased Conversions</h3>
              <p>
                Our customers see an average 35% increase in email engagement
                and conversions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex justify-center items-center w-full">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl">🔌</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Easy Integration</h3>
              <p>
                Works with all major ESPs including Mailchimp, Klaviyo, and
                Campaign Monitor.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 mb-32">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Trusted by leading retailers</h2>
          <p className="text-xl text-center text-gray-500 mb-16">Join hundreds of retailers who've transformed their email marketing</p>
          
          <div className="flex flex-wrap justify-center gap-12 items-center">
            <div className="h-12 w-32 bg-gray-200 rounded"></div>
            <div className="h-12 w-32 bg-gray-200 rounded"></div>
            <div className="h-12 w-32 bg-gray-200 rounded"></div>
            <div className="h-12 w-32 bg-gray-200 rounded"></div>
            <div className="h-12 w-32 bg-gray-200 rounded"></div>
          </div>
          
          <div className="mt-20 bg-yellow-50 p-10 rounded-xl">
            <p className="text-xl italic">"The Composition Engine has completely transformed our email marketing strategy. We're seeing 40% higher open rates and our conversions have doubled."</p>
            <div className="mt-6 flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div className="ml-4">
                <p className="font-bold">Sarah Johnson</p>
                <p className="text-gray-600">Marketing Director, Fashion Brand</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
