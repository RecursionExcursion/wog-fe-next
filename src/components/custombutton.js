export default function CustomButton({ text, type, styling }) {
    return (
      <button
      type={type}
        className={`bg-gray-800 text-primary px-10 py-2 rounded-full shadow-md cursor-pointer hover:bg-gray-300 ${styling}`}
      >
        {text}
      </button>
    );
  }
  
