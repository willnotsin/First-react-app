export default function Button(prop) {
  const { type = "submit", children, disabled } = prop;

  return (
    <button type={type} disabled={disabled} className="btn">
      {children}
    </button>
  );
}
