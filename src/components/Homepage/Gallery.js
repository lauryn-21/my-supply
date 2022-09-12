import React from 'react'

function Gallery() {
  return (
   <section class="overflow-hidden text-gray-700">
   <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
     <div class="flex flex-wrap -m-1 md:-m-2">
       <div class="flex flex-wrap w-1/2">
         <div class="w-1/2 p-1 md:p-2">
           <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
             src="https://cdn.pixabay.com/photo/2018/01/17/23/41/cow-3089259__340.jpg"/>
         </div>
         <div class="w-1/2 p-1 md:p-2">
           <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
             src="https://cdn.pixabay.com/photo/2016/06/17/15/24/milk-1463430_960_720.png"/>
         </div>
         <div class="w-full p-1 md:p-2">
           <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
             src="https://cdn.pixabay.com/photo/2019/12/20/17/33/cows-4708901_960_720.jpg"/>
         </div>
       </div>
       <div class="flex flex-wrap w-1/2">
         <div class="w-full p-1 md:p-2">
           <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
             src="https://cdn.pixabay.com/photo/2022/08/10/20/10/calf-7378103_960_720.jpg"/>
         </div>
         <div class="w-1/2 p-1 md:p-2">
           <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
             src="https://cdn.pixabay.com/photo/2015/01/16/10/48/livestock-601277_960_720.jpg"/>
         </div>
         <div class="w-1/2 p-1 md:p-2">
           <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
             src="https://cdn.pixabay.com/photo/2013/05/27/21/24/ohio-114092_960_720.jpg"/>
         </div>
       </div>
     </div>
   </div>
 </section>
  )
}

export default Gallery