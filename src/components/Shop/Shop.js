import React from 'react'
import Footer from '../Homepage/Footer';
import Navbar from '../Homepage/Navbar';

function Product() {
  return (

      <section class="bg-white dark:bg-gray-900">
       <Navbar/>
   <div class="container px-6 py-8 mx-auto">
       <div class="lg:flex lg:-mx-2">
           <div class="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
               <a href="/shopstore" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">MILK </a>
               <a href="/shopstore1" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">CHEESE & BUTTER</a>
               <a href="#t" class="block font-medium text-blue-600 dark:text-blue-500 hover:underline">Ice-cream & YOGHURT</a>
               <a href="#s" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">CHOCOLATE</a>
               {/* <a href="#b" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Blazers & Suits</a>
               <a href="#j" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Jeans</a>
               <a href="#t" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Trousers</a>
               <a href="#s" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Shorts</a>
               <a href="#u" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Underwear</a> */}
           </div>

           <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
               <div class="flex items-center justify-between text-sm tracking-widest uppercase ">
                   <p class="text-gray-500 dark:text-gray-300">6 Items</p>
                   <div class="flex items-center">
                       <p class="text-gray-500 dark:text-gray-300">Sort</p>
                       <select class="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                           <option value="#">Recommended</option>
                           <option value="#">Size</option>
                           <option value="#">Price</option>
                       </select>
                   </div>
               </div>

               <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                   <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                       <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://4.bp.blogspot.com/-L1q4yKy96Y0/Xute-XwB2BI/AAAAAAAG7KM/N9UhdMOYNoAjw7gKf4dDxT31nGPY843egCLcBGAsYHQ/w1200-h630-p-k-no-nu/Kayak%2BIce%2BCream%2B%25281%2529.jpg" alt="T-Shirt"/>
                       <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">KAYAK ICE-CREAM</h4>
                       <p class="text-blue-500">$12.55</p>

                       <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                           <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                               <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                           </svg>
                           <span class="mx-1">Add to cart</span>
                       </button>
                   </div>

                   <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                       <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://cdn.trendhunterstatic.com/phpthumbnails/324/324143/324143_1_468.jpeg" alt="T-Shirt"/>
                       <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200"> SHWE SHWE ICE-CREAM</h4>
                       <p class="text-blue-500">$18.70</p>

                       <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                           <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                               <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                           </svg>
                           <span class="mx-1">Add to cart</span>
                       </button>
                   </div>

                   <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                       <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://th.bing.com/th/id/R.c317a7c42553bb1ff16f3784ea921fdd?rik=pMJiQyBGLKSy9g&pid=ImgRaw&r=0" alt="T-Shirt"/>
                       <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">DELAMERE YOGHURT</h4>
                       <p class="text-blue-500">$16.55</p>

                       <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                           <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                               <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                           </svg>
                           <span class="mx-1">Add to cart</span>
                       </button>
                   </div>

                   <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                       <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://images.yaoota.com/xLmwrWpG4fjTB9iXTnQTMp6LmwM=/trim/yaootaweb-production-ke/media/crawledproductimages/90e35537a6a79e18067e1bd492abd5097823f939.jpg" alt="T-Shirt"/>
                       <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">DELAMERE YOGHURT</h4>
                       <p class="text-blue-500">$12.55</p>

                       <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                           <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                               <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                           </svg>
                           <span class="mx-1">Add to cart</span>
                       </button>
                   </div>

                   <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                       <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://1.bp.blogspot.com/-CGAkKr01uvI/VfeUa5A0RzI/AAAAAAACUXg/Ov3oUpGwYBQ/w1200-h630-p-k-no-nu/pinks-icecream%2B%25281%2529.jpg" alt="T-Shirt"/>
                       <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">DURIANS PINK'S ICE-CREAM</h4>
                       <p class="text-blue-500">$12.55</p>

                       <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                           <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                               <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                           </svg>
                           <span class="mx-1">Add to cart</span>
                       </button>
                   </div>

                   <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                       <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://th.bing.com/th/id/R.57ed401496ce44c8645c33ca77297ec0?rik=LmzDHARczDIN7w&riu=http%3a%2f%2f4.bp.blogspot.com%2f_nieIGWiCsnw%2fTKqhBfiZCAI%2fAAAAAAAAKDw%2fnpVE2kKurOE%2fw1200-h630-p-k-no-nu%2fconnoisseur-01.jpg&ehk=f1JXdzpuFv8oJm8dSaxNe93Bz5%2bATylTDMAB87gkWmY%3d&risl=&pid=ImgRaw&r=0" alt="T-Shirt"/>
                       <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">CONNOISSERUR</h4>
                       <p class="text-blue-500">$12.55</p>

                       <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                           <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                               <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                           </svg>
                           <span class="mx-1">Add to cart</span>
                       </button>
                   </div>

                   <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                       <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://images.yaoota.com/ETmZPwi6IUZFFqsc3wgiuWZR-Wk=/trim/yaootaweb-production-ke/media/crawledproductimages/9de23a0a70908267399f4d741b88752241ad2126.jpg" alt="T-Shirt"/>
                       <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">BIO YORGURT</h4>
                       <p class="text-blue-500">$12.55</p>

                       <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                           <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                               <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                           </svg>
                           <span class="mx-1">Add to cart</span>
                       </button>
                   </div>
               </div>
           </div>
       </div>
   </div>
   <Footer/>
</section>
  )
}

export default Product