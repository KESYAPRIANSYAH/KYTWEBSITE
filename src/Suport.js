function App() {
  return (
    <>
      <div class="w-fullmx-auto pt-40 py-40 sm:px-40 px-10 ">
        <div class="p-6 border border-gray-500 sm:rounded-md">
          <form method="POST" action="https://herotofu.com/start">
            <label class="block mb-6">
              <span class="text-gray-700">Your name</span>
              <input
                type="text"
                name="name"
                class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="tulis nama mu disini"
              />
            </label>
            <label class="block mb-6">
              <span class="text-gray-700">Email address</span>
              <input
                name="email"
                type="email"
                class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="contoh joe.bloggs@example.com"
                required
              />
            </label>
            <label class="block mb-6">
              <span class="text-gray-700">Message</span>
              <textarea
                name="message"
                class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                rows="3"
                placeholder="tuliskan pesan mu di sini bro"
              ></textarea>
            </label>
            <div class="mb-6">
              <button
                type="submit"
                class="
            h-10
            px-5
            text-indigo-100
            bg-red-500
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-red-600
          "
              >
                Contact Us
              </button>
            </div>
            <div>
              <div class="mt-2 text-gray-700 text-right text-xs">
                <a href="https://herotofu.com" class="hover:underline" target="_blank">
                  KYT HELMET
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default App;
