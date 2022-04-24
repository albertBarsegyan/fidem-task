export default function ErrorMessageContainer({ errors, touched, fieldName }) {
  return (
    <div>
      {errors[fieldName] && touched[fieldName] ? (
        <span className="text-red-500">{errors[fieldName]}</span>
      ) : null}
    </div>
  );
}
