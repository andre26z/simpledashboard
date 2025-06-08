<template>
  <div class="bg-white rounded-lg p-6 shadow-sm">
    <div class="flex justify-between items-start">
      <h4 class="text-gray-600 font-semibold text-lg">{{ title }}</h4>
      <div class="flex items-center text-green-500">
        <Icon name="uil:arrow-up-right" class="w-5 h-5" />
        <span class="ml-1 text-sm font-medium">{{ percentageChange }}%</span>
      </div>
    </div>
    <div class="mt-4 grid grid-cols-2 gap-4 items-end">
      <div>
        <p class="text-sm text-gray-500">Mês atual</p>
        <p class="text-2xl font-bold text-gray-800">{{ currentValue }}</p>
      </div>
      <div>
        <p class="text-sm text-gray-500">Mês anterior</p>
        <p class="text-lg font-medium text-gray-600">{{ previousValue }}</p>
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