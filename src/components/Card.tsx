import { useState } from "react";

// Это перечисление для варианта краточки
export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  // Вопросительный знак делает их не обязательными
  width?: string;
  height?: string;
  children?: React.ReactNode | React.ReactChild; //Либо одно, либо второе
  variant: CardVariant; // ждем, что в пропсах будет одно из перечислений CardVariant
  onclick: (num: number) => void; // в пропсах будет функция, которая ничего не возвращает
}
// <CardProps> в данном случает - дженерик
const Card: React.FC<CardProps> = ({
  width,
  height,
  children,
  variant,
  onclick,
}) => {
  const [num, setNum] = useState(0);

  return (
    <div
      style={{
        width,
        height,
        border:
          variant === CardVariant.outlined
            ? "4px solid black"
            : "10px solid red",
      }}
      onClick={() => onclick(num)}
    >
      {children}
    </div>
  );
};

export default Card;
