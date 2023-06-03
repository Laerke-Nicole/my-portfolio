<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)


</script>


<template>

  <header>
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">

      <!-- logo in top left corner -->
      <div class="flex lg:flex-1">
        <RouterLink to='/'>
          <div>
            <img class="h-12 w-auto" src="https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/logos%2Flogo-dark.svg?alt=media&token=ba702079-f71d-43f3-9c5e-ee67049d4bbc&_gl=1*xvdzn3*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTgwNTc4MC40Mi4xLjE2ODU4MDYwMDEuMC4wLjA." alt="my logo" />
          </div>
        </RouterLink>
        <!-- <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        </a> -->
      </div>

      <!-- hamburgerbar icon -->
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <!-- links in navigation -->
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <RouterLink to="/" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Portfolio</RouterLink>
        <RouterLink to="/contact" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Kontakt</RouterLink>  
        <a href="https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/cv%2FCV-screen-1.pdf?alt=media&token=ae679620-480e-4aee-a30e-8f8943522814&_gl=1*1dnpjkh*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTgwNTc4MC40Mi4xLjE2ODU4MDU4NzUuMC4wLjA." target="_blank" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">CV <span aria-hidden="true">&nearr;</span></a>
        <RouterLink to="/about" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Om mig</RouterLink>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">English</a>
      </div>
    </nav>

    <!-- mobile navigation -->
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="mobilenav fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

        <!-- top part with Kantens logo -->
        <div class="flex items-center justify-between">

          <!-- logo -->
          <RouterLink to='/' class="logo-hamburgerbar -m-1.5 p-1.5">
            <img class="h-8 w-auto" src="https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/logos%2Flogo-dark.svg?alt=media&token=ba702079-f71d-43f3-9c5e-ee67049d4bbc&_gl=1*xvdzn3*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTgwNTc4MC40Mi4xLjE2ODU4MDYwMDEuMC4wLjA." alt="my logo" />
          </RouterLink>

          <!-- x button to close menu -->
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <!-- links in hamburger menu -->
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <RouterLink to="/" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Portfolio</RouterLink>
              <RouterLink to="/contact" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Kontakt</RouterLink>
              <a href="https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/cv%2FCV-screen-1.pdf?alt=media&token=ae679620-480e-4aee-a30e-8f8943522814&_gl=1*1dnpjkh*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTgwNTc4MC40Mi4xLjE2ODU4MDU4NzUuMC4wLjA." target="_blank" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">CV <span aria-hidden="true">&nearr;</span></a>
              <RouterLink to="/about" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Om mig</RouterLink>
            </div>
            <div class="py-6">
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">English</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>


  <RouterView />


  
  <!-- footer -->
  <footer>
    <h1>Lad os arbejde sammen!</h1>
    <RouterLink to="/contact">
        <button id="button1" class="button">Kontakt mig</button>
    </RouterLink>

    <!-- links in footer -->
    <div class="footerContent">
      <div class="footerMyName">
        <h2>Lærke Nicole Nielsen</h2>
      </div>

        <ul>          
          <RouterLink to="//www.linkedin.com/in/laerke-nicole-nielsen/" target="_blank"><li>LinkedIn</li></RouterLink>
          <RouterLink to="//github.com/Laerke-Nicole" target="_blank"><li>Github</li></RouterLink>
        </ul>

        <ul>
          <RouterLink to="/contact"><li>Kontakt</li></RouterLink>
          <RouterLink to="/"><li>Portfolio</li></RouterLink>
          <a href="https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/cv%2FCV-screen-1.pdf?alt=media&token=ae679620-480e-4aee-a30e-8f8943522814&_gl=1*1dnpjkh*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTgwNTc4MC40Mi4xLjE2ODU4MDU4NzUuMC4wLjA." target="_blank"><li>CV &nearr;</li></a>
          <RouterLink to="/about"><li>Om mig</li></RouterLink>
        </ul>
    </div>

    <!-- my mail in footer -->
    <div class="mail">
      <h4>laenie01@easv365.dk</h4>
      <hr>
    </div>
  </footer>
</template>


<style scoped>

header {
  background-color: var(--background-color);
  position: fixed;
  z-index: 1000;
  width: 100%;
}

header a {
  color: var(--black-text);
}

header a:hover {
  color: var(--tertiary-color);
}

.mobilenav {
  background-color: var(--background-color);
  z-index: 1000;
}

.logo-hamburgerbar:hover {
  background-color: transparent !important;
}

.mobilenav a {
  color: var(--black-text);
}

.mobilenav a:hover {
  background-color: var(--tertiary-color);
  color: var(--white-text);
  border-radius: 0;
}


/* footer */
footer {
  background-color: var(--primary-color);
  padding-bottom: 45px;
}

footer h1 {
  color: var(--white-headline);
  font-family: "condor", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 40px;
  text-align: center;
  padding-top: 45px;
  padding-bottom: 16px;
}

.footerContent {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

footer .footerMyName h2 {
  color: var(--white-headline);
  font-family: rift, sans-serif;
  font-style: normal;
  font-weight: bold; 
  font-size: 30px;
  display: flex;
  flex-direction: column;
}

footer .button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px auto;
}

footer ul {
  padding: 0;
}

footer li {
  display: flex;
  flex-direction: column;
  color: var(--white-headline);
  font-family: rift, sans-serif;
  font-style: normal;
  font-weight: bold; 
  font-size: 30px;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
}

footer li:hover {
  color: var(--primary-hover);
}

.mail {
  display: flex;
  color: var(--white-headline);
  font-family: "condor", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  gap: 18px;
  justify-content: center;
  padding: 18px 0 60px 0;
}

.mail hr {
  display: block;
  border-width: 0;
  height: 2px;
  width: 62%;
  background-color: var(--white-headline);
  align-self: center;
}
/* footer end */



/* responsive */
@media only screen and (max-width: 800px) {
  footer {
    padding-left: 8%;
  }

  footer h1 {
    text-align: left;
    padding-bottom: 6px;
  }

  footer .button {
    margin: 0;
    margin-bottom: 24px;
  }

  .footerContent {
    flex-direction: column;
    text-align: flex-start;
  }

  .footerMyName {
    display: none;
  }

  footer ul {
    padding: 12px 0;
  }

  footer li {
    font-size: 22px;
  }

  .mail {
    font-size: 16px;
    justify-content: flex-start;
  }

  .mail hr {
    width: 52%;
  }
}

@media only screen and (max-width: 500px) {
  footer h1 {
    font-size: 24px;
  }

  .mail hr {
    width: 48%;
  }
}

@media only screen and (max-width: 450px) {
  .mail hr {
    width: 40%;
  }
}

@media only screen and (max-width: 390px) {
  .mail hr {
    width: 35%;
  }
}
/* responsive end */
</style>
