<script setup lang="ts">
import { RefreshCw } from 'lucide-vue-next'
import { useExchangeStore } from '@/stores/exchange'

const exchangeStore = useExchangeStore()
</script>

<template>
  <button
    @click="exchangeStore.toggleMode()"
    class="group flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-r bg-[#6E46E6] transition-all duration-300 hover:scale-105 active:scale-95"
  >
    <RefreshCw
      class="h-6 w-6 text-white transition-transform duration-500 group-hover:rotate-180"
      :stroke-width="2.5"
    />
  </button>
</template>
