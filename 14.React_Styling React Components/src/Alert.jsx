import React from 'react'

// Alert is a reusable functional component
// It accepts two props:
// 1. children → content inside the Alert component
// 2. type → determines alert style (default is "success")
const Alert = ({children, type = "success"}) => {
  return (
    <div style={{
        // Change background color based on alert type
        // Green for success, Red for error
        backgroundColor : type === "success" ? "#10b981" : "#ef4444",
        color : "black",
        padding : "16px",
        borderRadius : "8px",
        marginBottom : "16px"
    }}>
        {/* Render dynamic content passed between <Alert> tags */}
      {children}
    </div>
  )
}

// Export component so it can be reused anywhere
export default Alert
