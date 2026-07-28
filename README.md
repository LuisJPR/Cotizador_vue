# 💱 Cotizador de Divisas

Aplicación web desarrollada con **Vue 3**, **TypeScript**, **Pinia**, **Tailwind CSS** y **Firebase Firestore** que permite cotizar la compra y venta de dólares y soles en tiempo real.

## 📌 Características

- Conversión de **Soles ↔ Dólares**.
- Actualización automática de las tasas mediante **Firebase Firestore**.
- Cambio entre **Compra** y **Venta**.
- Conversión bidireccional (ambos campos son editables).
- Validación de entradas numéricas.
- Interfaz responsive basada en el diseño proporcionado en Figma.
- Estado global implementado con **Pinia**.
- Código modular y documentado.

---

## 🚀 Tecnologías utilizadas

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

```
src/
│
├── components/
│   ├── HeroSection.vue
│   ├── ExchangeCard.vue
│   ├── RateTabs.vue
│   ├── CurrencyField.vue
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
├── assets/
│
├── App.vue
└── main.ts
```

---

## ⚙️ Instalación

Clonar el repositorio:

```bash
git clone https://github.com/TU_USUARIO/cotizador-vue.git
```

Entrar al proyecto:

```bash
cd cotizador-vue
```

Instalar dependencias:

```bash
npm install
```

---

## 🔐 Variables de entorno

Crear un archivo `.env` en la raíz del proyecto utilizando como referencia el archivo `.env.example`.

Completar las siguientes variables:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

---

## ▶️ Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

---

## 📦 Generar versión de producción

```bash
npm run build
```

Para previsualizar la versión compilada:

```bash
npm run preview
```

---

## 📖 Funcionalidad

### Compra de dólares

```
Monto en dólares × purchase_price = Monto en soles
```

### Venta de dólares

```
Monto en soles ÷ sale_price = Monto en dólares
```

Las tasas de cambio son obtenidas desde **Firebase Firestore** y se actualizan automáticamente mediante un listener en tiempo real (`onSnapshot`).

---

## 🌐 Despliegue

La aplicación se encuentra desplegada en:

**Netlify**

(Agregar enlace una vez publicado)

---

## 👨‍💻 Autor

Luis Pacherrez
