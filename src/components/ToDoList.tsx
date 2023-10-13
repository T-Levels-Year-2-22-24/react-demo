interface ToDoListProps {
  title: string;
  items: string[];
}

function ToDoList({ title, items }: ToDoListProps) {
  const itemTags = items.map((item) => (
    <li>
      {item} <input type="checkbox" />
    </li>
  ));

  return (
    <>
      <h2>{title}</h2>
      <ul>{itemTags}</ul>
    </>
  );
}

export default ToDoList;
