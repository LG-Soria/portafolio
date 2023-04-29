import LinkedinLogo from "./logos/LinkedinLogo";
import Twitter from "./logos/Twitter";
import Github from "./logos/Github";

const FooterDashboard = () => {
   
    return(
        <>
        <footer class="bg-white rounded-lg shadow sm:flex sm:items-center sm:justify-between  sm:p-6 xl:p-8 dark:bg-gray-800">
  <p class="mb-4 text-sm text-center text-gray-500 dark:text-gray-400 sm:mb-0">
      &copy; 2023 Lucas Soria. Todos los derechos reservados.
  </p>
  <div class="flex justify-center items-center space-x-1">

    <a href="https://www.linkedin.com/in/lucas-soria-g/" target="_blank" rel="noreferrer" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600" >
      <LinkedinLogo />
    </a>
   

    
    <a href="https://twitter.com/_LSoria" target="_blank" rel="noreferrer"  data-tooltip-target="tooltip-twitter" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Twitter />
    </a>
    <div id="tooltip-twitter" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
        Follow us on Twitter
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <a href="https://github.com/LG-Soria" target="_blank" rel="noreferrer"  data-tooltip-target="tooltip-github" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Github />
    </a>
    <div id="tooltip-github" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
        Star us on GitHub
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>

</div>
</footer></>
    )
}

export default FooterDashboard;