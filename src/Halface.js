import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Footer from "./Footer";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc: "https://www.kythelmet.com/uploads/images/product/full/DSC03918.png",
    imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc: "https://www.kythelmet.com/uploads/images/product/full/kyt-product-part2_0044_DSC022381.png",
    imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc: "https://www.kythelmet.com/uploads/images/product/full/kyt-product-part2_0035_DSC024762.png",
    imageAlt: "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc: "https://www.kythelmet.com/uploads/images/product/full/_DVD2896.png",
    imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc: "https://www.kythelmet.com/uploads/images/product/full/kyt-produk-part1_0003_DSC024753.png",
    imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc: "https://www.kythelmet.com/uploads/images/product/full/DSC06141.png",
    imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 7,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc: "https://www.kythelmet.com/uploads/images/product/full/kyt-produk-part1_0003_DSC024753.png",
    imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 8,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc: "https://www.kythelmet.com/uploads/images/product/full/DSC06009.png",
    imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 9,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc: "https://www.kythelmet.com/uploads/images/product/full/DSC06404.png",
    imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 10,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc: "https://www.kythelmet.com/uploads/images/product/full/DSC06139.png",
    imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 11,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc: "https://www.kythelmet.com/uploads/images/product/full/DSC06008.png",
    imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 12,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc: "https://www.tarakusuma.com/upload/helmet/helmet_variants/1573036458_1954636837-3-aqua-blue-1.png",
    imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  // More products...
];

export default function Product() {
  return (
    <>
      <div class="bg-gray-300">
        <div class="flex justify-end mr-2">
          <Menu as="div" className="pt-20   relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                Options
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="
                      
                      
                      product"
                        className={classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm ")}
                      >
                        Full Face
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a href="Halface" className={classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                        Half face
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      {/* // products */}
      <div className="bg-gray-300">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className=" text-center font-bold text-4xl text-black">HALFFACE</h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 pt-9">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img src={product.imageSrc} alt={product.imageAlt} className="w-full h-full object-center object-cover group-hover:scale-110 transition duration-300 ease-in-out" g />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
