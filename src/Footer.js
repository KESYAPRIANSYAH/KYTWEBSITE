function Footer() {
  return (
    <>
      {/* footer */}
      <footer class="p-4 bg-red-700 rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="https://flowbite.com" class="flex items-center mb-4 sm:mb-0">
            <img src="img/footer.png" class="mr-3 h-14" alt="Flowbite Logo" />
            <span class="self-center text-1xl font-bold whitespace-nowrap text-white">World Class Helmet</span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-white sm:text-center dark:text-gray-400">© 2022 kyt . All Rights Reserved.</span>
      </footer>

      {/* foooter */}
    </>
  );
}
export default Footer;
