# Proyecto: Centro de Control Interno SAVI (CRM & Automatización)

Este documento define la estrategia, arquitectura y objetivos para la creación del ecosistema digital de gestión operativa de **SAVI Construcciones**. El objetivo es institucionalizar la captura, seguimiento y cierre de proyectos con un costo operativo de **$0 MXN mensuales**.

---

## 🎯 Objetivo General
Transformar la presencia digital de SAVI de una "página web informativa" a un **Centro de Operaciones Inteligente** que garantice que ningún prospecto (Lead) se pierda, centralizando la comunicación y midiendo la eficiencia del equipo comercial.

---

## 🏗️ 1. ¿Qué crearemos? (Definición del Producto)

### A. Dashboard Interno (`interno.saviconstrucciones.com`)
Un panel administrativo privado con acceso restringido para Dirección y Ventas que servirá como:
*   **Gestor de Prospectos (CRM):** Tabla maestra con todos los leads entrantes.
*   **Semáforo de Estatus:** Control visual de atención (Nuevo 🔴, En Proceso 🟡, Atendido 🟢).
*   **Consola de Acción:** Botones directos para disparar chats de WhatsApp, correos y Messenger sin buscar contactos manualmente.

### B. Sistema de Notificaciones "Pager"
Un canal de alertas ultra-rápidas mediante un **Telegram Bot** que notificará al instante los datos críticos de cada nuevo interesado.

---

## 🛠️ 2. ¿Cómo lo lograremos? (Arquitectura Técnica $0)

Utilizaremos tecnología de vanguardia B2B (Business to Business) diseñada para alta eficiencia sin rentas mensuales:

| Componente | Tecnología | Rol en el Proyecto | Costo |
| :--- | :--- | :--- | :--- |
| **Frontend** | **Next.js + Vercel** | Interfaz del Dashboard (maquetado premium). | $0 |
| **Base de Datos** | **Supabase** | Almacenamiento seguro de clientes e historial de obra. | $0 |
| **Automatización** | **Make.com** | El "secretario" que detecta mensajes y los guarda. | $0 |
| **Alertas** | **Telegram Bot** | Notificaciones instantáneas al celular del equipo. | $0 |
| **Gestión** | **Hostinger Mail** | Respaldo documental de todas las solicitudes. | $0 |

---

## 🚀 3. ¿Qué lograremos? (Impacto en SAVI)

1.  **Control Total de Ventas:** Historial completo de quién nos contactó, cuándo y por qué medio.
2.  **Trazabilidad Operativa:** Capacidad de auditar si un asesor ya contactó al cliente o si la solicitud sigue pendiente.
3.  **Omnicanalidad Real:** Centralizar en un solo botón la respuesta vía WhatsApp Web, Messenger o Correo, reduciendo tiempos de respuesta de horas a minutos.
4.  **Cero Fuga de Capital:** Evitar que prospectos de alta gama (Naves Industriales / Residencias) se pierdan por falta de seguimiento.
5.  **Cero Gasto Fijo:** Un sistema robusto nivel "Empresa Grande" funcionando con infraestructura gratuita de por vida.

---

## 🔄 Flujo de Trabajo (User Journey)

1.  **Captura:** El cliente llena el formulario en la web o da clic al WhatsApp del footer.
2.  **Ingesta:** **Make.com** detecta la acción y registra al cliente en la base de datos de **Supabase**.
3.  **Alerta:** El **Telegram Bot** notifica al equipo: *"🚨 Nuevo Lead: [Nombre] - [Proyecto]"*.
4.  **Atención:** El responsable entra al **Dashboard**, ve el estatus en **Rojo 🔴**, da clic al botón **[Contactar WhatsApp]** (se pone el estatus en **Amarillo 🟡**) y cierra la cita.
5.  **Cierre:** Se marca como **Atendido 🟢** y se archiva en el histórico para análisis mensual.

---

**Nota Técnica & Estética:** 
Este proyecto se ejecuta sobre la infraestructura del sitio actual. Es requisito innegociable **mantener la lógica visual de saviconstrucciones.com** (estética Apple Premium, uso de transparencias `glass`, tipografía Inter/Outfit y minimalismo corporativo) dentro del Dashboard interno. El usuario debe sentir que el CRM es una extensión natural y profesional de la marca SAVI.
