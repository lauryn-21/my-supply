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
                    <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">PIZZA CHEESE</h4>
                    <p class="text-blue-500">$12.55</p>

                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span class="mx-1">Add to cart</span>
                    </button>
                </div>

                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                    <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://th.bing.com/th/id/R.b55948675e5399b71d717447adf38aba?rik=OhKmvm2Kxt0oLg&riu=http%3a%2f%2fc.shld.net%2frpx%2fi%2fs%2fi%2fspin%2fimage%2fspin_prod_ec_766648501%3f%3fhei%3d64%26wid%3d64%26qlt%3d50&ehk=L2AI%2fXP2ww70NRcw5ec%2f108QZWuk5Dd%2bQB0SUKpf05U%3d&risl=&pid=ImgRaw&r=0" alt="T-Shirt"/>
                    <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">MACARONI & CHEESE </h4>
                    <p class="text-blue-500">$18.70</p>

                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span class="mx-1">Add to cart</span>
                    </button>
                </div>

                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                    <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://assets.dpo.store/wp-content/uploads/sites/218/2021/02/1614828840-300x300.jpg" alt="T-Shirt"/>
                    <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">BROOKSIDE BUTTER</h4>
                    <p class="text-blue-500">$16.55</p>

                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span class="mx-1">Add to cart</span>
                    </button>
                </div>

                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                    <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://i.roamcdn.net/hz/pi/listing-gallery-full-1920w/3e57ba804cc3729e61c67e32fa10de26/-/horizon-files-prod/pi/picture/qmkd7rm/fa365c075dfb22c3c40c4c079ef78495e581069a.jpg" alt="T-Shirt"/>
                    <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">AWALI BUTTER</h4>
                    <p class="text-blue-500">$12.55</p>

                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span class="mx-1">Add to cart</span>
                    </button>
                </div>
                
                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                    <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://i0.wp.com/labelgurusdesigns.co.ke/wp-content/uploads/2021/05/Peanut-butter.jpg?w=700&ssl=1" alt="T-Shirt"/>
                    <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">PEANUT BUTTER</h4>
                    <p class="text-blue-500">$12.55</p>

                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span class="mx-1">Add to cart</span>
                    </button>
                </div>

                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                    <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://th.bing.com/th/id/R.98aa382d9e2580e5864b9b97dc92ce6c?rik=15AdM7e2WgAhFg&pid=ImgRaw&r=0" alt="T-Shirt"/>
                    <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">PHILADELPHIA</h4>
                    <p class="text-blue-500">$12.55</p>

                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span class="mx-1">Add to cart</span>
                    </button>
                </div>

                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                    <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://th.bing.com/th/id/R.1d8ce9de69b8f5fd5e5baf6298074b5e?rik=eQ5UrUap44qHNQ&pid=ImgRaw&r=0" alt="T-Shirt"/>
                    <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">CREAM CHEESE</h4>
                    <p class="text-blue-500">$12.55</p>

                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span class="mx-1">Add to cart</span>
                    </button>
                </div>

                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                    <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://www.foodmaster.my/image/foodmaster/image/data/all_product_images/product-509/EBteexsT1616942975.png" alt="T-Shirt"/>
                    <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">CRACKERS BUTTER</h4>
                    <p class="text-blue-500">$12.55</p>

                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span class="mx-1">Add to cart</span>
                    </button>
                </div>

                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                    <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://i.ebayimg.com/images/g/~7UAAOSwwS5cGu-b/s-l300.jpg" alt="T-Shirt"/>
                    <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">PEANUT BUTTER </h4>
                    <p class="text-blue-500">$12.55</p>

                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span class="mx-1">Add to cart</span>
                    </button>
                </div>

                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                    <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://th.bing.com/th/id/R.b9c37b7efccff945962313b0127d5cf4?rik=%2fU4cQ4eo6ycTEg&pid=ImgRaw&r=0" alt="T-Shirt"/>
                    <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-black-200">BACON CHEESE</h4>
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