import Footer from "./Footer";

export default function Italy() {
  return (
    <>
      <div className="relative bg-gray-200 overflow-hidden ">
        <div>
          <aside class="w-40 pt-16" aria-label="Sidebar">
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
              {/* produk */}
              <div className=" sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48 mr-60">
                <div className="relative  mx-auto  lg:px-8 sm:static">
                  <div>
                    <div className="pt-20 mr-20 ">
                      <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
                        <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                          <div className="flex items-center space-x-6 lg:space-x-8">
                            <div className="flex-shrink-0 grid grid-cols-3 ">
                              <div className="w-44 h-64 px-2 rounded-lg overflow-hidden ">
                                <img src="https://www.kythelmet.com/uploads/images/gallery/full/48006367451_74db7b152e_o.jpg" alt="" className="w-full h-full object-center object-cover " />
                              </div>
                              <div className="w-44 rounded-lg h-64 px-2  overflow-hidden">
                                <img src="https://www.kythelmet.com/uploads/images/gallery/full/48006367966_1e156e50a1_o.jpg" alt="" className="w-full h-full object-center object-cover" />
                              </div>
                              <div className="w-44 h-64 px-2 rounded-lg overflow-hidden">
                                <img src="https://www.kythelmet.com/uploads/images/gallery/full/48006378128_282b68941a_o.jpg" alt="" className="w-full h-full object-center object-cover" />
                              </div>
                              <div className="w-44 h-64 px-2 py-2 rounded-lg overflow-hidden">
                                <img src="https://www.kythelmet.com/uploads/images/gallery/full/48006368031_637866e300_o.jpg" alt="" className="w-full h-full object-center object-cover" />
                              </div>
                              <div className="w-44 h-64 px-2 py-3 rounded-lg overflow-hidden">
                                <img src="https://www.kythelmet.com/uploads/images/gallery/full/48006367881_ca6bce0a8c_o.jpg" alt="" className="w-full h-full object-center object-cover" />
                              </div>
                              <div className="w-44 h-64 px-2 py-2 rounded-lg overflow-hidden">
                                <img src="https://www.kythelmet.com/uploads/images/gallery/full/48006458637_2d51cf8cd9_o.jpg" alt="" className="w-full h-full object-center object-cover" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* akhir produk */}
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
}
