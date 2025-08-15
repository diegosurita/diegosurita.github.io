'use client'

import React from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error | undefined
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error: Error; reset: () => void }>
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError && this.state.error) {
      const Fallback = this.props.fallback || DefaultErrorFallback
      return (
        <Fallback
          error={this.state.error}
          reset={() => this.setState({ hasError: false })}
        />
      )
    }

    return this.props.children
  }
}

const DefaultErrorFallback: React.FC<{ error: Error; reset: () => void }> = ({
  error,
  reset,
}) => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2>Something went wrong</h2>
    <details style={{ marginBottom: '1rem' }}>
      <summary>Error details</summary>
      <pre style={{ textAlign: 'left', overflow: 'auto' }}>{error.message}</pre>
    </details>
    <button onClick={reset} style={{ padding: '0.5rem 1rem' }}>
      Try again
    </button>
  </div>
)

export default ErrorBoundary