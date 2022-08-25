import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { eventId: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {}

  render() {
    if (this.state.hasError) {
      //render fallback UI
      return (
        <div>
          <h2>Error encountered</h2>
          <a href="/">Return Home</a>
          <a href="/blog">Return to Blog</a>
        </div>
      );
    }

    //when there's not an error, render children untouched
    return this.props.children;
  }
}

export default ErrorBoundary;
