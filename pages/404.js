export default function pageNotFound() {
    return (
        <div>
            <section className="pb-40 pt-40 md:pt-96 bg-black relative">
  <div className="hidden md:block absolute top-0 left-0 w-8 h-full bg-white"></div>
  <div className="container px-4 mx-auto">
    <div className="max-w-xs sm:max-w-xl lg:max-w-4xl 2xl:max-w-6xl sm:ml-12 md:ml-24">
      <h2 className="text-4xl sm:text-6xl lg:text-8xl 2xl:text-9xl text-white mb-24">
        <span className="relative">
          <span>Something has</span>
          <div className="hidden sm:block absolute bottom-0 left-0 mb-2 sm:mb-4 2xl:mb-8 h-px w-full bg-white"></div>
        </span>
        <br/>
        <span className="relative">
          <span>gone wrong.</span>
          <div className="hidden sm:block absolute bottom-0 left-0 mb-2 sm:mb-4 2xl:mb-8 h-px w-full bg-white"></div>
        </span>
      </h2>
      <p className="flex items-center mb-16">
        <span className="mr-4 text-xl text-white">We can&rsquo;t find that page. Back to home.</span>
        <span>
          <svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.9983 2.97487L12.8444 2.94712L12.9539 11.4487L1.76433 0.259107L0.261729 1.76171L11.4513 12.9513L2.94974 12.8418L2.97749 14.9957L15.1552 15.1525L14.9983 2.97487Z" fill="white"></path>
          </svg>
        </span>
      </p>
      <a className="inline-block px-7 py-4 text-center font-medium bg-indigo-500 hover:bg-indigo-600 text-white rounded transition duration-250" href="#">Homepage</a>
    </div>
  </div>
</section>
        </div>
    )
}