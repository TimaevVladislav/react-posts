import React from "react"
import {connect} from "react-redux"

const Alert = ({text, color}) => (
    <div className={`alert alert-${color}`} role="alert">
        {text}
    </div>
)

const mapStateToProps = (state) => {
    return {
        text: state.app.alert,
        color: state.app.color
    }
}

export default connect(mapStateToProps, null)(Alert)