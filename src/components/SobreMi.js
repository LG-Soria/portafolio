import foto1 from "../img/foto1.jpg";
import cv from "../archivos/cv.pdf";
import i18n from "../i18n/index"


const SobreMi = () => {

  return (
    <section id="sobreMi" className=" w-screen margin">
      <div class="flex-col mx-4 justify-center lg:flex lg:flex-row  containerSobreMi bg-white dark:bg-gray-800 overflow-hidden relative">
       
        <div class="text-center lg:text-start lg:pl-28  w-auto lg:w-1/2 py-12 px-2 sm:px-6 lg:py-16 ">
          <h2 class=" text-2xl mb-12 font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block text-3xl mb-5 lg:mb-3"> {i18n.t('aboutTitle')}</span>
            <span class="block text-blue-600">
            {i18n.t('aboutSubTitle')}
            </span>
          </h2>

          <p class="text-lg mt-4 text-gray-500 ">
        {i18n.t('aboutDescription')}
          </p>
          <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                class="py-4 px-6  bg-blue-600 hover:bg-blue-800 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                <a
                  href={cv}
                  target="_blank"
                  download="Curriculum Lucas Soria"
                  rel="noreferrer"
                >
                  {" "}
                  {i18n.t('cvText')}
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:h-auto  relative lg:top-16 ">
          <img src={foto1} alt="foto_mia" className="m-auto w-3/4 lg:w-2/5 lg:h-2/3  mt-6 object-cover rounded-full " />
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
