# Ejemplos de Prueba de Endpoints

## Usando el navegador o herramientas como Postman/Thunder Client

### 1. Announcements (Anuncios)
```
GET http://localhost:3000/announcements/1
```

**Respuesta esperada:**
```json
{
  "announcements": [
    {
      "id": "1",
      "image": "https://example.com/images/announcement1.jpg",
      "title": "Inicio de inscripciones",
      "description": "Las inscripciones para el próximo semestre comienzan el 15 de noviembre",
      "date": "2025-11-15"
    },
    {
      "id": "2",
      "image": "https://example.com/images/announcement2.jpg",
      "title": "Evento Cultural",
      "description": "Gran evento cultural en el auditorio principal",
      "date": "2025-11-20"
    }
  ]
}
```

---

### 2. Profile (Perfil)
```
GET http://localhost:3000/profile/1
```

**Respuesta esperada:**
```json
{
  "id": "1",
  "name": "Juan Pérez García",
  "career": "Ingeniería en Sistemas Computacionales",
  "semester": "6",
  "grade": "9.2"
}
```

---

### 3. Messages (Mensajes)

#### Obtener lista de chats
```
GET http://localhost:3000/messages/1
```

**Respuesta esperada:**
```json
{
  "chats": [
    {
      "id": "1",
      "name": "Dr. Carlos Mendoza",
      "rol": "Profesor de Matemáticas",
      "image": "https://example.com/images/teacher1.jpg"
    },
    {
      "id": "2",
      "name": "Ing. Ana Silva",
      "rol": "Tutora Académica",
      "image": "https://example.com/images/teacher2.jpg"
    }
  ]
}
```

#### Obtener mensajes de un chat
```
GET http://localhost:3000/messages/1/1
```

**Respuesta esperada:**
```json
{
  "messages": [
    {
      "id": "1",
      "title": "Tarea de Cálculo",
      "description": "Por favor revisa los ejercicios del capítulo 5",
      "date": "2025-11-08"
    }
  ]
}
```

---

### 5. Schedule (Horarios)

#### Obtener horario completo
```
GET http://localhost:3000/schedule/1
```

**Respuesta esperada:**
```json
[
  {
    "day": "Lunes",
    "subjects": [
      {
        "id": "1",
        "name": "Cálculo Diferencial",
        "initial_time": "08:00",
        "end_time": "10:00",
        "category": "Matemáticas"
      }
    ]
  }
]
```

#### Obtener detalle de una materia
```
GET http://localhost:3000/schedule/1/1
```

**Respuesta esperada:**
```json
{
  "subject_id": "1",
  "subject_name": "Cálculo Diferencial",
  "initial_time": "08:00",
  "end_time": "10:00",
  "category": "Matemáticas",
  "summary": {
    "total_classes": 40,
    "absent": 3,
    "present": 37
  }
}
```

#### Obtener clases de hoy
```
GET http://localhost:3000/schedule/today/1
```

#### Obtener estado de una clase
```
GET http://localhost:3000/schedule/today/1/1
```

**Respuesta esperada:**
```json
{
  "id": "1",
  "name": "Cálculo Diferencial",
  "initial_time": "08:00",
  "end_time": "10:00",
  "remaining_time": "45 minutos",
  "status": "upcoming"
}
```

---

### 6. Credits (Créditos)
```
GET http://localhost:3000/credits/1
```

**Respuesta esperada:**
```json
{
  "current_credits": 180,
  "remaining_credits": 70
}
```

---

### 7. Grades (Calificaciones)
```
GET http://localhost:3000/grade/1
```

**Respuesta esperada:**
```json
{
  "average_grade": 9.1,
  "semesters": [
    {
      "semester_number": 1,
      "grade": 8.8
    },
    {
      "semester_number": 2,
      "grade": 9.0
    },
    {
      "semester_number": 3,
      "grade": 9.2
    }
  ]
}
```

---

## Pruebas con PowerShell (Windows)

```powershell
# Announcements
Invoke-RestMethod -Uri "http://localhost:3000/announcements/1" -Method GET

# Profile
Invoke-RestMethod -Uri "http://localhost:3000/profile/1" -Method GET

# Messages
Invoke-RestMethod -Uri "http://localhost:3000/messages/1" -Method GET

# Schedule
Invoke-RestMethod -Uri "http://localhost:3000/schedule/1" -Method GET

# Credits
Invoke-RestMethod -Uri "http://localhost:3000/credits/1" -Method GET

# Grades
Invoke-RestMethod -Uri "http://localhost:3000/grade/1" -Method GET
```

---

## Extensión Recomendada para VS Code

Instala **REST Client** o **Thunder Client** en VS Code para probar los endpoints directamente desde el editor.

### Usando REST Client (.http file):

Crea un archivo `test.http` con el siguiente contenido:

```http
### Get Announcements
GET http://localhost:3000/announcements/1

### Get Profile
GET http://localhost:3000/profile/1

### Get Messages
GET http://localhost:3000/messages/1

### Get Schedule
GET http://localhost:3000/schedule/1

### Get Credits
GET http://localhost:3000/credits/1

### Get Grades
GET http://localhost:3000/grade/1
```

Luego haz clic en "Send Request" arriba de cada línea.
