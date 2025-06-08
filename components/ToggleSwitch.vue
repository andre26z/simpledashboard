<template>
    <button
      type="button"
      @click="toggle"
      :class="modelValue ? 'bg-gray-700' : 'bg-gray-200'"
      class="relative inline-flex h-4 w-7 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      role="switch"
      :aria-checked="modelValue"
    >
      <span
        :class="modelValue ? 'translate-x-3' : 'translate-x-0'"
        class="pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
      ></span>
    </button>
  </template>
  
  <script setup>
  const props = defineProps({
    modelValue: {
      type: Boolean,
      required: true,
    },
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  function toggle() {
    emit('update:modelValue', !props.modelValue);
  }
  </script>