# Purrrsche Purrradise - Fortgeschrittene React-Anwendung

    Diese React-Anwendung demonstriert fortgeschrittene Webtechnologien und Best Practices in der Frontend-Entwicklung, während sie gleichzeitig einen kreativen und unterhaltsamen Ansatz zur Präsentation eines fiktiven Automobilunternehmens verfolgt.

    🚧 Hinweis: Diese Webseite ist mein erstes Webprojekt und bietet an mehreren Stellen Verbesserungspotenzial, wie z.B. Code-Splitting oder die Trennung von Logik und Darstellung. Zukünftige Verbesserungen sind geplant, haben jedoch niedrige Priorität. Mein Restaurant-Gericht-Projekt spiegelt meine aktuellen Kompetenzen besser wider.

### 📐 Allgemeine Struktur

    Die App folgt einer typischen React-Anwendungsstruktur mit separaten Verzeichnissen für Komponenten, Container, Actions, Reducer und API-Aufrufe.

### ⚙️ Komponenten
App.jsx

    Dient als Hauptkomponente und Einstiegspunkt der Anwendung:
    - Implementiert ein Theme-System mit Dunkel-/Hellmodus
    - Rendert die Hauptbestandteile der Seite: Welcome, WakeUp, NavBar, Header, WhatIsSomething, PurrrscheModels, News, Library und Footer

Welcome.jsx

    Zeigt einen Willkommens-Popup beim Besuch der Seite:
    - Enthält wichtige Informationen über die Webseite
    - Nutzt eine wiederverwendbare Popup-Komponente

WakeUp.jsx

    Verantwortlich für das "Aufwecken" des Servers:
    - Verwendet Redux für State-Management
    - Ruft die wakeUpServerAction auf, wenn der Server nicht "wach" ist.
    - Rendert die ServerStatusIsland-Komponente, um den Status des Servers anzuzeigen.

    ServerStatusIsland.jsx:

        Zeigt den Status des Servers in einer animierten "Insel" an:
        - Nutzt styled-components für das Styling und Animationen.
        - Zeigt verschiedene Statusmeldungen abhängig vom Serverzustand (Laden, Bereit, Fehler).
        - Verschwindet automatisch nach 30 Sekunden, wenn der Server bereit ist.

NavBar.jsx

    Implementiert eine responsive Navigationsleiste:
    - Passt sich an mobile und Desktop-Ansichten an
    - Enthält ein ausklappbares Menü für mobile Geräte
    - Integriert ein Theme-Toggle für den Dunkel-/Hellmodus

Header.jsx

    - Bildet den Kopfbereich der Webseite
    - Integriert die Subscribe-Komponente für Newsletter-Anmeldungen*

WhatIsSomething.jsx:

    Erklärt das Konzept "SOMETHING":
    - Nutzt die wiederverwendbare Feature-Komponente, um verschiedene Aspekte zu präsentieren.

PurrrscheModels.jsx

    Eine komplexe Komponente zur Darstellung der Purrrsche-Automodelle:
    - Verwendet dynamisches Importieren von Bildern.
    - Implementiert eine rekursive Ordnerstruktur für die Modelldarstellung.
    - Bietet eine interaktive Benutzeroberfläche zum Öffnen/Schließen von Modellkategorien.
    - Zeigt Bilder der Modelle mit der Option, weitere Bilder anzuzeigen.
    - Nutzt Memoization (React.memo) für Leistungsoptimierung.
    - Implementiert lazy loading für Bilder.

News.jsx

    Zeigt einen Nachrichtenbereich mit mehreren Artikeln:
    - Verwendet die wiederverwendbare Article-Komponente, um einzelne Nachrichtenartikel darzustellen.
    - Gliedert die Artikel in zwei Gruppen (A und B) für ein ansprechendes Layout.
    - Zeigt Bilder, Daten, Titel und Kurztexte für jede Nachricht an.

