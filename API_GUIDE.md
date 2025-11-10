# API de Estudiantes - NestJS

Esta API proporciona endpoints para gestionar información de estudiantes siguiendo las mejores prácticas de NestJS.

## 🏗️ Estructura del Proyecto

El proyecto sigue una **arquitectura modular** donde cada recurso tiene su propio módulo:

```
src/
├── announcements/          # Módulo de anuncios
│   ├── dto/
│   │   └── announcement.dto.ts
│   ├── announcements.controller.ts
│   ├── announcements.service.ts
│   └── announcements.module.ts
├── profile/                # Módulo de perfil
├── messages/               # Módulo de mensajes
├── schedule/               # Módulo de horarios
├── credits/                # Módulo de créditos
├── grades/                 # Módulo de calificaciones
└── app.module.ts          # Módulo principal
```

## 📋 Conceptos Clave de NestJS

### 1. **Módulos (@Module)**
Los módulos son la unidad básica de organización en NestJS. Cada módulo encapsula funcionalidad relacionada.

```typescript
@Module({
  controllers: [AnnouncementsController],  // Controllers del módulo
  providers: [AnnouncementsService],       // Services del módulo
})
export class AnnouncementsModule {}
```

### 2. **Controllers (@Controller)**
Los controllers manejan las peticiones HTTP entrantes y retornan respuestas.

```typescript
@Controller('announcements')  // Ruta base: /announcements
export class AnnouncementsController {
  constructor(private readonly announcementsService: AnnouncementsService) {}

  @Get(':student_id')  // GET /announcements/:student_id
  getAnnouncements(@Param('student_id') studentId: string) {
    return this.announcementsService.findByStudentId(studentId);
  }
}
```

### 3. **Services (@Injectable)**
Los services contienen la lógica de negocio. Se inyectan en los controllers mediante **Dependency Injection**.

```typescript
@Injectable()
export class AnnouncementsService {
  findByStudentId(studentId: string) {
    // Lógica de negocio aquí
    return this.announcements;
  }
}
```

### 4. **DTOs (Data Transfer Objects)**
Los DTOs definen la estructura de los datos que se transfieren entre el cliente y el servidor.

```typescript
export class AnnouncementDto {
  id: string;
  image: string;
  title: string;
  description: string;
  date: string;
}
```

## 🚀 Endpoints Disponibles

### Announcements (Anuncios)
- `GET /announcements/:student_id` - Obtener todos los anuncios de un estudiante

### Profile (Perfil)
- `GET /profile/:student_id` - Obtener perfil del estudiante

### Messages (Mensajes)
- `GET /messages/:student_id` - Obtener lista de chats
- `GET /messages/:student_id/:chat_id` - Obtener mensajes de un chat específico

### Schedule (Horarios)
- `GET /schedule/:student_id` - Obtener horario completo
- `GET /schedule/:student_id/:subject_id` - Obtener detalle de una materia
- `GET /schedule/today/:student_id` - Obtener clases de hoy
- `GET /schedule/today/:student_id/:class_id` - Obtener estado de una clase

### Credits (Créditos)
- `GET /credits/:student_id` - Obtener créditos del estudiante

### Grades (Calificaciones)
- `GET /grade/:student_id` - Obtener calificaciones del estudiante

## 🔧 Cómo Ejecutar

1. **Instalar dependencias:**
```bash
npm install
```

2. **Ejecutar en modo desarrollo:**
```bash
npm run start:dev
```

3. **La API estará disponible en:** `http://localhost:3000`

## 📝 Ejemplo de Uso

```bash
# Obtener anuncios del estudiante con ID "1"
curl http://localhost:3000/announcements/1

# Obtener perfil del estudiante
curl http://localhost:3000/profile/1

# Obtener mensajes
curl http://localhost:3000/messages/1

# Obtener calificaciones
curl http://localhost:3000/grade/1
```

## 🎯 Buenas Prácticas Implementadas

1. **Separación de Responsabilidades:** Cada módulo tiene su controller, service y DTOs
2. **Dependency Injection:** Los services se inyectan en los controllers
3. **Manejo de Errores:** Se usan excepciones de NestJS como `NotFoundException`
4. **Tipado Fuerte:** TypeScript para definir tipos claros
5. **Estructura Modular:** Cada recurso en su propio directorio
6. **DTOs:** Para validar y documentar la estructura de datos

## 📚 Conceptos Importantes

- **Decoradores:** `@Controller`, `@Get`, `@Post`, `@Param`, `@Body` son decoradores que añaden metadata
- **Inyección de Dependencias:** NestJS gestiona automáticamente la creación e inyección de services
- **Modularidad:** Cada módulo puede ser reutilizado o removido fácilmente
- **Datos en Duro:** Actualmente usa datos estáticos, pero puedes reemplazarlos con una base de datos real

## 🔍 Próximos Pasos

1. Conectar a una base de datos (PostgreSQL, MongoDB, etc.)
2. Implementar autenticación y autorización
3. Agregar validación de datos con `class-validator`
4. Implementar tests unitarios y de integración
5. Agregar documentación con Swagger
