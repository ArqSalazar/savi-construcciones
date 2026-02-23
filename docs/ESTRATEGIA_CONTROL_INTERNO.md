# Proyecto: SAVI Control Comercial 🚀
**Arquitectura Soberana de Inteligencia Comercial & Operativa v2.2**

Este documento define la estructura técnica y estratégica para la gestión de leads y control comercial de **SAVI Construcciones**. Se basa en una **arquitectura soberana** con dependencia mínima de servicios externos, diseñada bajo estándares corporativos para escalar junto con el crecimiento de la empresa.

---

## 🎯 Objetivo General
Implementar un ecosistema de **Inteligencia Comercial** centralizado que registre, mida y optimice el ciclo de vida del prospecto. Se busca garantizar la soberanía de datos, estabilidad técnica y un costo operativo de **$0 MXN**, con capacidad de migración futura a infraestructura propia (Docker/VPS) sin rediseño estructural.

---

## 🏗️ 1. Arquitectura de Datos: "Interaction Ledger"
SAVI Control se rige por un **Registro Maestro de Eventos**, diferenciando claramente dos entidades fundamentales:

*   **Lead (Prospecto):** La entidad principal que representa al cliente potencial (Nombre, Empresa, Contacto, Tipo de Proyecto).
*   **Evento (Actividad):** Cada acción atómica registrada en el historial del Lead. Toda interacción genera un asiento en el Ledger para trazabilidad absoluta.

### Tipificación Técnica de Eventos:
Para una auditoría limpia y métricas precisas, cada evento se clasifica según su naturaleza:
*   `lead_created`: Registro inicial del prospecto.
*   `interaction_started`: Primer contacto humano registrado.
*   `status_changed`: Movimiento en las etapas del pipeline.
*   `template_used`: Uso de guiones de respuesta predefinidos.
*   `note_added`: Información cualitativa ingresada por el asesor.
*   `file_uploaded`: Carga de documentos técnicos o financieros.
*   `sla_breach`: Incumplimiento de tiempos de respuesta o avance.
*   `lead_closed`: Cierre del ciclo (Ganado/Perdido).

---

## 📊 2. Estrategia Comercial & Seguimiento

### A. Pipeline Comercial & Forecast Ponderado
El flujo de valor se gestiona mediante etapas con una **Probabilidad de Cierre (%)** asociada para generar proyecciones financieras reales (Forecast Ponderado):

| Etapa | Probabilidad | Acción Clave |
| :--- | :---: | :--- |
| **Nuevo** | 10% | Registro y asignación. |
| **Contactado** | 20% | Apertura de comunicación. |
| **Calificado** | 40% | Validación técnica y presupuestal. |
| **Cotización Enviada** | 60% | Entrega de propuesta formal. |
| **Negociación** | 75% | Ajustes finales y cierre. |
| **Postergado / Follow-up** | - | Seguimiento a mediano plazo. |
| **No Contactable** | 0% | Depuración de base de datos. |
| **Garantizado (Ganado)** | 100% | Firma de contrato / Inicio de obra. |
| **Descartado (Perdido)** | 0% | Análisis de Razón de Pérdida. |

### B. SLA (Service Level Agreement) de Doble Vía
El sistema actúa proactivamente ante cuellos de botella mediante automatización:
1.  **SLA de Primera Respuesta:** Registro del lead vs. contacto inicial.
2.  **SLA de Avance de Pipeline:** Tiempo máximo de permanencia por etapa (ej. 5 días en Calificado).

**Automatización ante Incumplimiento:** El sistema cambia automáticamente el estado visual a "En Riesgo", registra un evento `sla_breach` y notifica vía Telegram a la Dirección.

---

## 🛠️ 3. Stack Tecnológico & Gobernanza

### Soberanía Técnica
*   **Next.js (App Router):** UI y Lógica de API.
*   **Supabase (PostgreSQL):** Persistencia relacional y Storage.
*   **Telegram Bot API:** Sistema soberano de alertas.

### Gobernanza & Inmutabilidad Estratégica
*   **Inmutabilidad de Ledger:** Los eventos **nunca se eliminan**. Errores de registro se corrigen mediante eventos compensatorios, garantizando integridad histórica total.
*   **Bitácora de Auditoría:** Registro inalterable de modificaciones y accesos (RBAC).
*   **Seguridad:** Acceso por roles (Admin, Ventas, Auditoría).

---

## 📈 4. KPIs Directivos (Business Intelligence)
El sistema genera un tablero directivo con métricas de alto impacto:
*   **Ingreso Proyectado Ponderado:** Valor del pipeline × Probabilidad de cierre.
*   **Rendimiento por Asesor:** Velocidad y tasa de conversión individual.
*   **Velocidad de Conversión:** Tiempo promedio por etapa y Total (Lead → Ganado).
*   **CAC por Canal:** Costo de adquisición y efectividad por fuente (IG, WA, Web).
*   **Análisis de Descarte Estratégico:** Razones predominantes de pérdida para ajuste de mercado.

---

## 🎨 5. UX: Densidad Operativa & Vistas de Rol
El diseño prioriza la eficiencia con tres capas de visualización:
1.  **Vista Focus (Asesor):** Lista de tareas pendientes y leads en riesgo personal.
2.  **Vista Dirección (General):** Resumen de métricas, forecast y ranking de desempeño.
3.  **Vista Auditoría (Solo Lectura):** Acceso total al Ledger para revisión histórica.

---

## 🚀 6. Visión de Escalabilidad
Sentamos las bases para la evolución hacia un **ERP Ligero SAVI**, integrando en fases futuras módulos de Costos, Control de Obra y un Portal de Cliente para seguimiento de proyectos en tiempo real.

---

**SAVI Control Comercial: Ingeniería aplicada al crecimiento empresarial.**
