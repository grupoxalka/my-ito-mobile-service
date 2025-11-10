# 🚀 Guía Rápida de Inicio

## ✅ El servidor ya está corriendo!

Tu API de NestJS está funcionando en: **http://localhost:3000**

---

## 🧪 Prueba rápida en el navegador

Abre estas URLs en tu navegador:

1. **Anuncios**: http://localhost:3000/announcements/1
2. **Perfil**: http://localhost:3000/profile/1
3. **Mensajes**: http://localhost:3000/messages/1
4. **Horario**: http://localhost:3000/schedule/1
5. **Créditos**: http://localhost:3000/credits/1
6. **Calificaciones**: http://localhost:3000/grade/1

---

## 📂 Archivos Importantes

### 📖 Documentación
- **README_ES.md** - Guía completa en español
- **API_GUIDE.md** - Explicación detallada de NestJS
- **ARCHITECTURE.md** - Arquitectura del proyecto
- **TESTING_EXAMPLES.md** - Ejemplos de pruebas

### 🧪 Pruebas
- **api-test.http** - Archivo para probar endpoints (usa REST Client en VS Code)

---

## 🎓 Conceptos Básicos

### ¿Qué es un Módulo?
Un módulo agrupa funcionalidad relacionada. Ejemplo: `ProfileModule`

### ¿Qué es un Controller?
Maneja las peticiones HTTP. Define las rutas de tu API.
```typescript
@Controller('profile')  // Ruta: /profile
```

### ¿Qué es un Service?
Contiene la lógica de negocio. Se inyecta en los controllers.
```typescript
@Injectable()
export class ProfileService { ... }
```

### ¿Qué es un DTO?
Define la estructura de datos que se envían/reciben.
```typescript
export class ProfileDto {
  id: string;
  name: string;
}
```

---

## 📁 Estructura de Carpetas

```
src/
├── announcements/       # Anuncios
├── profile/            # Perfil de estudiante
├── messages/           # Mensajes/Chats
├── files/              # Archivos
├── schedule/           # Horarios
├── credits/            # Créditos
├── grades/             # Calificaciones
└── app.module.ts       # Módulo principal
```

Cada carpeta contiene:
- `*.controller.ts` - Maneja HTTP
- `*.service.ts` - Lógica de negocio
- `*.module.ts` - Define el módulo
- `dto/` - Estructura de datos

---

## 🛠️ Comandos Útiles

```bash
# Iniciar servidor (ya está corriendo)
npm run start:dev

# Ver todos los endpoints
# Revisa la consola donde está corriendo el servidor

# Detener el servidor
# Ctrl + C en la terminal
```

---

## 🎯 Próximos Pasos

1. ✅ **Prueba los endpoints** en el navegador
2. 📖 **Lee API_GUIDE.md** para entender NestJS
3. 🔍 **Explora el código** de un módulo (empieza con `profile/`)
4. 🧪 **Usa api-test.http** para pruebas más avanzadas
5. 📚 **Lee ARCHITECTURE.md** para entender la estructura

---

## 💡 Tips

- **Hot Reload**: Los cambios se reflejan automáticamente sin reiniciar
- **Datos de Prueba**: Usa `student_id = 1` o `2` para los endpoints
- **VS Code Extensions**: Instala "REST Client" para usar archivos .http
- **Consola**: Observa los logs en la terminal donde corre el servidor

---

## 📊 Endpoints Resumidos

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/announcements/:student_id` | Anuncios |
| GET | `/profile/:student_id` | Perfil |
| GET | `/messages/:student_id` | Lista de chats |
| GET | `/messages/:student_id/:chat_id` | Mensajes de un chat |
| GET | `/files/:student_id` | Archivos |
| POST | `/files/upload/:student_id` | Subir archivo |
| GET | `/schedule/:student_id` | Horario completo |
| GET | `/schedule/:student_id/:subject_id` | Detalle de materia |
| GET | `/schedule/today/:student_id` | Clases de hoy |
| GET | `/credits/:student_id` | Créditos |
| GET | `/grade/:student_id` | Calificaciones |

---

## ❓ ¿Necesitas Ayuda?

1. Lee los archivos de documentación (`.md`)
2. Revisa el código de ejemplo en los módulos
3. Consulta la [documentación oficial de NestJS](https://docs.nestjs.com/)

---

**¡Empieza probando los endpoints en tu navegador! 🎉**
