

export default function Contact() {

    return (
      <div className="mt-24 max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Get In Touch</h1>
      
      <div className="flex flex-col md:flex-row gap-12 items-center">
        
        <div className="w-full md:w-1/2">
          <img 
            src="" 
            alt="Contact us" 
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <form action="" className="flex flex-col space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium text-left text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="John Doe" 
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 text-left">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="john@example.com" 
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-col">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-1 text-left">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  placeholder="How can we help you?" 
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1 text-left">Message</label>
                <textarea 
                  id="message"
                  rows="5" 
                  placeholder="Your message here..."
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-yellow-500 text-black font-medium py-2 px-4 rounded-md hover:bg-yellow-400 transition duration-300 mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
     
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-gray-100 p-6 rounded-lg mb-10">
          <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Email Us</h3>
          <p className="text-gray-600">info@yourcompany.com</p>
          <p className="text-gray-600">support@yourcompany.com</p>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg mb-10">
          <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Call Us</h3>
          <p className="text-gray-600">+1 (555) 123-4567</p>
          <p className="text-gray-600">+1 (555) 987-6543</p>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg mb-10">
          <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
          <p className="text-gray-600">123 Marketing Street</p>
          <p className="text-gray-600">San Francisco, CA 94103</p>
        </div>
      </div>
    </div>
    );
  }
  