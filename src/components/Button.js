export default function Button(prop) {
  const { type = "submit", children, disabled, className, onClick } = prop;

  return (
    <button 
    type={type} 
    disabled={disabled} 
    className={`btn btn-${className}`} 
    onClick = {onClick}
    >
      {children}
    </button>
  );
}
