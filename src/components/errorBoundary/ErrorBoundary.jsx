import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Aktualisieren Sie den State, sodass beim nächsten Render die Fallback-UI angezeigt wird.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Sie können den Fehler auch an einen Fehlerprotokollierungsdienst melden
    console.error("Fehler abgefangen:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Sie können hier jede beliebige Fallback-UI rendern
      return <h1>Etwas ist schief gelaufen.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
