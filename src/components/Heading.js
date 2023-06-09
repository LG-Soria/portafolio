import i18n from "../i18n/index"


const Heading = () => {
  return (
    <>
      <section className="tituloContainer bg-bottom bg-contain">
    
        <h1 class="mb-4 ml-6 text-6xl font-extrabold text-gray-300 dark:text-white md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Front-End
          </span>{" "}
          Developer
        </h1>
        <p class="text-lg font-normal ml-[-50px] text-gray-300 lg:text-xl dark:text-gray-400">
        {i18n.t('titleDescription')}
        </p>
      </section>
    </>
  );
};

export default Heading;
