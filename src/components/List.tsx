import React, { FunctionComponent } from "react";

interface ListProps<T> {
  // Массив элементов с передваемым типом T
  items: T[];
  renderItem: (item: T) => React.ReactNode; // компонент, который необходимо отрисовать
}

// const List: FunctionComponent<ListProps> = ({}) => {
//   return <div></div>;
// };

// export default List;

// для простоты указания типов, лучше использовать вид обычной фукнции, а не стрелочной
export default function List<T>(props: ListProps<T>) {
  return <div>{props.items.map(props.renderItem)}</div>;
}
