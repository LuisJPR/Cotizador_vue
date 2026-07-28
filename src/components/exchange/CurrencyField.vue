<script setup lang="ts">
defineProps<{
  currency: string
  helper: string
  symbol: string
  value: string
  readonly?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:value', value: string): void
}>()

function handleInput(event: Event) {
  const input = event.target as HTMLInputElement

  let value = input.value

  // Elimina cualquier carácter que no sea número o punto
  value = value.replace(/[^\d.]/g, '')

  // Permite solamente un punto decimal
  const parts = value.split('.')

  if (parts.length > 2) {
    value = `${parts[0]}.${parts.slice(1).join('')}`
  }

  input.value = value

  emit('update:value', value)
}
</script>

<template>
  <div class="flex h-14 overflow-hidden rounded-lg border border-[#6E46E6]">
    <!-- Columna izquierda -->
    <div class="flex w-1/3 items-center justify-center bg-[#F3F3F6]">
      <span class="text-sm font-normal text-[#6E46E6]">
        {{ currency }}
      </span>
    </div>

    <!-- Columna derecha -->
    <div class="flex flex-1 flex-col items-end justify-center px-4">
      <span class="text-xs text-[#717191]">
        {{ helper }}
      </span>

      <div class="flex items-center">
        <span class="text-sm text-[#3D3D67]">
          {{ symbol }}
        </span>

        <input
          class="w-16 bg-transparent text-right font-normal text-[#3D3D67] outline-none"
          :value="value"
          :readonly="readonly"
          type="text"
          inputmode="decimal"
          autocomplete="off"
          spellcheck="false"
          @input="handleInput"
        />
      </div>
    </div>
  </div>
</template>
