<template>
  <div class="bg-white rounded-lg p-6 shadow-sm flex flex-col justify-between">
    <div>
      <div class="flex justify-between items-start">
        <h4 class="text-gray-600 text-sm md:text-md font-semibold">{{ title }}</h4>
        <div class="flex items-center text-green-500">
          <Icon name="uil:arrow-up-right" class="w-5 h-5" />
          <span class="ml-1 text-xm md:text-sm font-medium">{{ percentageChange }}%</span>
        </div>
      </div>
    </div>
    <div class="mt-4 grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-1 gap-4">
      <div class="bg-gray-100 rounded-lg p-6 flex flex-col justify-center">
        <p class="text-xs text-gray-500">Mês atual</p>
        <p class="text-md font-bold text-gray-800">{{ currentValue }}</p>
      </div>
      <div class="bg-gray-100 rounded-lg p-6 flex flex-col justify-center">
        <p class="text-xs text-gray-500">Mês anterior</p>
        <p class="font-semibold text-gray-600">{{ previousValue }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  currentValue: String,
  previousValue: String,
  percentageChange: Number,
});
</script>