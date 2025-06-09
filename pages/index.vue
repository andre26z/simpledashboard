<template>
  <div>
    <div class="flex items-center space-x-4 mb-6  ">
      <Icon name="uil:apps" class="w-8 h-8 text-gray-600" />
      <h3 class="text-gray-700 text-2xl font-semibold">Visão geral</h3>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-7 gap-6">

      <div class="lg:col-span-3 bg-white text-gray-800 rounded-lg p-6 shadow-sm flex flex-col">
        <div>
          <div class="flex justify-between items-start">
            <h4 class="font-semibold">
              {{ data.overview.tpv.title }}
            </h4>
            <div class="flex items-center text-green-500">
              <Icon name="uil:arrow-up-right" class="w-5 h-5" />
              <span class="ml-1 text-sm font-medium">
                {{ data.overview.tpv.percentageChange }}%
              </span>
            </div>
          </div>
        </div>
        <div class="mt-4 grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4">
            <div class="bg-gray-800 text-white rounded-lg p-6 flex flex-col justify-center">
              <p class="text-xs text-gray-300">Mês atual</p>
              <p class="text-xl text-green-400 font-bold">
                {{ formatCurrency(data.overview.tpv.currentMonth) }}
              </p>
            </div>
            <div class="bg-gray-100 rounded-lg p-4 flex flex-col justify-center border">
              <p class="text-xs text-gray-500">Mês anterior</p>
              <p class="font-semibold text-gray-700">
                {{ formatCurrency(data.overview.tpv.previousMonth) }}
              </p>
            </div>
        </div>

        <div class="mt-8 flex-grow">
           <LineChart :chartData="chartData" :chartOptions="chartOptions" />
        </div>
      </div>

      <div class="lg:col-span-4 flex flex-col gap-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StatCard 
              :title="data.overview.averageTicket.title"
              :currentValue="formatCurrency(data.overview.averageTicket.currentMonth)"
              :previousValue="formatCurrency(data.overview.averageTicket.previousMonth)"
              :percentageChange="data.overview.averageTicket.percentageChange"
            />
            <StatCard 
              :title="data.overview.transactionCount.title"
              :currentValue="data.overview.transactionCount.currentMonth.toLocaleString('pt-BR')"
              :previousValue="data.overview.transactionCount.previousMonth.toLocaleString('pt-BR')"
              :percentageChange="data.overview.transactionCount.percentageChange"
            />
        </div>

        <StatCard 
          :title="data.overview.markup.title"
          :currentValue="data.overview.markup.currentMonth.toString()"
          :previousValue="data.overview.markup.previousMonth.toString()"
          :percentageChange="data.overview.markup.percentageChange"
        />
      </div>

    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import StatCard from '~/components/StatCard.vue';
import LineChart from '~/components/LineChart.vue';
import dashboardData from '~/data/dashboardData.json';

const data = ref(dashboardData);

const formatCurrency = (value) => {
  if (typeof value !== 'number') return '';
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};


const chartData = computed(() => ({
  labels: data.value.tpvProgression.labels,
  datasets: [
    {
      label: 'Progressão de TPV',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: '#1F2937', 
      pointBackgroundColor: '#1F2937',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#1F2937',
      tension: 0.4,
      data: data.value.tpvProgression.data,
      pointStyle: 'circle',
      pointRadius: 5,
      pointHoverRadius: 7,
    },
  ],
}));

// Chart.js options
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: false,
      ticks: {
        callback: function(value) {
            if (value >= 1000000) return 'R$ ' + (value / 1000000) + ' m';
            if (value >= 1000) return 'R$ ' + (value / 1000) + ' k';
            return 'R$ ' + value;
        },
        stepSize: 3400000
      },
      grid: {
        drawBorder: false,
        color: '#E5E7EB', // gray-200
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
       backgroundColor: '#000',
       titleFont: {
         size: 14,
       },
       bodyFont: {
         size: 12,
       },
       displayColors: false,
       callbacks: {
          label: function(context) {
             if (context.parsed.y !== null) {
                return formatCurrency(context.parsed.y);
             }
             return '';
          },
          title: function() {
            return '';
          }
       }
    }
  },
});
</script>