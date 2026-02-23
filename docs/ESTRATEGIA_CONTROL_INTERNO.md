# Proyecto: SAVI Control Comercial 🚀
**Arquitectura Soberana de Inteligencia Comercial & Operativa**

Este documento define la estructura técnica y estratégica para la gestión de leads de **SAVI Construcciones**. Se prioriza una **arquitectura soberana** con dependencia mínima de servicios externos, diseñada para escalar junto con el flujo operativo de la empresa.

---

## 🎯 Objetivo General
Implementar un sistema de **Inteligencia Comercial** centralizado que registre, mida y optimice el ciclo de vida del prospecto mediante una arquitectura de datos propia, garantizando estabilidad técnica y un costo operativo de **$0 MXN**.

---

## 🏗️ 1. Arquitectura: "Interaction Ledger"
SAVI Control no es una bandeja de entrada; es un **Registro Maestro de Eventos (Ledger)**. Toda interacción, manual o automática, genera un asiento contable en la base de datos para garantizar trazabilidad absoluta.

### Captura de Eventos Calificados:
*   **Web Ingest:** Registro directo desde formularios vía Next.js API Routes.
*   **Interaction Logging:** Historial de clics en puntos de contacto (WA, IG, Messenger).
*   **Manual Entry:** Cargas directas de prospección "boca en boca" o llamadas.
*   **Template Tracking:** Registro de qué guion de respuesta se utilizó, por quién y en qué canal, para medir la efectividad del mensaje.

---

## 📊 2. Inteligencia Comercial & Pipeline

### A. Pipeline Comercial (Estatus Real)
El sistema gestiona el prospecto a través de etapas claras de conversión:
1.  **Nuevo:** Registro inicial sin atención.
2.  **Contactado:** Primera respuesta registrada.
3.  **Calificado:** Interés técnico validado por ventas.
4.  **Cotización Enviada:** Propuesta económica en manos del cliente.
5.  **Negociación:** Ajustes técnicos/financieros.
6.  **Garantizado (Cerrado Ganado):** Proyecto firmado.
7.  **Descartado (Cerrado Perdido):** Con análisis de causa raíz.

### B. Semáforo SLA (Service Level Agreement)
Medición de velocidad basada en el **Primer Evento de Interacción Registrada**:
*   🟢 **Élite:** < 5 min. (Máxima probabilidad de cierre).
*   🟡 **Estándar:** 5 – 15 min.
*   🔴 **Crítico:** > 15 min. (Notificación de abandono a Dirección).

---

## 🛠️ 3. Stack Tecnológico Soberano

| Componente | Tecnología | Rol |
| :--- | :--- | :--- |
| **Core UI** | **Next.js (App Router)** | Interfaz & Densidad Operativa. |
| **Middle & API** | **Next.js API Routes** | Lógica de negocio y procesamiento de eventos. |
| **Persistencia** | **Supabase (PostgreSQL)** | Base de datos relacional y gestión de archivos. |
| **Auth** | **Supabase Auth** | Control de roles (Admins / Ventas). |
| **Alertas** | **Telegram Bot API** | Pager instantáneo directo desde el servidor SAVI. |

---

## 🛤️ 4. Roadmap de Implementación

### Fase 0: Fundacional (Estrategia)
*   Modelado de datos en PostgreSQL.
*   Definición oficial de flujos comerciales y SLAs.
*   Diseño de KPIs de conversión.

### Fase 1: SAVI Hub Operativo ($0)
*   Dashboard de control con densidad de información profesional.
*   Interaction Ledger & Pipeline funcional.
*   Deep-Linking inteligente & Plantillas dinámicas registrables.
*   Métricas de desempeño y ranking de efectividad.

---

## 📈 5. Métricas de Conversión (KPIs Directivos)
El sistema no solo mide velocidad, mide **rendimiento financiero**:
*   **Leads Totales vs. Calificados.**
*   **Valor Potencial del Pipeline:** Suma de cotizaciones activas.
*   **Tasa de Cierre:** Proyectos ganados vs. totales.
*   **Lead Scoring:** Calificación automática por tipo de proyecto (Industrial > Residencial).
*   **Horarios Críticos:** Mapa de calor de cuándo entran más leads.

---

## 🎨 Directriz Estética & UX
El diseño se basa en la estética **Apple Premium**, pero priorizando la **Densidad Operativa**. Se evitan espacios en blanco excesivos que dificulten la lectura de datos complejos. El objetivo es que el asesor vea el panorama completo de su cartera de clientes sin clics innecesarios.

---

**SAVI Control Comercial: Arquitectura de software para líderes en ingeniería.**
