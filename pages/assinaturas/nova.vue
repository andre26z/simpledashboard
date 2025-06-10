<template>
  <div>
    <div class="flex items-center space-x-4 mb-6">
      <Icon name="uil:file-plus-alt" class="w-8 h-8 text-gray-600" />
      <h3 class="text-gray-800 text-xl md:text-2xl font-semibold">Nova assinatura</h3>
    </div>

    <div class="bg-white p-6 md:p-8 rounded-lg shadow-sm">
      <form @submit.prevent="submitForm">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <label for="subscription-name" class="block text-sm font-medium text-gray-700">Nome da assinatura</label>
            <input
              type="text"
              id="subscription-name"
              v-model="formData.name"
              placeholder="Digite o nome da assinatura"
              class="mt-1 block w-full rounded-sm p-3 border border-gray-400 shadow-sm focus:border-gray-600 focus:ring-gray-600 text-sm"
              required
            />
          </div>

          <div>
            <label for="subscription-amount" class="block text-sm font-medium text-gray-700">Valor da cobrança</label>
            <input
              type="text"
              id="subscription-amount"
              :value="formattedAmount"
              @input="handleAmountInput"
              placeholder="R$ 0,00"
              class="mt-1 block w-full rounded-sm p-3 border border-gray-400 shadow-sm focus:border-gray-600 focus:ring-gray-600 text-sm"
              required
            />
          </div>

          <div class="md:col-span-1">
            <label class="block text-sm font-medium text-gray-700">Qual a frequência da cobrança?</label>
            <div class="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-2">
                <button v-for="freq in frequencyOptions" :key="freq" type="button" @click="formData.frequency = freq" :class="['cursor-pointer rounded-md py-1 md:py-2 px-1 md:px-2 text-xs md:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600', formData.frequency === freq ? 'bg-gray-800 text-xs md:text-sm text-white hover:bg-gray-900' : 'bg-white text-gray-700 border border-gray-500 hover:bg-gray-50']">{{ freq }}</button>
            </div>
        </div>
          
          <div class="md:row-span-3 space-y-6">
            <div>
              <label for="description" class="block text-sm font-medium text-gray-700">Descrição (opcional)</label>
              <textarea id="description" v-model="formData.description" rows="7" placeholder="Acrescente uma descrição" class="mt-1 block w-full rounded-sm p-3 border border-gray-400 shadow-sm focus:border-gray-600 focus:ring-gray-600 text-sm"></textarea>
            </div>

            <div>
              <label for="billing-date" class="block text-sm font-medium text-gray-700">Data da cobrança</label>
              <div class="relative mt-1">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"><Icon name="uil:calendar-alt" class="h-5 w-5 text-gray-400" /></div>
                <input type="date" id="billing-date" v-model="formData.billingDate" class="block w-full rounded-sm p-3 pl-10 border border-gray-400 shadow-sm focus:border-gray-600 focus:ring-gray-600 text-sm"/>
              </div>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Meios de pagamento</label>
            <div class="mt-2 flex flex-wrap items-center gap-y-3 gap-x-6">
              <div v-for="method in paymentMethodOptions" :key="method.value" class="flex items-center gap-2">
                <ToggleSwitch
                  :id="`pm-${method.value}`"
                  :modelValue="formData.paymentMethod === method.value"
                  @update:modelValue="formData.paymentMethod = method.value"
                />
                <label :for="`pm-${method.value}`" class="text-sm text-gray-600 flex items-center gap-1">
                  <Icon :name="method.icon" class="h-5 w-5" />
                  <span>{{ method.label }}</span>
                </label>
              </div>
            </div>
          </div>
          
          <div>
          <label class="block text-sm font-medium text-gray-700">Repasse de taxas</label>
            <div class="mt-2 flex flex-wrap items-center gap-y-3 gap-x-6">
            <div class="flex items-center gap-2">
              <ToggleSwitch
                id="tax-transfer"
                :modelValue="formData.taxOption === 'comRepasse'"
                @update:modelValue="formData.taxOption = 'comRepasse'"
              />
              <label for="tax-transfer" class="text-sm text-gray-600">Com repasse de taxas</label>
            </div>
            <div class="flex items-center gap-2">
              <ToggleSwitch
                id="limit-installments"
                :modelValue="formData.taxOption === 'limitarParcelamento'"
                @update:modelValue="formData.taxOption = 'limitarParcelamento'"
              />
              <label for="limit-installments" class="text-sm text-gray-600">Limitar parcelamento</label>
            </div>
          </div>
        </div>
          
        <div>
            <label class="block text-sm font-medium text-gray-700">Duração da assinatura</label>
            <div class="mt-2 flex items-center gap-6">

              <div
                class="flex items-center gap-2 cursor-pointer"
                @click="formData.duration = 'unlimited'"
              >
                <div
                  :class="[
                    'h-4 w-4 rounded-sm flex items-center justify-center border transition-colors duration-150',
                    formData.duration === 'unlimited'
                      ? 'bg-gray-700 border-gray-700'
                      : 'bg-white border-gray-400'
                  ]"
                >
                  <Icon
                    v-if="formData.duration === 'unlimited'"
                    name="uil:check"
                    class="h-3 w-3 text-white"
                  />
                </div>
                <span class="text-sm text-gray-600 select-none">Ilimitada</span>
              </div>

              <div
                class="flex items-center gap-2 cursor-pointer"
                @click="formData.duration = 'limited'"
              >
                <div
                  :class="[
                    'h-4 w-4 rounded-sm flex items-center justify-center border transition-colors duration-150',
                    formData.duration === 'limited'
                      ? 'bg-gray-700 border-gray-700'
                      : 'bg-white border-gray-400'
                  ]"
                >
                  <Icon
                    v-if="formData.duration === 'limited'"
                    name="uil:check"
                    class="h-3 w-3 text-white"
                  />
                </div>
                <span class="text-sm text-gray-600 select-none">Limitada</span>
              </div>

            </div>
          </div>

          <div class="md:col-span-2">
            <label for="proportional" class="block text-sm font-medium text-gray-700">Valor proporcional</label>
          <div class="mt-2 flex items-center">
            <div class="flex h-5 items-center">
              <ToggleSwitch id="proportional" v-model="formData.isProportional" />
            </div>
            <div class="ml-3 text-sm">
              <p class="text-gray-600">Os assinantes pagarão um valor proporcional pelos dias restantes até a primeira cobrança</p>
            </div>
          </div>
        </div>
          
        </div>

        <div class="mt-8 flex justify-end">
          <button
            type="submit"
            :disabled="isLoading"
            class="inline-flex items-center gap-2 rounded-md border border-transparent bg-gray-800 px-6 py-3 text-sm md:text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <template v-if="isLoading">
              <Icon name="uil:spinner" class="animate-spin h-5 w-5" />
              <span>Gerando...</span>
            </template>
            <template v-else>
              <Icon name="uil:arrow-circle-right" class="h-5 w-5 cursor-pointer" />
              <span>Gerar assinatura</span>
            </template>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'; // 1. Import nextTick
