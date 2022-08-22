export default function Container(prop) {
  const { children } = prop;

  return (
    <>
      <div className="Container">{children}</div>
    </>
  );
}
