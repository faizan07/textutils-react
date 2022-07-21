import React from 'react'

function Alert(props) {
    const capitalizeAlertType = (word) =>{
        const lower = word.toLocaleLowerCase()
        return lower.charAt(0).toLocaleUpperCase() + lower.slice(1)

    }
  return (
    props.alert && <div className={`alert alert-${props.alert.alertType} alert-dismissible fade show`} role="alert">
        <strong>{capitalizeAlertType(props.alert.alertType)}</strong> : {props.alert.alertMessage}
    </div>
  )
}

export default Alert