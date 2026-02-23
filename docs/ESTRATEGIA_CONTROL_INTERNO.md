# Proyecto: SAVI Control Comercial 🚀
**Arquitectura Soberana de Inteligencia Comercial & Operativa v2.1**

Este documento define la estructura técnica y estratégica para la gestión de leads y control comercial de **SAVI Construcciones**. Se basa en una **arquitectura soberana** con dependencia mínima de servicios externos, diseñada bajo estándares corporativos para escalar junto con el crecimiento de la empresa.

---

## 🎯 Objetivo General
Implementar un ecosistema de **Inteligencia Comercial** centralizado que registre, mida y optimice el ciclo de vida del prospecto. Se busca garantizar la soberanía de datos, estabilidad técnica y un costo operativo de **$0 MXN**, con capacidad de migración futura a infraestructura propia (Docker/VPS) sin rediseño estructural.

---

## 🏗️ 1. Arquitectura de Datos: "Interaction Ledger"
SAVI Control se rige por un **Registro Maestro de Eventos**, diferenciando claramente dos entidades fundamentales:

*   **Lead (Prospecto):** La entidad principal que representa al cliente potencial (Nombre, Empresa, Contacto, Tipo de Proyecto).
*   **Evento (Actividad):** Cada acción atómica registrada en el historial del Lead. Toda interacción (clic en chat, cambio de etapa, envío de plantilla, nota manual) genera un asiento en el Ledger para trazabilidad absoluta.

### Captura de Interacciones:
*   **Web Ingest:** Registro directo desde formularios vía Next.js API Routes.
*   **Interaction Logging:** Rastreo de clics en puntos de contacto (WA, IG, Messenger).
*   **Template Tracking:** Registro de auditoría sobre qué guion se utilizó, por quién, cuándo y en qué canal, permitiendo identificar los "scripts" de mayor conversión.

---

## 📊 2. Estrategia Comercial & Seguimiento

### A. Pipeline Comercial (Estados de Negocio)
El flujo de valor se gestiona mediante etapas que reflejan el estatus real de la oportunidad física:
1.  **Nuevo:** Registro entrante sin contacto inicial.
2.  **Contactado:** Interacción de apertura activa.
3.  **Calificado:** Interés técnico y capacidad financiera validados.
4.  **Cotización Enviada:** Propuesta formal entregada al cliente.
5.  **Negociación:** Fase de ajustes técnicos y cierre comercial.
6.  **Postergado / Follow-up:** Prospectos que requieren seguimiento a mediano plazo (evita saturar "Negociación").
7.  **No Contactable:** Datos falsos o nula respuesta tras protocolos de contacto.
8.  **Garantizado (Ganado):** Proyecto adjudicado y firmado con éxito.
9.  **Descartado (Perdido):** Requiere tipificación de **Razón de Pérdida** (Precio, Tiempo, Alcance, Competencia).

### B. SLA (Service Level Agreement) de Doble Vía
Se establecen métricas de rendimiento para asegurar que la "maquinaria" SAVI no se detenga:
*   **SLA de Primera Respuesta:** Mide el tiempo desde la ingesta del Lead hasta el primer evento de interacción.
    *   🟢 < 5 min | 🟡 5–15 min | 🔴 > 15 min. (Dispara alerta a Dirección).
*   **SLA de Avance de Pipeline:** Mide el tiempo de permanencia en cada etapa (ej. máximo 5 días en "Calificado" sin pasar a "Cotización").

---

## 🛠️ 3. Stack Tecnológico & Gobernanza

### Soberanía Técnica
*   **Frontend/API:** Next.js (App Router).
*   **DB/Persistencia:** Supabase (PostgreSQL) + Storage para archivos técnicos ligeros.
*   **Auth & Roles:** Supabase Auth (Admin / Ventas / Auditoría).
*   **Alertas:** Telegram Bot API (Canal cifrado y soberano de notificaciones).

### Seguridad & Gobernanza de Datos
*   **Control de Accesos:** Permisos granulares basados en roles (RBAC).
*   **Bitácora de Auditoría:** Registro inalterable de quién modificó qué campo y cuándo.
*   **Protección de Histórico:** Bloqueo de edición de eventos pasados para integridad de métricas.

---

## 📈 4. KPIs Directivos (Inteligencia de Negocio)
El sistema genera reportes automáticos para la toma de decisiones estratégicas:
*   **Métricas de Conversión:** Leads totales vs. Calificados vs. Ganados.
*   **Valor del Pipeline:** Suma monetaria de cotizaciones activas (Pronóstico de ingresos).
*   **Tiempo Promedio de Cierre:** Vida media del lead desde ingreso hasta firma.
*   **CAC (Costo de Adquisición):** Medición de efectividad por canal (IG, Google, Referidos).
*   **Análisis de Descarte:** Reporte de razones por las cuales se pierden proyectos.

---

## 🎨 5. UX: Densidad Operativa & Eficiencia
El diseño Apple Premium se adapta a un entorno de **productividad intensa**:
*   **Layout:** Vista de tabla maestra con **Panel Lateral (Slide-over)** para gestión del Lead sin perder el contexto.
*   **Eficiencia de Clic:** Máximo 1–2 clics para realizar cualquier acción común (Llamar, WhatsApp, Cambiar Estatus).
*   **Filtros Globales:** Filtros rápidos por Tipo de Proyecto (Industrial, Residencial, Gasolinera) y Nivel de Urgencia.

---

## 🚀 6. Visión de Escalabilidad
Esta arquitectura comercial es el motor inicial para la evolución hacia un **ERP Ligero SAVI**, permitiendo integraciones futuras con:
*   **Módulo de Costos e Ingeniería.**
*   **Control de Obra y Seguimiento de campo.**
*   **Portal de Cliente:** Donde el cliente final consulta sus estados de cuenta y avances.

---

**SAVI Control Comercial: Ingeniería aplicada al crecimiento empresarial.**
