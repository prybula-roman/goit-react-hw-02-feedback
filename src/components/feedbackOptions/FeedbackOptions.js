import React from "react"
import PropTypes from 'prop-types'

class FeedbackOptions extends React.Component{
    state={}
constructor(){
super();
}
 render() {
        return( 
        <div>
            <button type="button" onClick={()=>{console.log("clicked Good")}}>Good</button>
            <button type="button" onClick={()=>{console.log("clicked Neutral")}}>Neutral</button>
            <button type="button" onClick={()=>{console.log("clicked Bad")}}>Bad</button>
        </div>
        )
 }
}

export default FeedbackOptions