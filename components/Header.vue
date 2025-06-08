<template>
   <header class="flex items-center justify-between px-6 h-20 bg-white border-b z-10 shadow-sm">
     <div class="flex items-center">
       <img src="public/images/logo.svg" alt="Sua Marca" class="h-10" />
     </div>
 
     <div class="flex items-center flex-grow justify-center px-10">
        <div class="relative w-full max-w-lg">
           <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <Icon name="uil:search" class="w-5 h-5 text-gray-400" />
           </span>
           <input class="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300" type="text" placeholder="Faça sua busca">
        </div>
     </div>
 
     <div class="flex items-center">
         <button class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100">
             <Icon name="uil:bell" class="w-6 h-6 text-gray-600" />
         </button>
 
        <div class="flex items-center ml-4">
            <Icon name="uil:user-circle" class="w-10 h-10 text-gray-500" />
            <div class="ml-3 text-sm text-right">
               <p class="font-semibold text-gray-800">Olá, Cliente!</p>
               <p class="text-xs text-gray-500">Perfil movimentador</p>
            </div>
            <Icon name="uil:angle-down" class="w-5 h-5 ml-2 text-gray-500" />
        </div>
     </div>
   </header>
 </template>