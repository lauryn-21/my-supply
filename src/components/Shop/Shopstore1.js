import React from 'react'
import Footer from '../Homepage/Footer';
import Navbar from '../Homepage/Navbar';

function Shopstore1() {
  return (
    <div>
      <div> 
      <section class="bg-white dark:bg-gray-900">
    <Navbar/>
<div class="container px-6 py-8 mx-auto">
    <div class="lg:flex lg:-mx-2">
        <div class="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
            <a href="/shop" class="block font-medium text-gray-500 dark:text-black-300 hover:underline">CHEESE & BUTTER</a>
         
        </div>

        <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
            <div class="flex items-center justify-between text-sm tracking-widest uppercase ">
                <p class="text-gray-500 dark:text-gray-300">15 Items</p>
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
                    <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://5.imimg.com/data5/SELLER/Default/2021/2/EG/XU/YK/44299916/amul-cheese.jpg" alt="T-Shirt"/>
                    <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">BROOKSIDE MILK</h4>
                    <p class="text-blue-500">$12.55</p>

                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span class="mx-1">Add to cart</span>
                    </button>
                </div>

                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                    <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://th.bing.com/th/id/OIP.F9m7X7pPaqlnDzekFddsDgHaI2?pid=ImgDet&rs=1" alt="T-Shirt"/>
                    <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">MOUNT KENYA</h4>
                    <p class="text-blue-500">$18.70</p>

                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span class="mx-1">Add to cart</span>
                    </button>
                </div>

                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                    <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://th.bing.com/th/id/OIP.j63H9IYBnT-L7o13jwBJkAHaKr?w=117&h=180&c=7&r=0&o=5&dpr=1.14&pid=1.7" alt="T-Shirt"/>
                    <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">KCC</h4>
                    <p class="text-blue-500">$16.55</p>

                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span class="mx-1">Add to cart</span>
                    </button>
                </div>

                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                    <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://farmiken.com/wp-content/uploads/2020/09/Tuzo-milk.jpg" alt="T-Shirt"/>
                    <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">TUZO</h4>
                    <p class="text-blue-500">$12.55</p>

                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span class="mx-1">Add to cart</span>
                    </button>
                </div>
                
                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                    <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/156521/1.jpg?7253" alt="T-Shirt"/>
                    <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">GOLD CROWN</h4>
                    <p class="text-blue-500">$12.55</p>

                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span class="mx-1">Add to cart</span>
                    </button>
                </div>

                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                    <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/089372/1.jpg?6544" alt="T-Shirt"/>
                    <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">KINANGOP</h4>
                    <p class="text-blue-500">$12.55</p>

                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span class="mx-1">Add to cart</span>
                    </button>
                </div>

                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                    <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://ugandaradionetwork.net/a/helpers/image.php?fileId=187512&m=0&w=960&h=960" alt="T-Shirt"/>
                    <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">LATO MILK</h4>
                    <p class="text-blue-500">$12.55</p>

                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span class="mx-1">Add to cart</span>
                    </button>
                </div>

                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                    <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://th.bing.com/th/id/OIP.dlF0LwnBFqBUFyYmLbc1xgHaGL?pid=ImgDet&rs=1" alt="T-Shirt"/>
                    <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">COCONUT MILK</h4>
                    <p class="text-blue-500">$12.55</p>

                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span class="mx-1">Add to cart</span>
                    </button>
                </div>

                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                    <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://th.bing.com/th/id/R.21ec03bef73006996e2151d0fd49ba46?rik=hwxr2M2odZiLPg&riu=http%3a%2f%2fwww.foodbusinessafrica.com%2fwp-content%2fuploads%2f2017%2f09%2fmilkkenya.jpg&ehk=VkYqSECic1b4rZ2bE2NslnSMgnDaDF5SBMKl%2fnTQ72A%3d&risl=&pid=ImgRaw&r=0" alt="T-Shirt"/>
                    <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">MOUNTAIN FRESH MILK</h4>
                    <p class="text-blue-500">$12.55</p>

                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span class="mx-1">Add to cart</span>
                    </button>
                </div>

                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                    <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://th.bing.com/th/id/R.21ec03bef73006996e2151d0fd49ba46?rik=hwxr2M2odZiLPg&riu=http%3a%2f%2fwww.foodbusinessafrica.com%2fwp-content%2fuploads%2f2017%2f09%2fmilkkenya.jpg&ehk=VkYqSECic1b4rZ2bE2NslnSMgnDaDF5SBMKl%2fnTQ72A%3d&risl=&pid=ImgRaw&r=0" alt="T-Shirt"/>
                    <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">MOUNTAIN FRESH MILK</h4>
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
</div>
</div>
  )
}

export default Shopstore1