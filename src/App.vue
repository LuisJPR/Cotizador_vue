<script setup lang="ts">
import HeroSection from './components/exchange/HeroSection.vue'
import ExchangeCard from './components/exchange/ExchangeCard.vue'
import { onMounted } from 'vue'
import { useExchangeStore } from '@/stores/exchange'

const exchangeStore = useExchangeStore()

onMounted(() => {
  exchangeStore.initExchangeRateListener()
})
</script>

<template>
  <main class="min-h-screen bg-linear-to-r from-(--primary-dark) to-(--primary)">
    <div
      class="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-8 px-6 py-12 lg:flex-row lg:justify-between lg:px-10"
    >
      <HeroSection />

      <ExchangeCard />
    </div>
  </main>
</template>
