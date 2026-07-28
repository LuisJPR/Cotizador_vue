import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { listenExchangeRate } from '@/services/exchangeService'

// Store principal del cotizador.
export const useExchangeStore = defineStore('exchange', () => {
  // Modo actual de cotización: 'purchase' para compra y 'sale' para venta.
  const currentMode = ref<'purchase' | 'sale'>('purchase')

  // Tasas de cambio de compra y venta del dólar en soles.
  const exchangeRate = ref({
    purchase_price: 3.924,
    sale_price: 3.945,
  })

  const fromCurrency = computed(() => (currentMode.value === 'purchase' ? 'Dólares' : 'Soles'))
  const toCurrency = computed(() => (currentMode.value === 'purchase' ? 'Soles' : 'Dólares'))
  const fromSymbol = computed(() => (currentMode.value === 'purchase' ? '$' : 'S/'))
  const toSymbol = computed(() => (currentMode.value === 'purchase' ? 'S/' : '$'))

  const fromAmount = ref(500)
  const toAmount = ref(0)

  // Indica cual fue el ultimo campo editado por el usuario
  const editingField = ref<'from' | 'to'>('from')

  // Función para cambiar el modo de cotización (compra o venta).
  function setMode(mode: 'purchase' | 'sale') {
    currentMode.value = mode
    convert()
  }

  // Función que alterna entre compra y venta
  function toggleMode() {
    currentMode.value = currentMode.value === 'purchase' ? 'sale' : 'purchase'
    convert()
  }

  // Función para convertir el monto de soles a dólares o viceversa según el modo actual.
  function convert() {
    // COMPRA DE DÓLARES
    if (currentMode.value === 'purchase') {
      if (editingField.value === 'from') {
        // Dólares -> Soles
        toAmount.value = Number((fromAmount.value * exchangeRate.value.purchase_price).toFixed(2))
      } else {
        // Soles -> Dólares
        fromAmount.value = Number((toAmount.value / exchangeRate.value.purchase_price).toFixed(2))
      }
    }

    // VENTA DE DÓLARES
    else {
      if (editingField.value === 'from') {
        // Soles -> Dólares
        toAmount.value = Number((fromAmount.value / exchangeRate.value.sale_price).toFixed(2))
      } else {
        // Dólares -> Soles
        fromAmount.value = Number((toAmount.value * exchangeRate.value.sale_price).toFixed(2))
      }
    }
  }

  convert()

  // Función para actualizar el monto de primer campo y realizar la conversión.
  function setFromAmount(amount: number) {
    editingField.value = 'from'
    fromAmount.value = amount
    convert()
  }

  // Función para actualizar el monto del segundo campo y realizar la conversión.
  function setToAmount(amount: number) {
    editingField.value = 'to'
    toAmount.value = amount
    convert()
  }

  // Inicializa la escucha de las tasas de cammbio desde firebase
  function initExchangeRateListener() {
    listenExchangeRate((rate) => {
      exchangeRate.value = rate

      convert()
    })
  }

  // Función que devuelve un resumen de la operación actual, modal
  function getOperationSummary() {
    const isPurchase = currentMode.value === 'purchase'

    return {
      mode: isPurchase ? 'Compra de dólares' : 'Venta de dólares',

      sendCurrency: isPurchase ? '$' : 'S/',

      receiveCurrency: isPurchase ? 'S/' : '$',

      sendAmount: fromAmount.value,

      receiveAmount: toAmount.value,

      rate: isPurchase ? exchangeRate.value.purchase_price : exchangeRate.value.sale_price,
    }
  }

  return {
    currentMode,
    exchangeRate,
    fromAmount,
    toAmount,
    setMode,
    editingField,
    setFromAmount,
    setToAmount,
    fromCurrency,
    toCurrency,
    fromSymbol,
    toSymbol,
    toggleMode,
    initExchangeRateListener,
    getOperationSummary,
  }
})
