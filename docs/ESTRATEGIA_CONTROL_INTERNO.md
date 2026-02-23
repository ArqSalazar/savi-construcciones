# Proyecto: SAVI Control Comercial 🚀
**Arquitectura Soberana de Inteligencia Comercial & Operativa v2.3**

Este documento define la estructura técnica y estratégica para la gestión de leads y control comercial de **SAVI Construcciones**. Se basa en una **arquitectura soberana** con dependencia mínima de servicios externos, diseñada bajo estándares corporativos para escalar junto con el crecimiento de la empresa.

---

## 🎯 Objetivo General
Implementar un ecosistema de **Inteligencia Comercial** centralizado que registre, mida y optimice el ciclo de vida del prospecto. Se busca garantizar la soberanía de datos, estabilidad técnica y un costo operativo de **$0 MXN**, con capacidad de migración futura a infraestructura propia (Docker/VPS) sin rediseño estructural.

---

## 🏗️ 1. Arquitectura de Datos: "Interaction Ledger"
SAVI Control se rige por un **Registro Maestro de Eventos**, diferenciando claramente dos entidades fundamentales:

*   **Lead (Prospecto):** La entidad principal que representa al cliente potencial (Nombre, Empresa, Contacto, Tipo de Proyecto).
*   **Evento (Actividad):** Cada acción atómica registrada en el historial del Lead. Toda interacción genera un asiento en el Ledger para trazabilidad absoluta.

### Tipificación Técnica & Metadata:
Cada evento incluye metadata estructurada para la evolución futura del sistema (IA/Integraciones):
*   **Campos Obligatorios:** `created_at`, `created_by`, `channel` (web, wa, ig, manual), `version`.
*   **Payload Dinámico:** `payload_json` para almacenar datos variables sin romper la estructura.
*   **Tipos de Evento:** `lead_created`, `interaction_started`, `status_changed`, `template_used`, `note_added`, `file_uploaded`, `sla_breach`, `lead_closed`.

---

## 📊 2. Estrategia Comercial & Seguimiento

### A. Pipeline Comercial & Forecast Ponderado
El flujo de valor se gestiona mediante etapas con una **Probabilidad de Cierre (%)** asociada. 
*   **Regla Crítica:** El campo `estimated_value` es **obligatorio** a partir de la etapa "Calificado".
*   **Forecast:** Se calcula como `estimated_value` × `probability`.

| Etapa | Probabilidad | Acción Clave |
| :--- | :---: | :--- |
| **Nuevo** | 10% | Registro y asignación. |
| **Contactado** | 20% | Apertura de comunicación. |
| **Calificado** | 40% | Validación técnica (Valor Obligatorio). |
| **Cotización Enviada** | 60% | Entrega de propuesta formal. |
| **Negociación** | 75% | Ajustes finales y cierre. |
| **Postergado / Follow-up** | - | Seguimiento a mediano plazo. |
| **No Contactable** | 0% | Depuración de base. |
| **Garantizado (Ganado)** | 100% | Firma de contrato. |
| **Descartado (Perdido)** | 0% | Razón de Pérdida. |

### B. SLA & Escalamiento Jerárquico
El sistema actúa proactivamente mediante un protocolo de escalamiento:
1.  **Nivel 1 (Inmediato):** Alerta al asesor responsable.
2.  **Nivel 2 (24h de persistencia):** Notificación automática a Dirección General vía Telegram.
3.  **Nivel 3 (Semanal):** Registro automático en el Tablero de Riesgos de la junta comercial.

---

## 🛠️ 3. Stack Tecnológico & Gobernanza

### Soberanía Técnica
*   **Next.js (App Router):** UI & API.
*   **Supabase (PostgreSQL):** Persistencia inmutable.

### Gobernanza & Retención de Datos
*   **Inmutabilidad:** Los eventos nunca se eliminan; los errores se corrigen con eventos compensatorios.
*   **Retención:** Tiempo mínimo de 5 años de data histórica.
*   **Backups & Portabilidad:** Respaldos automáticos programados y capacidad de exportación total en formatos CSV/JSON (Activo Corporativo).

---

## 📈 4. KPIs Directivos (High-Performance BI)
*   **Ingreso Proyectado Ponderado:** Forecast comercial real.
*   **Pipeline Aging Index:** Métrica de "edad" del pipeline (detecta estancamiento).
*   **Velocidad de Conversión:** Tiempo promedio Lead → Ganado.
*   **Análisis de Descarte:** Razón de pérdida y rendimiento por asesor.

---

## 🎨 5. UX: Densidad Operativa & Alto Rendimiento
Diseño Apple Premium optimizado para productividad intensiva:
*   **Vistas de Rol:** Focus (Asesor), Dirección (KPIs), Auditoría (Ledger).
*   **Eficiencia:** Atajos de teclado para acciones comunes, acciones masivas (bulk update) y buscador global ultrarápido.
*   **Contexto:** Panel lateral (Slide-over) para gestión del Lead sin perder la vista de lista.

---

## 🚀 6. Visión de Escalabilidad
Sentamos las bases para la evolución hacia un **ERP Ligero SAVI**, integrando módulos de Costos, Control de Obra y un Portal de Cliente para transparencia total en la ejecución de proyectos.

---

**SAVI Control Comercial: Ingeniería aplicada al crecimiento empresarial.**
