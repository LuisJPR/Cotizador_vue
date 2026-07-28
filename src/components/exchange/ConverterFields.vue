<script setup lang="ts">
import CurrencyField from './CurrencyField.vue'
import SwapButton from './SwapButton.vue'
import { useExchangeStore } from '@/stores/exchange'

const exchangeStore = useExchangeStore()

// Función que procesa el valor ingresado por el usuario en el primer campo
function handleFromAmountChange(value: string) {
  const amount = Number(value)

  exchangeStore.setFromAmount(isNaN(amount) ? 0 : amount)
}

// Función que procesa el valor ingresado por el usuario en el segundo campo
function handleToAmountChange(value: string) {
  const amount = Number(value)

  exchangeStore.setToAmount(isNaN(amount) ? 0 : amount)
}
</script>

<template>
  <div class="relative flex flex-col gap-4 py-6">
    <CurrencyField
      :currency="exchangeStore.fromCurrency"
      helper="Envías"
      :symbol="exchangeStore.fromSymbol"
      :value="exchangeStore.fromAmount.toString()"
      :readonly="false"
      @update:value="handleFromAmountChange"
    />

    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <SwapButton />
    </div>

    <CurrencyField
      :currency="exchangeStore.toCurrency"
      helper="Recibes"
      :symbol="exchangeStore.toSymbol"
      :value="exchangeStore.toAmount.toString()"
      :readonly="false"
      @update:value="handleToAmountChange"
    />
  </div>
</template>
