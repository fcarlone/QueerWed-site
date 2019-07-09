import React from 'react';
import "./style.css"

export const LinkedButton = (props) => (
    <a
        href={props.href}
        class="btn waves-effect"
        role="button"
        style={{ border: "2px solid #e91e63", backgroundColor: "#e91e63", width: `${props.width}`, float: `${props.float}` }}
    >
        {props.value}
    </a>
);

export const LinkedOutlinedButton = (props) => (
    <a
        href={props.href}
        class="btn waves-effect"
        role="button"
        style={{ border: "2px solid #e91e63", width: `${props.width}`, float: `${props.float}` }}
    >
        {props.value}
    </a>
);

export const Button = (props) => (
    <button
        type="button"
        className="btn waves-effect"
        onclick={props.onclick}
        style={{ border: "2px solid #e91e63", backgroundColor: "#e91e63", width: `${props.width}`, float: `${props.float}` }}
    >
        {props.value}
    </button>
);

export const OutlinedButton = (props) => (
    <button
        type="button"
        className="btn waves-effect"
        onclick={props.onclick}
        style={{ border: "2px solid #e91e63", width: `${props.width}`, float: `${props.float}` }}
    >
        {props.value}
    </button>
);