import { useRouter } from 'vue-router';
import { useToast } from '~/composables/useToast';
import ToggleSwitch from '~/components/ToggleSwitch.vue';

const router = useRouter();
const { showToast } = useToast();

const isLoading = ref(false);

const formData = ref({
  name: '',
  amount: null,
  frequency: 'Mensal',
  description: '',
  paymentMethod: 'credit_card', 
  taxOption: 'comRepasse',
  duration: 'unlimited', 
  billingDate: new Date().toISOString().slice(0, 10),
  isProportional: false,
});

// The computed property for formatting the value remains the same
const formattedAmount = computed(() => {
  if (formData.value.amount === null) {
    return '';
  }
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(formData.value.amount);
});

// 2. Create a new method to handle the input event directly
function handleAmountInput(event) {
  // Get the current input value
  const value = event.target.value;
  // Clean the value to store only digits
  let digitsOnly = value.replace(/\D/g, '');

  // Update the underlying data model
  if (digitsOnly) {
    formData.value.amount = parseFloat(digitsOnly) / 100;
  } else {
    formData.value.amount = null;
  }

  // Use nextTick to force the input to display the re-formatted value immediately.
  // This overwrites any invalid characters (like letters) the user typed.
  nextTick(() => {
    event.target.value = formattedAmount.value;
  });
}

const frequencyOptions = ['Semanal', 'Mensal', 'Trimestral', 'Semestral', 'Anual'];

const paymentMethodOptions = [
  { value: 'pix', label: 'PIX', icon: 'simple-icons:pix' },
  { value: 'debit_card', label: 'Cartão de Débito', icon: 'uil:card-atm' },
  { value: 'credit_card', label: 'Cartão de Crédito', icon: 'uil:credit-card' },
];

async function submitForm() {
  if (!formData.value.name || !formData.value.amount) {
    showToast('Nome da assinatura e Valor são obrigatórios.');
    return;
  }
  
  isLoading.value = true;
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value), 
    });

    if (!response.ok) {
      throw new Error('A resposta da rede não foi "ok"');
    }

    showToast('Assinatura gerada');

    setTimeout(() => {
      router.push('/');
    }, 1500); 

  } catch (error) {
    console.error('Falha ao gerar assinatura:', error);
    isLoading.value = false;
  }
}
</script>