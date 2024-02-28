import React from "react";
import { Text } from "react-native";
import styles from "./style";

export default function Label({
  text,
  color,
  type,
}) {
  let style = '';

  if (type === 'negrito') {
    style = styles.body.negrito;
  } else {
    switch (type) {
      case 'logo':
        style = color === 'verde' ? styles.logo.verde : styles.logo.branco;
        break;
      case 'tittle':
        style = color === 'verde' ? styles.tittle.verde : styles.tittle.branco;
        break;
      case 'normal':
        style = color === 'verde' ? styles.normal.verde : styles.normal.branco;
        break;
      case 'body':
        style = color === 'preto' ? styles.body.preto : styles.body.branco;
        break;
      case 'little':
        style = color === 'verde' ? styles.little.verde : styles.little.branco;
        break;
    }
  }

  const selected = style;

  return (
    <Text
      style={selected}
    >
      {text}
    </Text>
  );
}
