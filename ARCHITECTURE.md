# 🏗️ Estructura y Arquitectura del Proyecto

## Arquitectura General

```
┌─────────────────────────────────────────────────────────┐
│                    Cliente (Browser/App)                 │
└─────────────────────────┬───────────────────────────────┘
                          │ HTTP Request
                          ▼
┌─────────────────────────────────────────────────────────┐
│                     NestJS Application                   │
│  ┌───────────────────────────────────────────────────┐  │
│  │              app.module.ts (Root)                 │  │
│  └───────────────────────────────────────────────────┘  │
│                          │                               │
│         ┌────────────────┼────────────────┐             │
│         ▼                ▼                ▼             │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐         │
│  │Announce  │    │ Profile  │    │ Messages │  ...     │
│  │  Module  │    │  Module  │    │  Module  │         │
│  └──────────┘    └──────────┘    └──────────┘         │
└─────────────────────────────────────────────────────────┘
```

## Estructura de un Módulo (Ejemplo: Profile)

```
ProfileModule/
│
├── 📄 profile.module.ts          ← Define el módulo
│   └── imports: []
│   └── controllers: [ProfileController]
│   └── providers: [ProfileService]
│
├── 🎮 profile.controller.ts      ← Maneja HTTP requests
│   └── @Controller('profile')
│   └── @Get(':student_id')
│
├── ⚙️ profile.service.ts          ← Lógica de negocio
│   └── @Injectable()
│   └── findByStudentId()
│
└── 📦 dto/
    └── profile.dto.ts            ← Define estructura de datos
        └── ProfileDto class
```

## Flujo de una Petición HTTP

```
1. Cliente                  GET /profile/1
   │
   ▼
2. Controller              @Get(':student_id')
   │                       ProfileController.getProfile()
   │
   ▼
3. Service                 ProfileService.findByStudentId()
   │                       (Lógica de negocio)
   │
   ▼
4. Respuesta              ProfileDto { id, name, career, ... }
   │
   ▼
5. Cliente                JSON Response
```

## Decoradores y su Función

### Módulos
```typescript
@Module({
  imports: [],          // Otros módulos necesarios
  controllers: [],      // Controllers del módulo
  providers: [],        // Services del módulo
  exports: []          // Qué exportar para otros módulos
})
```

### Controllers
```typescript
@Controller('ruta')    // Define la ruta base
@Get()                 // Maneja GET requests
@Post()                // Maneja POST requests
@Param('id')           // Captura parámetros de ruta
@Body()                // Captura el body del request
```

### Services
```typescript
@Injectable()          // Permite inyección de dependencias
```

## Todos los Módulos del Proyecto

```
app.module.ts
├── AnnouncementsModule
│   ├── AnnouncementsController
│   │   └── GET /announcements/:student_id
│   └── AnnouncementsService
│
├── ProfileModule
│   ├── ProfileController
│   │   └── GET /profile/:student_id
│   └── ProfileService
│
├── MessagesModule
│   ├── MessagesController
│   │   ├── GET /messages/:student_id
│   │   └── GET /messages/:student_id/:chat_id
│   └── MessagesService
│
├── FilesModule
│   ├── FilesController
│   │   ├── GET /files/:student_id
│   │   └── POST /files/upload/:student_id
│   └── FilesService
│
├── ScheduleModule
│   ├── ScheduleController
│   │   ├── GET /schedule/:student_id
│   │   ├── GET /schedule/:student_id/:subject_id
│   │   ├── GET /schedule/today/:student_id
│   │   └── GET /schedule/today/:student_id/:class_id
│   └── ScheduleService
│
├── CreditsModule
│   ├── CreditsController
│   │   └── GET /credits/:student_id
│   └── CreditsService
│
└── GradesModule
    ├── GradesController
    │   └── GET /grade/:student_id
    └── GradesService
```

## Patrón de Diseño: Dependency Injection

```typescript
// Service (Proveedor)
@Injectable()
export class ProfileService {
  findByStudentId(studentId: string) {
    // Lógica
  }
}

// Controller (Consumidor)
@Controller('profile')
export class ProfileController {
  // NestJS inyecta automáticamente el service
  constructor(private readonly profileService: ProfileService) {}
  
  @Get(':student_id')
  getProfile(@Param('student_id') studentId: string) {
    // Usa el service inyectado
    return this.profileService.findByStudentId(studentId);
  }
}
```

## Ventajas de esta Arquitectura

✅ **Modularidad**: Fácil agregar/remover funcionalidades  
✅ **Mantenibilidad**: Código organizado y fácil de encontrar  
✅ **Testeable**: Cada pieza se puede probar independientemente  
✅ **Escalable**: Crece con tu proyecto sin complicarse  
✅ **Reutilizable**: Los módulos se pueden usar en otros proyectos  
✅ **Separation of Concerns**: Cada archivo tiene una responsabilidad clara  

## Ejemplo Completo: Flujo de Profile

```typescript
// 1. DTO (Define la estructura)
export class ProfileDto {
  id: string;
  name: string;
  career: string;
  semester: string;
  grade: string;
}

// 2. Service (Lógica de negocio)
@Injectable()
export class ProfileService {
  private profiles = new Map([
    ['1', { id: '1', name: 'Juan', ... }]
  ]);
  
  findByStudentId(id: string): ProfileDto {
    return this.profiles.get(id);
  }
}

// 3. Controller (Maneja HTTP)
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  
  @Get(':student_id')
  getProfile(@Param('student_id') studentId: string): ProfileDto {
    return this.profileService.findByStudentId(studentId);
  }
}

// 4. Module (Encapsula todo)
@Module({
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}

// 5. App Module (Importa el módulo)
@Module({
  imports: [ProfileModule, ...],
})
export class AppModule {}
```

## Conceptos Clave

### 1. **Módulo**
- Unidad organizacional
- Agrupa funcionalidad relacionada
- Se importa en AppModule

### 2. **Controller**
- Punto de entrada HTTP
- Define rutas (endpoints)
- Delega lógica al Service

### 3. **Service**
- Contiene lógica de negocio
- Reutilizable
- Inyectable en Controllers

### 4. **DTO**
- Define estructura de datos
- Validación (con class-validator)
- Documentación clara

## Próximos Pasos

1. **Agregar Pipes** para validación
2. **Implementar Guards** para autenticación
3. **Usar Interceptors** para transformar respuestas
4. **Crear Middlewares** para procesamiento previo
5. **Implementar Exception Filters** para manejo de errores

---

Esta arquitectura es la base de aplicaciones NestJS profesionales y escalables. 🚀
