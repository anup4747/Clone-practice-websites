

export default function About() {

  return (
 <div className="mt-30">
    <div className="mt-24 bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="mb-4">
                Founded in 2021, our company was born from a simple observation: despite advances in AI and personalization technology, most retailers were still sending the same generic emails to thousands of customers.
              </p>
              <p className="mb-4">
                Our founders, with backgrounds in retail technology and machine learning, set out to build a solution that would make sophisticated email personalization accessible to retailers of all sizes.
              </p>
              <p>
                After two years of development and testing with leading brands, we launched the Composition Engine, revolutionizing how retailers approach email marketing.
              </p>
            </div>
            <div className="md:w-1/2">
          
              <div className="bg-gray-200 h-80 w-full rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Customer-Centric</h3>
              <p>We believe personalized experiences should feel authentic and valuable, not intrusive.</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p>We're constantly pushing the boundaries of what's possible with AI and personalization.</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Partnership</h3>
              <p>We succeed when our customers succeed. We're partners, not just providers.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Meet The Team</h2>
          <p className="text-xl text-center text-gray-500 mb-16">The experts behind our Composition Engine</p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Team member 1 */}
            <div className="text-center">
              <div className="bg-gray-200 w-40 h-40 mx-auto rounded-full mb-4"></div>
              <h3 className="font-bold text-lg">Nilesh Pawar</h3>
              <p className="text-gray-600">CEO & Co-Founder</p>
            </div>
            {/* Team member 2 */}
            <div className="text-center">
              <div className="bg-gray-200 w-40 h-40 mx-auto rounded-full mb-4"></div>
              <h3 className="font-bold text-lg">Anjali Gossavi</h3>
              <p className="text-gray-600">CTO & Co-Founder</p>
            </div>
            {/* Team member 3 */}
            <div className="text-center">
              <div className="bg-gray-200 w-40 h-40 mx-auto rounded-full mb-4"></div>
              <h3 className="font-bold text-lg">Samrath Joshi</h3>
              <p className="text-gray-600">Head of Product</p>
            </div>
            {/* Team member 4 */}
            <div className="text-center">
              <div className="bg-gray-200 w-40 h-40 mx-auto rounded-full mb-4"></div>
              <h3 className="font-bold text-lg">Gopal Shinde</h3>
              <p className="text-gray-600">Lead AI Engineer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 mb-24">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <p className="text-5xl font-bold text-yellow-500">200+</p>
              <p className="text-xl mt-2">Retail Partners</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-yellow-500">35%</p>
              <p className="text-xl mt-2">Average Conversion Increase</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-yellow-500">1B+</p>
              <p className="text-xl mt-2">Personalized Emails Sent</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 py-16 mb-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl mb-8">We're always looking for talented individuals to help us reshape the future of retail personalization.</p>
          <button className="bg-black text-white px-8 py-4 rounded-md text-xl font-medium hover:bg-gray-800">View Open Positions</button>
        </div>
      </div>

 </div>
  );
}
