export default function navBar() {
    return (
       <div>
       
<nav className="px-2 bg-green-100">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <a href="#" className="flex items-center mt-10 mb-10">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-black ml-3">
          <img src="/icon.svg" width={80}/>
        </span>
    </a>
    <div class="flex md:order-2">
    <button type="button" class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
  <svg class="w-4 h-4 mr-2 -ml-1 text-[#626890]" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
  Pay with Ethereum
</button>

     <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul className="flex flex-col p-4 mt-4 border rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0">
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0" aria-current="page">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0">Become a streamer</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0">Watch</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0">Company</a>
        </li>
        <li>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
    )
}