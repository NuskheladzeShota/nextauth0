"use client";

function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center justify-center p-5 bg-neutral-100 dark:bg-neutral-900">
        <h2 className="text-xl font-bold text-black dark:text-gray-200 mb-4">
          Contact Phone: 591 165 145
        </h2>
        <h2 className="text-lg font-medium text-black dark:text-gray-200 mb-4">
          Social Networks:
          <i className="fa fa-google text-2xl cursor-pointer mx-2" aria-hidden="true">google</i>
          <i className="fa fa-facebook text-2xl cursor-pointer mx-2" aria-hidden="true">facebook</i>
          <i className="fa fa-instagram text-2xl cursor-pointer mx-2" aria-hidden="true">instagram</i>
        </h2>
        <h2 className="text-lg font-medium text-black cursor-pointer dark:text-gray-200 mb-2">
          Contact Us inocgnito@Gmail.com
        </h2>
        <form className="w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="e-mail" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              E-mail:
            </label>
            <input
              type="email"
              id="e-mail"
              name="e-mail"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="mt-1 block w-full h-32 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-500 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;