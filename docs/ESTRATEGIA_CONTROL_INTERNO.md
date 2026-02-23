# Proyecto: SAVI Control Comercial 🚀
**Estrategia de Inteligencia de Negocios y Omnicanalidad**

Este documento define la arquitectura técnica y comercial para la gestión de leads de **SAVI Construcciones**. El enfoque es el de una **Torre de Control Visual** que mide, registra y optimiza la respuesta comercial sin costos mensuales de licencias.

---

## 🎯 Objetivo General
Implementar un sistema de **Inteligencia Comercial** que centralice la detección de prospectos, mida los tiempos de respuesta del equipo y genere métricas de conversión, manteniendo una estética "Apple Premium" y un costo operativo de **$0 MXN**.

---

## 🏗️ 1. Arquitectura: "Universal Interaction Feed"
En lugar de intentar reemplazar las plataformas de Meta (WhatsApp/IG), SAVI Control actúa como un **Registrador Central de Interacciones**.

### Eventos Rastreables:
*   **Web Leads:** Formularios de contacto y recursos.
*   **WhatsApp Clicks:** Activación del botón de contacto (rastreo de inicio de chat).
*   **Social Clicks:** Derivación desde botones de Instagram o Messenger.
*   **Email:** Registro de recepción vía Hostinger.
*   **Entrada Manual:** Registro de recomendaciones o llamadas directas.

---

## 📊 2. Inteligencia Comercial & Trazabilidad

### A. Semáforo de Respuesta (SLA - Service Level Agreement)
El sistema mide el tiempo transcurrido desde la detección del lead hasta la acción del asesor:
*   🟢 **Excelente:** < 5 min.
*   🟡 **En Riesgo:** 5 – 15 min.
*   🔴 **Crítico:** > 15 min (Dispara alerta de abandono vía Telegram).

### B. Deep-Linking & Respuestas Dinámicas
El Dashboard no intenta controlar el chat, sino que **dirige** al asesor.
*   **Acción:** Al dar clic en "Responder", el sistema abre la pestaña nativa exacta (wa.me o Business Suite) con una **Plantilla Dinámica** pre-copiada.
*   **Variables:** `Hola {{nombre}}, soy {{asesor}} de SAVI. Recibimos tu interés en {{proyecto}}...`

---

## 🛠️ 3. Stack Tecnológico ($0 Cost)

| Componente | Tecnología | Rol |
| :--- | :--- | :--- |
| **Arquitectura** | **Next.js (App Router)** | Interfaz Apple Style & Lógica de ruteo. |
| **Cerebro / DB** | **Supabase** | Motor de base de datos y autenticación de roles. |
| **Puenting** | **Make.com / Web3Forms** | Transporte de datos y detección de eventos. |
| **Notificaciones** | **Telegram Bot** | Alertas instantáneas (Pager corporativo). |

---

## 🛤️ 4. Roadmap de Implementación

### Fase 1: Torre de Control ($0)
*   Panel privado con Login (Roles: 1 Admin, 2 Ventas).
*   Registro de todos los canales de entrada.
*   Medición de Tiempos de Respuesta.
*   Plantillas Inteligentes y Deep Links.
*   Métricas de fuente de leads (¿De dónde vienen?).

### Fase 2: Integración Avanzada
*   Conexión vía Webhooks para registro automático de DMs.
*   Integración con WhatsApp Cloud API (solo si el volumen lo justifica).

---

## 🎨 Directriz Estética
Es requisito innegociable **mantener la lógica visual de saviconstrucciones.com** (estética Apple Premium, transparencias `glass`, minimalismo técnico). El sistema debe sentirse como una herramienta diseñada por un estudio de ingeniería de élite, no como un software genérico de oficina.

---

**SAVI Control Comercial: Donde la arquitectura de sistemas se une a la arquitectura de construcción.**
