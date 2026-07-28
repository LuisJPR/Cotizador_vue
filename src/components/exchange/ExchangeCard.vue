<script setup lang="ts">
import { ref } from 'vue'
import Swal from 'sweetalert2'

import RateTabs from './RateTabs.vue'
import ConverterFields from './ConverterFields.vue'
import BaseButton from '../common/BaseButton.vue'
import { useExchangeStore } from '@/stores/exchange'

const exchangeStore = useExchangeStore()

// Muestra un resumen de la operacion en un modal
function showSummary() {
  const summary = exchangeStore.getOperationSummary()

  Swal.fire({
    title: 'Resumen de la operación',

    icon: 'info',

    confirmButtonText: 'Entendido',

    confirmButtonColor: '#6E46E6',

    html: `
      <div style="text-align:left">

        <p><strong>Tipo de cambio:</strong><br>${summary.mode}</p>

        <br>

        <p>
          <strong>Envías:</strong><br>
          ${summary.sendCurrency} ${summary.sendAmount.toFixed(2)}
        </p>

        <br>

        <p>
          <strong>Recibes:</strong><br>
          ${summary.receiveCurrency} ${summary.receiveAmount.toFixed(2)}
        </p>

        <br>

        <p>
          <strong>Tasa aplicada:</strong><br>
          ${summary.rate.toFixed(4)}
        </p>

      </div>
    `,
  })
}
</script>

<template>
  <div class="w-full max-w-107.5 rounded-lg bg-white shadow-2xl">
    <RateTabs
      :mode="exchangeStore.currentMode"
      :purchase-price="exchangeStore.exchangeRate.purchase_price"
      :sale-price="exchangeStore.exchangeRate.sale_price"
      @change="exchangeStore.setMode"
    />

    <div class="p-8">
      <ConverterFields />
      <BaseButton @click="showSummary"> Iniciar operación </BaseButton>
    </div>
  </div>
</template>
