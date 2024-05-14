import React from 'react'
import './input.css'

function ConsoleTemplateInput() {
    return (
        <div className="input">
            <button className="input__resize-bar"></button>
            <textarea className="body" name="console-template-input">
            </textarea>
        </div>)
}

export default ConsoleTemplateInput