Library.jsx

    Dient als Container für verschiedene Anwendungen wie NuetzlicheAlltagsApps und Games

NützlicheAlltagsApps.jsx

    Fasst nützliche Alltags-Anwendungen zusammen:
    Integriert PurrrscheStockChart und WeatherApp Komponenten

    PurrrscheStockChart.jsx:
        Zeigt den Aktienkurs von Purrrsche an:
        - Nutzt Redux für State-Management (useDispatch, useSelector)
        - Lädt Aktiendaten beim Mounten der Komponente
        - Verarbeitet die Daten für die Chartdarstellung
        - Behandelt verschiedene Zustände (Laden, Fehler, API-Limit erreicht)
        - Verwendet ChartWrapper zur Darstellung des Liniendiagramms
        - Bietet responsive Gestaltung und anpassbare Optionen für das Chart

    ChartWrapper.jsx:
        Eine wiederverwendbare Wrapper-Komponente für Charts:
        - Nutzt react-chartjs-2 zur Erstellung des Liniendiagramms
        - Implementiert responsives Verhalten mit ResizeObserver
        - Passt die Chartgröße dynamisch an den verfügbaren Platz an

    WeatherApp.jsx:
        Hauptkomponente für die Wetter-Anwendung:
        - Zeigt einen Titel und eine kurze Beschreibung
        - Rendert die WeatherDisplay-Komponente

    WeatherDisplay.jsx:
        Zentrale Komponente für Wetterdaten:
        - Verwendet Redux für State-Management
        - Bietet Funktionen zum:
            - Suchen von Städten
            - Laden von Wetterdaten
            - Anzeigen von Wetter-Informationen

    WeatherInfo.jsx:
        Detaillierte Wetterinformationen:
        - Zeigt:
            - Aktuelle Temperatur
            - Gefühlte Temperatur
            - Wetterbeschreibung
            - Zusätzliche Daten wie Luftfeuchtigkeit, Windgeschwindigkeit

    WeatherMap.jsx:
        Interaktive Karte mit Wetterdaten:
        - Verwendet Leaflet für Kartendarstellung
        - Bietet Layer für:
            - OpenStreetMap
            - Niederschlag
            - Temperatur

    CityAutocomplete.jsx:
        Automatische Stadtsuche:
        - Verwendet react-select für Autovervollständigung
        - Lädt Städte dynamisch beim Tippen

Games.jsx

    Hauptkomponente für den Spielebereich:
    - Verwendet React Router für die Navigation zwischen verschiedenen Spielen
    - Rendert einen Titel, die Navigationsleiste und die ausgewählten Spielkomponenten

    ♠️ SlidingPuzzle.jsx:

        Komplexe Komponente für das Schiebepuzzle-Spiel:

        ✨ Hauptfunktionen:
            - Spielzustandsverwaltung (spielen, pausieren, neustarten)
            - Bildauswahl für das Puzzle
            - Zeitmessung und Zugzählung
            - Anzeige der Top 5 Ergebnisse
            - Gewinnbenachrichtigung

        ⚙️ Verwendet mehrere Unterkomponenten:
            - PuzzleGrid:
                Hauptkomponente für das Spielfeld des Schiebepuzzles:
                * Implementiert die Spiellogik, einschließlich Bewegungen und Gewinnbedingung
                * Unterstützt zwei Modi: Spielmodus und Auswahlmodus

            - ImageSelector:
                Rendert eine Auswahl von Puzzlebildern:
                * Ermöglicht die Auswahl eines Puzzles durch Klicken auf ein Thumbnail

            - PuzzleWinDow:
                Zeigt ein Popup-Fenster an, wenn das Puzzle gelöst wurde:
                * Präsentiert das vollständige Puzzlebild, die benötigte Zeit und Anzahl der Züge
                * Verwendet conditional rendering basierend auf dem isOpen-Prop
                
            - GameInfo: Bietet Spielregeln und Informationen

    Diese Komponenten demonstrieren eine gut strukturierte, interaktive Spielimplementierung mit Routing, Zustandsmanagement und Benutzerinteraktion. Das Schiebepuzzle-Spiel bietet Funktionen wie Bildauswahl, Zeitmessung, Zugzählung und Bestenliste, was es zu einer umfassenden und ansprechenden Spielerfahrung macht.

    ♣️ MemoryGame.jsx:

        Diese Komponente bildet das Herzstück des Memory-Spiels:

        ✨ Hauptfunktionen:
            - Schwierigkeitsgrade: Unterstützt mehrere Schwierigkeitsstufen, die die Anzahl der Karten und das Verhalten des Spiels beeinflussen.
            - Responsive Layout: Passt das Layout der Karten basierend auf der Bildschirmgröße an, um eine optimale Darstellung zu gewährleisten.

        ⚙️ Spielmechanik:
            - Initialisiert das Spiel mit gemischten Kartenpaaren.
            - Verarbeitet Klicks auf Karten, um Paare zu finden.
            - Verwendet Timer, um Karten automatisch umzudrehen, wenn sie nicht übereinstimmen.
            - Zählt die Anzahl der Züge und zeigt diese an.

        🏁 Spielende: Öffnet ein Popup-Fenster (MemoryWinDow), wenn alle Paare gefunden wurden.

    Diese Komponenten bieten eine umfassende und interaktive Spielerfahrung mit verschiedenen Schwierigkeitsgraden, einer ansprechenden Benutzeroberfläche und einer robusten Spielmechanik. Das Memory-Spiel ist sowohl für Desktop- als auch für mobile Geräte optimiert.


Footer.jsx

    Implementiert den Footer-Bereich der Webseite:
    - Integriert die ContactSection-Komponente für das Kontaktformular

    ContactSection.jsx:
    Verwaltet die Anzeige und den Zustand des Kontaktformulars:
    - Verwendet einen Popup-Mechanismus zum Öffnen und Schließen des Kontaktformulars.
    - Zeigt eine Bestätigungsnachricht nach dem Absenden des Formulars an.
    - Nutzt die ContactForm-Komponente für die eigentliche Formulareingabe.

    ContactForm.jsx:
        Implementiert das eigentliche Kontaktformular:
        - Verwendet React Hooks (useState) für die Formularstatusverwaltung.
        - Integriert Redux (useDispatch) für das Absenden der Kontaktdaten.
        - Implementiert eine ALTCHA-Widget zur Spam-Prävention.
        - Validiert Eingaben und erfordert das Ausfüllen aller Felder.

### ✨ Funktionen

    - Vollständig responsives Design
    - Theme-Wechsel (Dunkel-/Hellmodus)
    - Animationen und Übergänge
    - Performance-Optimierungen
    - Dynamische Inhaltsdarstellung
    - Interaktive Benutzeroberfläche und Popup-Fenster
    - Formularvalidierung

### 🛠 Technische Aspekte

    - Implementiert Error Boundaries für robuste Fehlerbehandlung
    - Nutzt CSS-Module für komponentenspezifisches Styling
    - Fortgeschrittenes State Management und React-Hooks
    - Conditional Rendering und Prop Validierung
    - Wiederverwendbare Komponenten
    - Integration von Charting-Bibliotheken für Datenvisualisierung
    - Einbindung von Drittanbieter-Widgets (ALTCHA)

### 💻 Backend

    Die Komponenten PurrrscheStockChart, WeatherApp und das Kontaktformular der Anwendung sind nur mit der dafür erstellten Backend-Anwendung voll funktionsfähig. Das Backend stellt die notwendigen APIs und Datenverarbeitungsfunktionen bereit, um die Daten für die Aktienkurse, Wetterinformationen und die Verarbeitung von Kontaktanfragen zu ermöglichen.

    Die README.md-Datei des Backends finden Sie im „server“-Ordner.
