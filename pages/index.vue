<template>
  <div>
    <h3 class="text-gray-700 text-3xl font-medium">Visão geral</h3>

    <div class="mt-4">
      <div class="grid gap-6 mb-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <!-- TPV Card (Special Styling) -->
        <div class="bg-gray-800 text-white rounded-lg p-6">
          <div class="flex justify-between items-start">
            <h4 class="font-semibold text-lg">
              {{ data.overview.tpv.title }}
            </h4>
            <div class="flex items-center text-green-400">
              <Icon name="uil:arrow-up-right" class="w-5 h-5" />
              <span class="ml-1 text-sm font-medium">
                {{ data.overview.tpv.percentageChange }}%
              </span>
            </div>
          </div>
          <div class="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p class="text-sm text-gray-400">Mês atual</p>
              <p class="text-2xl font-bold">
                {{ formatCurrency(data.overview.tpv.currentMonth) }}
              </p>
            </div>
            <div>
              <p class="text-sm text-gray-400">Mês anterior</p>
              <p class="text-lg font-medium text-gray-300">
                {{ formatCurrency(data.overview.tpv.previousMonth) }}
              </p>
            </div>
          </div>
        </div>

        <!-- Other Stat Cards -->
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
         <StatCard 
          :title="data.overview.markup.title"
          :currentValue="data.overview.markup.currentMonth.toString()"
          :previousValue="data.overview.markup.previousMonth.toString()"
          :percentageChange="data.overview.markup.percentageChange"
          noCurrency
        />
      </div>
    </div>

    <div class="mt-8">
       <div class="bg-white p-6 rounded-lg shadow-sm">
          <LineChart :chartData="chartData" :chartOptions="chartOptions" />
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

// Computed property to format data for the chart component
const chartData = computed(() => ({
  labels: data.value.tpvProgression.labels,
  datasets: [
    {
      label: 'Progressão de TPV',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: '#1F2937', // dark gray
      pointBackgroundColor: '#1F2937',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#1F2937',
      tension: 0.4,
      data: data.value.tpvProgression.data,
    },
  ],
}));

// Chart.js options
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: function(value, index, values) {
          if (value >= 1000000) {
            return 'R$ ' + (value / 1000000) + ' m';
          }
          if (value >= 1000) {
            return 'R$ ' + (value / 1000) + ' k';
          }
          return 'R$ ' + value;
        }
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
       callbacks: {
          label: function(context) {
             let label = context.dataset.label || '';
             if (label) {
                label += ': ';
             }
             if (context.parsed.y !== null) {
                label += formatCurrency(context.parsed.y);
             }
             return label;
          }
       }
    }
  },
});
</script>