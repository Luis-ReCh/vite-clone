export default function btn(props) {
  const description = `${props.value}`;
  return (
    <div>
      <button>{description}</button>
    </div>
  );
}
