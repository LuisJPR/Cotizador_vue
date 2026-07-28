# 💱 Cotizador de Divisas

## 📷 Vista previa

![Vista previa](./public/preview.png)

Aplicación web desarrollada con **Vue 3**, **TypeScript**, **Pinia**, **Tailwind CSS** y **Firebase Firestore**, que permite realizar conversiones entre **Soles (PEN)** y **Dólares (USD)** utilizando tasas de cambio actualizadas en tiempo real.

## 🚀 Demo

- **Aplicación desplegada:** https://tipodecambio.netlify.app/
- **Repositorio:** https://github.com/LuisJPR/Cotizador_vue

---

## 📌 Características

- ✅ Conversión de **Soles ↔ Dólares**.
- ✅ Actualización automática de tasas mediante **Firebase Firestore**.
- ✅ Cambio entre modo **Compra** y **Venta**.
- ✅ Conversión bidireccional (ambos campos son editables).
- ✅ Validación de entradas numéricas.
- ✅ Interfaz responsive basada en el diseño proporcionado en Figma.
- ✅ Estado global implementado con **Pinia**.
- ✅ Código modular siguiendo separación de responsabilidades.

---

## 🛠️ Tecnologías utilizadas

- Vue 3
- TypeScript
- Vite
- Pinia
- Tailwind CSS
- Firebase Firestore
- SweetAlert2
- Lucide Vue Next

---

## 📂 Estructura del proyecto

```text
src/
│
├── assets/
├── components/
│   ├── CurrencyField.vue
│   ├── ExchangeCard.vue
│   ├── HeroSection.vue
│   ├── RateTabs.vue
│   └── SwapButton.vue
│
├── firebase/
│   └── firebase.ts
│
├── services/
│   └── exchangeService.ts
│
├── stores/
│   └── exchange.ts
│
├── App.vue
└── main.ts
```

---

## ⚙️ Instalación

Clonar el repositorio:

```bash
git clone https://github.com/LuisJPR/Cotizador_vue.git
```

Ingresar al proyecto:

```bash
cd Cotizador_vue
```

Instalar dependencias:

```bash
npm install
```

---

## 🔐 Variables de entorno

Crear un archivo `.env` tomando como referencia el archivo `.env.example`.

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

---

## ▶️ Ejecutar el proyecto

```bash
npm run dev
```

Abrir en el navegador:

```
http://localhost:5173
```

---

## 📦 Compilar para producción

```bash
npm run build
```

Vista previa de producción:

```bash
npm run preview
```

---

## 📖 Funcionamiento

### Compra de dólares

```text
Monto en dólares × purchase_price = Monto en soles
```

### Venta de dólares

```text
Monto en soles ÷ sale_price = Monto en dólares
```

Las tasas de cambio son obtenidas desde **Firebase Firestore** y se actualizan automáticamente mediante un listener en tiempo real (`onSnapshot`).

---

## 📝 Notas

Este proyecto fue desarrollado como parte de una prueba técnica implementando los siguientes requisitos:

- Vue 3 + TypeScript
- Pinia para manejo de estado
- Tailwind CSS
- Firebase Firestore
- Actualización de tasas en tiempo real
- Comunicación entre componentes
- Diseño responsive basado en Figma

---

## 👨‍💻 Autor

**Luis Pacherrez**
