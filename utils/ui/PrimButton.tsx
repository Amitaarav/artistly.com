

export const PrimButton = ({label, handler}: {label: React.ReactNode, handler: () => void} ) => {
    return <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={() => {handler}}>{label}</button>;
};