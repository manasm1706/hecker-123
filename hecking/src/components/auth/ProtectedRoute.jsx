"use client"

import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext)

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  if (!currentUser) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute

