import tailwindLogo from "../img/tailwindcss-ar21.svg"
import reactLogo from "../img/reactLogo.svg"
import nodeLogo from "../img/nodejsLogo.svg"
import mongoLogo from "../img/mongodbLogo.svg"
import phothoshopLogo from "../img/photoshopLogo.svg"
import illustratorLogo from "../img/illustratorLogo.svg"




const SkillsCarrusel = () => {
    return(
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 lg:py-10 mx-auto max-w-screen-xl px-4">
        <h2 
        class="mb-6 lg:mb-16 text-5xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-5xl">
            SKILLS
        </h2>


        <div class="mt-48 grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-6">
            <div class="flex justify-center items-center ">
                <img src={reactLogo} alt="react logo" className="w-20" />
            </div>
            <div class="flex justify-center items-center">
                <img src={nodeLogo} alt="nodejs logo" className="w-24" />

            </div>
            <div class="flex justify-center items-center">
              <img src={mongoLogo} alt="MongoDb logo" className="w-25" />

            </div>

            <div class="flex justify-center items-center">
              <img src= {tailwindLogo} alt="tailwind logo" className="w-30" />                                                                
            </div>
            <div class="flex justify-center items-center">
               <img src={phothoshopLogo} alt="photoshop logo"  className="w-20" />

            </div>
            <div class="flex justify-center items-center">
                <img src={illustratorLogo} alt="illustrator logo" className="w-20"  />

            </div>
        </div>
    </div>
</section>
    )
}

export default SkillsCarrusel