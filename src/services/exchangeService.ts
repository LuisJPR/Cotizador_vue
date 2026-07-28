import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase/firebase'

export interface ExchangeRate {
  purchase_price: number
  sale_price: number
}

// Referencia al documento donde se almacenan las tasas de cambio
const ratesRef = doc(db, 'rates', 'TDmXIypgLKKfNggHHSnw')

// Escuchamos los cambios en tiempo real del documento de tasas
export function listenExchangeRate(callback: (rate: ExchangeRate) => void) {
  return onSnapshot(ratesRef, (snapshot) => {
    if (!snapshot.exists()) return

    const data = snapshot.data() as ExchangeRate

    callback(data)
  })
}
