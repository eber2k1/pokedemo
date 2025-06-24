export const ErrorMessage = ({ message = 'Ha ocurrido un error. Por favor, inténtalo de nuevo.' }) => (
    <div className="text-center my-4 p-4 bg-red-100 text-red-700 rounded-md">
        {message}
    </div>
);
