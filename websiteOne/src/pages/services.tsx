export default function Services() {
  return (
    <div className="mt-40">
      {/* Hero Section */}
      <div className="flex flex-col max-w-5xl mx-auto px-4">
        <h1 className="text-6xl font-poppins font-bold">
          Our <span className="bg-yellow-200 px-2">Personalization</span>
        </h1>
        <h1 className="text-6xl font-poppins mt-5 font-bold">
          services for retailers
        </h1>
        <p className="text-black text-2xl mt-8">
          Comprehensive email personalization solutions that drive engagement,
          <br /> increase conversions, and build customer loyalty.
        </p>
      </div>

      {/* Main Services Section */}
      <div className="mt-24 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">What we offer</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Service 1 */}
          <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-center w-full">
              <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">✉️</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Email Personalization</h3>
            <p className="text-lg mb-4">
              Our core service delivers AI-powered personalization for all your
              email campaigns.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>Dynamic content based on customer behavior</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>Personalized product recommendations</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>Customized email send times</span>
              </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-center w-full">
              <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🔍</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Customer Segmentation</h3>
            <p className="text-lg mb-4">
              Advanced segmentation to target the right customers with the right
              messages.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>Behavioral segmentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>Purchase history analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>Engagement-based targeting</span>
              </li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-center w-full">
              <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Analytics & Reporting</h3>
            <p className="text-lg mb-4">
              Comprehensive analytics to measure and optimize your email
              campaigns.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>Real-time performance metrics</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>A/B testing analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>ROI reporting</span>
              </li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-center w-full">
              <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🛠️</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Implementation & Support
            </h3>
            <p className="text-lg mb-4">
              End-to-end service to ensure smooth integration and ongoing
              success.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>Dedicated implementation specialist</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>ESP integration assistance</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>Ongoing technical support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="mt-14 bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            How our Composition Engine works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-yellow-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Connect</h3>
              <p>
                Easily integrate with your existing email service provider
                through our simple API.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-yellow-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Configure</h3>
              <p>
                Set up your personalization rules and preferences in our
                intuitive dashboard.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-yellow-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Convert</h3>
              <p>
                Watch as your email engagement and conversion rates
                significantly improve.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing CTA */}
      <div className="mt-32 mb-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to transform your email marketing?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Choose the plan that's right for your business and start seeing
            results immediately.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-black text-white px-8 py-4 rounded-md text-xl font-medium hover:bg-gray-800">
              View Pricing
            </button>
            <button className="border border-black px-8 py-4 rounded-md text-xl font-medium hover:bg-gray-100">
              Book a Demo
            </button>
          </div>

          <div className="mt-16 bg-yellow-50 p-10 rounded-xl">
            <p className="text-xl italic">
              "The implementation was incredibly smooth, and the results were
              immediate. Our team now saves hours each week while delivering
              better results."
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div className="ml-4 text-left">
                <p className="font-bold">Michael Chen</p>
                <p className="text-gray-600">
                  E-commerce Manager, Home Goods Retailer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
