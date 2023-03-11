export default function maintenance() {
    return (
        <div className="sections">
       <section className="fixed inset-0 py-24">
  <div className="container px-4 mx-auto relative z-10">
    <div className="bg-white max-w-xl mx-auto text-center py-12 md:py-16 px-6 md:px-14">
      <img className="block mx-auto mb-6" src="pstls-assets/icons/modal-check-circle.svg" alt=""/>
      <h2 className="text-4xl font-heading mb-3">Currently down for maintenance.</h2>
      <p className="max-w-md mx-auto leading-8 mb-10">We are always working to make this platform the best it can be we will be back shortly.</p>
      <div><a className="inline-block px-8 py-3 text-white font-bold bg-black hover:bg-gray-900" href="#">Exit</a></div>
    </div>
  </div>
  <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50"></div>
</section>
        </div>
    )
}