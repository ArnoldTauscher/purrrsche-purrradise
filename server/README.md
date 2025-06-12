# Backend - Purrrsche Purrradise

### 📐 Allgemeine Struktur

    Die App ist eine Express.js-Anwendung, die als Backend für verschiedene Dienste fungiert, darunter Wetterdaten, Kontaktformulare und Börsendaten. Sie verwendet MongoDB als Datenbank und integriert verschiedene externe APIs.

### ⚙️ Hauptkomponenten

    - index.js: Die Hauptdatei, die den Express-Server initialisiert und konfiguriert.
    - controllers/: Enthält die Logik für verschiedene Routen (weather, contact, stock).
    - models/: Definiert das Datenbankschema für Kontakte.
    - routes/: Definiert die API-Endpunkte für verschiedene Funktionen.

### ✨ Die App bietet folgende Hauptfunktionen:

    - Wetterdaten abrufen (aktuelle Wetterlage, Vorhersage, Städtesuche)
    - Wetter-Kartenkacheln bereitstellen
    - Kontaktformulare speichern
    - Börsendaten abrufen
    - Wake-Up-Endpoint für Uptime-Monitoring
    - CORS-Whitelist über Umgebungsvariable steuerbar
    - Logging aller Requests
    - Zentrale Fehlerbehandlung mit Stacktrace im Development-Modus

### 🚨 Sicherheitsmaßnahmen

    - Verwendung von helmet für verbesserte Sicherheitsheader
    - Implementierung von Rate-Limiting
    - Deaktivierung des x-powered-by Headers
    - Verwendung von CORS (konfigurierbar über ALLOWED_ORIGINS)
    - Cross-Origin-Resource-Policy für Wetterkarten

### 🏦 Datenbank

    MongoDB wird als Datenbank verwendet, mit Mongoose als ODM (Object Document Mapper).

### 💾 Caching

    Sowohl für Wetterdaten als auch für Stockdaten wird ein In-Memory-Cache (NodeCache) verwendet, um die Anzahl der API-Aufrufe zu reduzieren.

### ⚠️ Fehlerbehandlung

    Die App enthält grundlegende Fehlerbehandlung und eine zentrale Error-Handling-Middleware.

### ㊙️ Umgebungsvariablen

    Die App verwendet Umgebungsvariablen für sensible Daten wie API-Schlüssel und Datenbankverbindungen.
    Erforderliche Variablen: CONNECTION_URL, OWM_API_KEY, STOCK_API_KEY, ALLOWED_ORIGINS

### 🛠️ Weitere Features

    - Modularer Aufbau mit separaten Controllern und Routen
    - Unterstützung für verschiedene Umgebungen (z.B. NODE_ENV=development/test/production)
    - Automatischer Server-Exit bei fehlenden Umgebungsvariablen
    - Unterstützung für Monitoring durch /api/wake-up Endpoint
