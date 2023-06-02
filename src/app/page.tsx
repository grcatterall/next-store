import ProductBannerList from "./components/store/ProductBannerList";
import Footer from "./components/ui/blocks/footer";

const Home = () => {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div id="hero" className="pt-5 lg:flex items-center">
          <div className="px-5 sm:px-10 md:px-10 md:flex lg:block lg:w-1/2 lg:max-w-3xl lg:mr-8 lg:px-20">
            <div className="md:w-1/2 md:mr-10 lg:w-full lg:mr-0">
              <h1 className="text-3xl xl:text-4xl font-black md:leading-none xl:leading-tight">
                Hire a Designer Near You
              </h1>
              <p className="mt-4 xl:mt-2">
                World Class Designers, just for you on contract, full-time or part-time, whatever you need.
              </p>
            </div>

            <div className="flex-1">
              <div className="relative mt-4 md:mt-0 lg:mt-4">
                <div className="pl-4 pr-4 h-full absolute bottom-0 left-0 flex items-center">
                  <svg className="text-gray-700 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <input type="text" className="w-full border bg-gray-100 px-4 py-4 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded pl-12" placeholder="Type (e.g junior, senior)" />
              </div>
              <div className="relative mt-4">
                <div className="pl-4 pr-4 h-full absolute bottom-0 left-0 flex items-center">
                  <svg className="text-gray-700 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" /></svg>
                </div>
                <input type="text" className="w-full border bg-gray-100 px-4 py-4 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded pl-12" placeholder="Mountain View, California" />
              </div>
              <div>
                <button className="transition-all duration-300 mt-5 w-full border border-transparent rounded font-semibold tracking-wide text-sm px-5 py-4 focus:outline-none focus:shadow-outline bg-indigo-500 text-gray-100 hover:bg-indigo-600 hover:text-gray-200">Find Designers</button>
              </div>
            </div>
          </div>
          <div className="mt-6 w-full flex-1 lg:mt-0">
            <div></div>
            <img className="" src="https://images.unsplash.com/photo-1524749292158-7540c2494485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=85" />
          </div>
        </div>

        <div className="p-5 sm:px-10 md:px-20" id="companies">
          <div className="max-w-screen-xl mx-auto">
            <img className="mx-auto" src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846471026680582071-Strip-Payment-Logos.png" />
          </div>
        </div>

       <ProductBannerList />

        <div className="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8 bg-gray-100" id="cards">
          <div className="max-w-screen-xl mx-auto">
            <h3 className="leading-none font-black text-3xl">Popular Designers</h3>

            <div className="lg:flex justify-between lg:mt-8">
              <div className="lg:mx-2 flex flex-col items-center">
                <div className="flex-1 flex w-full max-w-sm pt-16 lg:pt-0">
                  <div className="w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg rounded bg-gray-100 relative">
                    <div className="text-lg font-bold text-gray-700 leading-tight">Senior Designer - Figma</div>
                    <div>
                      <div className="flex justify-between mt-6 text-xs font-bold">
                        <div className="flex items-start">
                          <svg className="text-gray-400 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          <span className="ml-1 text-gray-500">New York City</span>
                        </div>

                        <div className="flex items-start ml-4">
                          <svg className="text-gray-400 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect xmlns="http://www.w3.org/2000/svg" x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                            <path xmlns="http://www.w3.org/2000/svg" d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                          </svg>
                          <span className="ml-1 text-gray-500">Google (3 Years)</span>
                        </div>
                      </div>
                      <div className="text-center flex flex-row justify-between flex-wrap justify-between items-center text-xs font-bold">
                        <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-green-200 text-green-600">Full Time</span>
                        <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-indigo-200 text-indigo-600">Remote</span>
                        <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-blue-200 text-blue-600">4 Years Exp</span>
                        <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-purple-200 text-purple-600">$30/Hr</span>
                      </div>
                      <div className="mt-12 flex items-center">
                        <div className="ml-5">
                          <div className="font-bold text-gray-800">
                            Sasha Sloan
                          </div>
                          <div className="text-xs text-gray-500">Hired 3 Hours ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:mx-2 flex flex-col items-center">
                <div className="flex-1 flex w-full max-w-sm pt-16 lg:pt-0">
                  <div className="w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg rounded bg-gray-100 relative">
                    <div className="text-lg font-bold text-gray-700 leading-tight">Design Leader- InVision</div>
                    <div>
                      <div className="flex justify-between mt-6 text-xs font-bold">
                        <div className="flex items-start">
                          <svg className="text-gray-400 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          <span className="ml-1 text-gray-500">Palo Alto</span>
                        </div>

                        <div className="flex items-start ml-4">
                          <svg className="text-gray-400 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect xmlns="http://www.w3.org/2000/svg" x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                            <path xmlns="http://www.w3.org/2000/svg" d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                          </svg>
                          <span className="ml-1 text-gray-500">Amazon (8 Years)</span>
                        </div>
                      </div>
                      <div className="text-center flex flex-row justify-between flex-wrap justify-between items-center text-xs font-bold">
                        <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-yellow-200 text-yellow-600">Part Time</span>
                        <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-indigo-200 text-indigo-600">Remote</span>
                        <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-blue-200 text-blue-600">14 Years Exp</span>
                        <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-purple-200 text-purple-600">$45/Hr</span>
                      </div>
                      <div className="mt-12 flex items-center">
                        <div className="ml-4">
                          <div className="font-bold text-gray-800">
                            Nathan Lan
                          </div>
                          <div className="text-xs text-gray-500">Hired 9 Hours ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:mx-2 flex flex-col items-center">
                <div className="flex-1 flex w-full max-w-sm pt-16 lg:pt-0">
                  <div className="w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg rounded bg-gray-100 relative">
                    <div className="text-lg font-bold text-gray-700 leading-tight">Junior Designer - Figma</div>
                    <div>
                      <div className="flex justify-between mt-6 text-xs font-bold">
                        <div className="flex items-start">
                          <svg className="text-gray-400 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          <span className="ml-1 text-gray-500">San Francisco</span>
                        </div>

                        <div className="flex items-start ml-4">
                          <svg className="text-gray-400 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect xmlns="http://www.w3.org/2000/svg" x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                            <path xmlns="http://www.w3.org/2000/svg" d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                          </svg>
                          <span className="ml-1 text-gray-500">AirBnB (1 Years)</span>
                        </div>
                      </div>
                      <div className="text-center flex flex-row justify-between flex-wrap justify-between items-center text-xs font-bold">
                        <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-yellow-200 text-yellow-600">Part Time</span>
                        <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-indigo-200 text-indigo-600">Remote</span>
                        <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-blue-200 text-blue-600">2 Years Exp</span>
                        <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-purple-200 text-purple-600">$20/Hr</span>
                      </div>
                      <div className="mt-12 flex items-center">
                        <div className="ml-4">
                          <div className="font-bold text-gray-800">
                            Jeremy Daer
                          </div>
                          <div className="text-xs text-gray-500">Hired 2 Days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8 bg-indigo-100" id="blog-posts">
          <div className="max-w-screen-xl mx-auto">
            <div className="xl:flex">
              <div>
                <h3 className="leading-none font-black text-3xl">Popular Posts</h3>
                <div className="flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-around">
                  <a href="https://owaiskhan.me" className="flex w-full max-w-sm mt-6 lg:mt-8 xl:mr-8">
                    <div className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg bg-gray-100 relative">
                      <div className="p-6">
                        <div className="text-lg font-bold">Tips for creating an amazing design system</div>
                        <div className="mt-2 text-gray-900 text-sm">
                          Learn how to create a new design system that is beautiful and efficient for creating your UI
                          components.
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="https://timerse.com" className="flex w-full max-w-sm mt-6 lg:mt-8 xl:mr-8">
                    <div className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg bg-gray-100 relative">
                      <div className="p-6">
                        <div className="text-lg font-bold">Using a drawing tablet to create beautiful icons</div>
                        <div className="mt-2 text-gray-900 text-sm">
                          Good Icons are hard to come by. This article guides you on how to create beautiful sketched
                          icons using a drawing pad.
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-12 xl:mt-0 xl:ml-8">
                <h3 className="leading-none font-black text-3xl">Recent Posts</h3>
                <div className="flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-around xl:flex-col">
                  <a href="https://owaiskhan.me" className="flex w-full max-w-sm mt-6 lg:mt-8">
                    <div className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg
                    bg-gray-100 relative xl:flex xl:flex-row-reverse xl:items-center xl:px-6 xl:py-8">
                      <div className="p-6 xl:p-0">
                        <div className="text-lg font-bold">How to work effectively with freelancers</div>
                        <div className="mt-2 text-gray-900 text-sm xl:hidden">
                          Hiring a freelancer for your new project can be challenging if you&apos;ve never done before. Learn
                          some tips that will allow you to have a better experience working with freelancers
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="https://owaiskhan.me" className="flex w-full max-w-sm mt-6 lg:mt-8">
                    <div className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg
                    bg-gray-100 relative xl:flex xl:flex-row-reverse xl:items-center xl:px-6 xl:py-8">
                      <div className="p-6 xl:p-0">
                        <div className="text-lg font-bold">How to create smooth React Native animations</div>
                        <div className="mt-2 text-gray-900 text-sm xl:hidden">
                          Animations play a vital role in user experience. This article describes how you can create
                          butter smooth 60 FPS animations easily.
                        </div>
                      </div>
                    </div>
                  </a>

                </div>
              </div>
            </div>
          </div>
      </div>
    </main>
    <Footer />
    </>
  )
}

export default Home;