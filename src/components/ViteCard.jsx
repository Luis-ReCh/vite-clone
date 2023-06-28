export default function VitePage(props) {
  const title1 = `${props.title}`;
  const content = `${props.content}`;
  //const title2 = `${props.title}`;
  // const img = "https://vitejs.dev/logo-with-shadow.png";

  return (
    <div>
      <h4>{title1}</h4>
      <p className="cardP">{content}</p>
    </div>
  );
}
