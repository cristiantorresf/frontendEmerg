import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log("🙀  >>", {error, errorInfo});
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h4>🙀Error 🤯 No hay comunicación con el servidor.</h4>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
