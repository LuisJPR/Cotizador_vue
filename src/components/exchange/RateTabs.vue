<script setup lang="ts">
defineProps<{
  mode: 'purchase' | 'sale'
  purchasePrice: number
  salePrice: number
}>()

const emit = defineEmits<{
  (e: 'change', value: 'purchase' | 'sale'): void
}>()
</script>

<template>
  <div class="flex border-b border-[#E7E7ED]">
    <!-- Compra -->
    <button class="flex flex-1 justify-center pt-7" @click="emit('change', 'purchase')">
      <div
        class="flex flex-col items-center border-b-2 pb-2 px-3 transition-all duration-300"
        :class="mode === 'purchase' ? 'border-[#2F00FF]' : 'border-transparent'"
      >
        <span
          class="text-xs font-normal transition-all duration-300"
          :class="mode === 'purchase' ? 'text-[#2F00FF]' : 'text-[#717191]'"
        >
          Dólar compra
        </span>
        <span
          class="mt-1 text-xs font-semibold"
          :class="mode === 'purchase' ? 'text-[#2F00FF]' : 'text-[#3D3D67]'"
        >
          {{ purchasePrice.toFixed(4) }}
        </span>
      </div>
    </button>

    <!-- Venta -->
    <button class="flex flex-1 justify-center pt-7" @click="emit('change', 'sale')">
      <div
        class="flex flex-col items-center border-b-2 pb-2 px-3 transition-all duration-300"
        :class="mode === 'sale' ? 'border-[#2F00FF]' : 'border-transparent'"
      >
        <span
          class="text-xs font-normal transition-all duration-300"
          :class="mode === 'sale' ? 'text-[#2F00FF]' : 'text-[#717191]'"
        >
          Dólar venta
        </span>
        <span
          class="mt-1 text-xs font-semibold"
          :class="mode === 'sale' ? 'text-[#2F00FF]' : 'text-[#3D3D67]'"
        >
          {{ salePrice.toFixed(4) }}
        </span>
      </div>
    </button>
  </div>
</template>
