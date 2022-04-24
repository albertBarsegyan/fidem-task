export default function FormFieldLayout({ children }) {
  return (
    <div className="flex flex-col gap-2 justify-start items-start">
      {children}
    </div>
  );
}
