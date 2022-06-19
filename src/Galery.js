import Footer from "./Footer";

export default function Galery() {
  return (
    <>
      <div className="relative bg-gray-200 overflow-hidden ">
        <div>
          <aside class="lg:w-40 pt-16 " aria-label="Sidebar">
            <div class="overflow-y-auto py-4 px-3 bg-black  dark:bg-gray-800">
              <ul class="space-y-2">
                <li class=" border-t border-gray-500 dark:border-gray-700">
                  <a href="Galery" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-red-500 dark:hover:bg-gray-700">
                    <span class="flex-1 ml-3 whitespace-nowrap">Thai GP</span>
                  </a>
                </li>
                <li class=" border-t border-gray-500 dark:border-gray-700">
                  <a href="Americas" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-red-500 dark:hover:bg-gray-700">
                    <span class="flex-1 ml-3 whitespace-nowrap">Americas GP</span>
                  </a>
                </li>
                <li class=" border-t border-gray-500 dark:border-gray-700">
                  <a href="Italy" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-red-500 dark:hover:bg-gray-700">
                    <span class="flex-1 ml-3 whitespace-nowrap">Italy GP</span>
                  </a>
                </li>
              </ul>
              {/* produk pc*/}
              <div className=" sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48 mr-60 ">
                <div className="relative  mx-auto  lg:px-8 sm:static">
                  <div>
                    <div className="pt-20 mr-20  hidden lg:block">
                      <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
                        <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                          <div className="flex items-center space-x-6 lg:space-x-8">
                            <div className="flex-shrink-0 grid grid-cols-3 ">
                              <div className="w-44 h-64 px-2 rounded-lg overflow-hidden ">
                                <img src="https://www.kythelmet.com/uploads/images/gallery/full/45131919232_7830edc5e3_o.jpg" alt="" className="w-full h-full object-center object-cover" />
                              </div>
                              <div className="w-44 rounded-lg h-64 px-2  overflow-hidden">
                                <img src="https://www.kythelmet.com/uploads/images/gallery/full/45181143931_aff902f447_o.jpg" alt="" className="w-full h-full object-center object-cover" />
                              </div>
                              <div className="w-44 h-64 px-2 rounded-lg overflow-hidden">
                                <img src="https://www.kythelmet.com/uploads/images/gallery/full/45181136051_ba23fe9f2d_o.jpg" alt="" className="w-full h-full object-center object-cover" />
                              </div>
                              <div className="w-44 h-64 px-2 py-2 rounded-lg overflow-hidden">
                                <img src="https://www.kythelmet.com/uploads/images/gallery/full/45131929732_bf931f1ff6_o.jpg" alt="" className="w-full h-full object-center object-cover" />
                              </div>
                              <div className="w-44 h-64 px-2 py-3 rounded-lg overflow-hidden">
                                <img src="https://www.kythelmet.com/uploads/images/gallery/full/45181139001_18284a85f2_o.jpg" alt="" className="w-full h-full object-center object-cover" />
                              </div>
                              <div className="w-44 h-64 px-2 py-2 rounded-lg overflow-hidden">
                                <img src="https://www.kythelmet.com/uploads/images/gallery/full/45181138301_ac0037949a_o.jpg" alt="" className="w-full h-full object-center object-cover" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* akhir produk pc */}
            </div>
          </aside>
        </div>
        {/* produk in mobile */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:hidden">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
              <div className="max-w-xl mb-6"></div>
            </div>
            <div className="flex items-center justify-center -mx-4 lg:pl-8">
              <div className="flex flex-col items-end px-3">
                <img className="object-cover mb-6 rounded shadow-lg h-20 " src="https://www.kythelmet.com/uploads/images/gallery/full/45181143931_aff902f447_o.jpg" alt="1" />
                <img className="object-cover w-20 h-20 rounded shadow-lg " src="https://www.kythelmet.com/uploads/images/gallery/full/45181136051_ba23fe9f2d_o.jpg" alt="2" />
                <img className="object-cover w-20 h-20 rounded shadow-lg  py-5 " src="https://www.kythelmet.com/uploads/images/gallery/full/45131929732_bf931f1ff6_o.jpg" alt="3" />
              </div>
              <div className="flex flex-col items-end px-3">
                <img className="object-cover mb-6 rounded shadow-lg h-40 sm:h-48  w-28 " src="https://www.kythelmet.com/uploads/images/gallery/full/45181139001_18284a85f2_o.jpg" alt="4" />
                <img className="object-cover w-28 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40" src="https://www.kythelmet.com/uploads/images/gallery/full/45181138301_ac0037949a_o.jpg" alt="5" />
              </div>
              <div className="px-3">
                <img className="object-cover w-40 h-60 rounded shadow-lg " src="https://www.kythelmet.com/uploads/images/gallery/full/45131919232_7830edc5e3_o.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* produk in mobile */}
      </div>

      <Footer />
    </>
  );
}
