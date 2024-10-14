// eslint-disable-next-line react/prop-types
export default function Select ({ id, label, props, children }) {
    return(
        <div className="w-full flex flex-col">
            <label htmlFor={id} className="font-semibold text-base text-gray-700">{label}</label>
            <select id={id} {...props} className="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-lg rounded-xl focus:ring-violet-700 focus:border-violet-700 block w-full p-2.5">
                {children}
            </select>
        </div>
    );
}
