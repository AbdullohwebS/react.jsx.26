import React from "react";
import "./Button.css";

export default function Button({ href = "/", variant, text }) {
  return <a href={href}>{text}</a>;
}
