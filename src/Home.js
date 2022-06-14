import logo from "./logo.svg";
import "./App.css";
import Footer from "./Footer";

const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  { name: "Material", description: "Solid walnut base with rare earth magnets and powder coated steel card cover" },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  { name: "Considerations", description: "Made from natural materials. Grain and color vary with each item." },
];

function Home() {
  return (
    <>
      {/* awal slider */}
      <div id="carouselExampleCaptions" class="carousel slide relative pt-16 " data-bs-ride="carousel">
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <img src=" https://www.kythelmet.com/uploads/slides/Web_Banner_KYT_2022__Enea.jpg  " class="block w-full" alt="1" />
            <div class="carousel-caption hidden md:block absolute text-center"></div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <img src="https://www.kythelmet.com/uploads/slides/Web_Banner_KYT_Taddy_Blazusiak_021.jpg" class="block w-full" alt="2" />
            <div class="carousel-caption hidden md:block absolute text-center"></div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <img src="https://www.kythelmet.com/uploads/slides/Web_Banner_KYT_2022_Dennis_Foggia_02.jpg" class="block w-full" alt="3" />
            <div class="carousel-caption hidden md:block absolute text-center"></div>
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* Akhir Slider */}
      <div class=" pt-60 pb-60 bg-[url('112.png')] hidden sm:block"></div>

      <div className="bg-zinc-200">
        <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">World Class Helmet</h2>
            <p className="mt-4 text-gray-500">#KYTHelmet #WorldClassHelmet</p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"></dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img src="https://www.kythelmet.com/uploads/images/product/full/DSC03918.png" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." className="bg-gray-100 rounded-lg" />
            <img src="https://www.kythelmet.com/uploads/images/product/full/kyt-product-part2_0044_DSC022381.png" alt="Top down view of walnut card tray with embedded magnets and card groove." className="bg-gray-100 rounded-lg" />
            <img src="https://www.kythelmet.com/uploads/images/product/full/DSC07421.png" alt="Side of walnut card tray with card groove and recessed card area." className="bg-gray-100 rounded-lg" />
            <img src="https://www.kythelmet.com/uploads/images/product/full/DSC03964-Edit-02.png" alt="Walnut card tray filled with cards and card angled in dedicated groove." className="bg-gray-100 rounded-lg" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
