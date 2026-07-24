# Spring Boot 3 REST API Specification

> **Official REST API Documentation** for the **Saturn Textiles Limited R&D Department** backend platform.  
> Built with **Spring Boot 3 (Java 21)**, **Spring Data JPA**, **PostgreSQL**, and **Spring Security**.

---

## 🎯 Architecture & Data Responsibilities

To ensure 0ms rendering latency and maximum security, system data responsibilities are strictly divided:

### 1. Static Content (`lib/data/` in Frontend Repository)
Managed directly in code by developers. **No backend API endpoints are needed for these**:
- **R&D Innovations / Projects**: [`lib/data/innovations.ts`](../lib/data/innovations.ts)
- **Executive Leaders**: [`lib/data/leaders.ts`](../lib/data/leaders.ts)
- **News & Milestones**: [`lib/data/latest-news.ts`](../lib/data/latest-news.ts)

### 2. Dynamic Backend APIs (Spring Boot REST Service)
Handles dynamic database queries, visitor inquiries, and job application file uploads:
1. `GET /api/v1/team/members` ── Fetches dynamic R&D engineering staff from PostgreSQL.
2. `POST /api/v1/contact` ── Saves visitor contact form submissions & sends email alerts.
3. `POST /api/v1/applications` ── Saves candidate job application forms + CV PDF file uploads.

---

## 📡 REST API Specifications

### Base URLs
- **Local Development**: `http://localhost:8080`
- **Production Server**: `https://api.saturntextiles.com`

Configured via environment variable in `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

---

## 📦 Global Standard Response Format

All API endpoints return a standardized JSON envelope (`ApiResponse<T>`):

### Success Response Envelope
```json
{
  "status": "success",
  "code": 200,
  "message": "Operation completed successfully.",
  "data": { ... },
  "timestamp": "2026-07-24T11:45:00Z"
}
```

### Error Response Envelope
```json
{
  "status": "error",
  "code": 400,
  "message": "Validation failed for request payload.",
  "errors": [
    {
      "field": "email",
      "message": "Must be a valid email address format."
    }
  ],
  "timestamp": "2026-07-24T11:45:00Z"
}
```

---

## 📋 API Endpoints Catalog

---

### 1. `GET /api/v1/team/members`

Retrieves active R&D engineering staff and researchers from PostgreSQL to render in the Team Members subsection.

- **Method**: `GET`
- **Authentication**: Public
- **Query Parameters**: `department` *(optional)*

#### Response Payload (`200 OK`)
```json
{
  "status": "success",
  "code": 200,
  "message": "Active team members fetched successfully.",
  "data": [
    {
      "id": 1,
      "name": "Tanvir Ahmed",
      "title": "Computer Vision Engineer",
      "department": "Industrial AI",
      "bio": "Specializes in real-time defect segmentation models and Hikrobot camera SDK integration.",
      "specializations": ["PyTorch", "OpenCV", "YOLOv8"],
      "email": "tanvir@saturntextiles.com",
      "image": "https://api.saturntextiles.com/uploads/team/tanvir.png",
      "social": {
        "github": "https://github.com/tanvir",
        "linkedin": "https://linkedin.com/in/tanvir"
      },
      "displayOrder": 1
    }
  ],
  "timestamp": "2026-07-24T11:45:00Z"
}
```

#### cURL Example
```bash
curl -X GET "http://localhost:8080/api/v1/team/members" \
     -H "Accept: application/json"
```

---

### 2. `POST /api/v1/contact`

Processes and records website visitor contact inquiries.

- **Method**: `POST`
- **Content-Type**: `application/json`
- **Authentication**: Public

#### Request Body (`ContactRequest`)
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "subject": "FABINS Automation Inquiry",
  "message": "We would like to schedule a technical demonstration of fabric defect inspection."
}
```

#### Field Constraints
| Field Name | Type | Required | Rules |
| :--- | :--- | :--- | :--- |
| `name` | String | Yes | Non-empty, max 100 chars |
| `email` | String | Yes | Valid email format |
| `subject` | String | Yes | Non-empty, max 200 chars |
| `message` | String | Yes | Non-empty, max 2000 chars |

#### Response Payload (`201 Created`)
```json
{
  "status": "success",
  "code": 201,
  "message": "Thank you for reaching out. The Saturn R&D team has received your message.",
  "data": {
    "inquiryId": "INQ-2026-0842"
  },
  "timestamp": "2026-07-24T11:45:00Z"
}
```

#### cURL Example
```bash
curl -X POST "http://localhost:8080/api/v1/contact" \
     -H "Content-Type: application/json" \
     -d '{
       "name": "John Doe",
       "email": "john.doe@example.com",
       "subject": "FABINS Inquiry",
       "message": "Interested in defect inspection."
     }'
```

---

### 3. `POST /api/v1/applications`

Receives job applications along with uploaded CV documents from `/join_us`.

- **Method**: `POST`
- **Content-Type**: `multipart/form-data`
- **Authentication**: Public

#### Multipart Form Parameters
| Parameter Name | Data Type | Required | Constraint | Description |
| :--- | :--- | :--- | :--- | :--- |
| `name` | String | Yes | Max 100 chars | Applicant's full name |
| `email` | String | Yes | Valid Email | Primary contact email |
| `phone` | String | Yes | Digits | Phone number |
| `address` | String | Yes | Max 250 chars | Present residential address |
| `reason` | String | Yes | Max 1500 chars | Statement of motivation |
| `linkedin` | String | No | URL | LinkedIn profile link |
| `github` | String | No | URL | GitHub profile link |
| `website` | String | No | URL | Portfolio website link |
| `resume` | Binary File | Yes | Max 10MB (.pdf, .doc, .docx) | Uploaded resume document |

#### Response Payload (`201 Created`)
```json
{
  "status": "success",
  "code": 201,
  "message": "Application submitted successfully. Our HR & Engineering leads will review your CV.",
  "data": {
    "applicationId": "APP-2026-0194",
    "fileName": "cv_john_doe.pdf"
  },
  "timestamp": "2026-07-24T11:45:00Z"
}
```

---

## 🔒 Spring Boot CORS Configuration

Add a WebMvcConfigurer bean to permit Next.js origins:

```java
package com.saturn.rnd.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/v1/**")
                        .allowedOrigins(
                            "http://localhost:3000",
                            "https://saturn-rnd.vercel.app"
                        )
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*")
                        .allowCredentials(true);
            }
        };
    }
}
```
