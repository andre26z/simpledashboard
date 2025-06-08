<template>
  <div>
    <div class="flex items-center space-x-4 mb-6">
      <Icon name="uil:file-plus-alt" class="w-8 h-8 text-gray-600" />
      <h3 class="text-gray-800 text-2xl font-semibold">Nova assinatura</h3>
    </div>

    <div class="bg-white p-6 md:p-8 rounded-lg shadow-sm">
      <form @submit.prevent="submitForm">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

          <div>
            <label for="subscription-name" class="block text-sm font-medium text-gray-700">Nome da assinatura</label>
            <input type="text" id="subscription-name" v-model="formData.name" placeholder="Digite o nome da assinatura" class="mt-1 block w-full rounded-sm p-3 border border-gray-400 shadow-sm focus:border-gray-600 focus:ring-gray-600 sm:text-sm"/>
          </div>
          <div>
            <label for="subscription-amount" class="block text-sm font-medium text-gray-700">Valor da cobrança</label>
            <input type="text" id="subscription-amount" v-model="formData.amount" placeholder="Digite o valor da cobrança" class="mt-1 block w-full rounded-sm p-3 border border-gray-400 shadow-sm focus:border-gray-600 focus:ring-gray-600 sm:text-sm"/>
          </div>
          <div class="md:col-span-1">
            <label class="block text-sm font-medium text-gray-700">Qual a frequência da cobrança?</label>
            <div class="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button v-for="freq in frequencyOptions" :key="freq" type="button" @click="formData.frequency = freq" :class="['rounded-md py-2 px-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600', formData.frequency === freq ? 'bg-gray-800 text-white hover:bg-gray-900' : 'bg-white text-gray-700 border border-gray-500 hover:bg-gray-50']">{{ freq }}</button>
            </div>
          </div>
          <div class="md:row-span-4">
            <label for="description" class="block text-sm font-medium text-gray-700">Descrição (opcional)</label>
            <textarea id="description" v-model="formData.description" rows="10" placeholder="Acrescente uma descrição" class="mt-1 block w-full rounded-sm p-3 border border-gray-400 shadow-sm focus:border-gray-600 focus:ring-gray-600 sm:text-sm"></textarea>
            <div class="mt-4">
            <label for="billing-date" class="block text-sm font-medium  text-gray-700">Data da cobrança</label>
            <div class="relative mt-1">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"><Icon name="uil:calendar-alt" class="h-5 w-5 text-gray-400" /></div>
              <input type="date" id="billing-date" v-model="formData.billingDate" class="mt-1 block w-full rounded-sm p-3 pl-10 border border-gray-400 shadow-sm focus:border-gray-600 focus:ring-gray-600 sm:text-sm"/>
            </div>
          </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Meios de pagamento</label>
            <div class="mt-2 flex items-center gap-6">
              <div v-for="method in paymentMethodOptions" :key="method.value" class="flex items-center gap-2">
                <ToggleSwitch :id="`pm-${method.value}`" v-model="formData.paymentMethods[method.value]" />
                <label :for="`pm-${method.value}`" class="text-sm text-gray-600 flex items-center gap-1">
                  <Icon :name="method.icon" class="h-5 w-5" />
                  <span>{{ method.label }}</span>
                </label>
              </div>
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700">Repasse de taxas</label>
             <div class="mt-2 flex items-center gap-6">
              <div class="flex items-center gap-2">
                <ToggleSwitch id="tax-transfer" v-model="formData.taxOptions.comRepasse" />
                <label for="tax-transfer" class="text-sm text-gray-600">Com repasse de taxas</label>
              </div>
              <div class="flex items-center gap-2">
                <ToggleSwitch id="limit-installments" v-model="formData.taxOptions.limitarParcelamento" />
                <label for="limit-installments" class="text-sm text-gray-600">Limitar parcelamento</label>
              </div>
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700">Duração da assinatura</label>
            <div class="mt-2 flex items-center gap-6">
              <div class="flex items-center gap-2">
                <input id="duration-unlimited" type="radio" value="unlimited" v-model="formData.duration" class="h-4 w-4 rounded-sm border-gray-300 text-gray-700 focus:ring-gray-500">
                <label for="duration-unlimited" class="text-sm text-gray-600">Ilimitada</label>
              </div>
              <div class="flex items-center gap-2">
                <input id="duration-limited" type="radio" value="limited" v-model="formData.duration" class="h-4 w-4 rounded-sm border-gray-300 text-gray-700 focus:ring-gray-500">
                <label for="duration-limited" class="text-sm text-gray-600">Limitada</label>
              </div>
            </div>
          </div>
          
          <div class="md:col-span-2">
            <div class="relative flex items-start">
              <div class="flex h-5 items-center"><input id="proportional" v-model="formData.isProportional" type="checkbox" class="h-4 w-4 rounded-sm border-gray-300 text-gray-700 focus:ring-gray-500"></div>
              <div class="ml-3 text-sm">
                <label for="proportional" class="font-medium text-gray-700">Valor proporcional</label>
                <p class="text-gray-500">Os assinantes pagarão um valor proporcional pelos dias restantes até a primeira cobrança</p>
              </div>
            </div>
          </div>
          
        </div>

        <div class="mt-8 flex justify-end">
          <button type="submit" class="inline-flex items-center gap-2 rounded-md border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            <Icon name="uil:arrow-circle-right" class="h-5 w-5" />
            Gerar assinatura
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// Import the new component
import ToggleSwitch from '~/components/ToggleSwitch.vue';

const formData = ref({
  name: '',
  amount: '',
  frequency: 'Mensal',
  description: '',
  // UPDATED data structure for switches
  paymentMethods: {
    pix: false,
    debit_card: false,
    credit_card: true, // Default to true
  },
  // UPDATED data structure for switches
  taxOptions: {
    comRepasse: true, // Default to true
    limitarParcelamento: false,
  },
  duration: 'unlimited',
  billingDate: new Date().toISOString().slice(0, 10),
  isProportional: false,
});

const frequencyOptions = ['Semanal', 'Mensal', 'Trimestral', 'Semestral', 'Anual'];

const paymentMethodOptions = [
  { value: 'pix', label: 'PIX', icon: 'simple-icons:pix' },
  { value: 'debit_card', label: 'Cartão de Débito', icon: 'uil:card-atm' },
  { value: 'credit_card', label: 'Cartão de Crédito', icon: 'uil:credit-card' },
];

function submitForm() {
  // Now you get boolean values for the switches
  console.log('Form data submitted:', formData.value);
}
</script>