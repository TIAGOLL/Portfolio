

const FloatInput = ({ typeInput, name, id, placeHolder = 'Escreva', bigText = false }: inputProps) => {

    return (
        <>
            <div className="mt-4 relative w-full flex space-x-2 items-center">
                {bigText ?
                    <textarea cols={10} id={id} name={name} className="shadow-lg p-2 h-56 border peer border-secondary pl-4 rounded-xl w-full border-b-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-emerald-500" />
                    :
                    <input id={id} name={name} type={typeInput} className="shadow-lg p-2 border peer border-secondary pl-4 rounded-xl h-10 w-full border-b-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-emerald-500" />
                }
                <label htmlFor={id} className="cursor-text absolute left-2 top-1 bottom-0 font-normal text-gray-600 text-lg transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:text-t-main peer-focus:text-lg peer-focus:m-0 peer-focus:font-semibold">{placeHolder}</label>
            </div>
        </>
    )
}

export default FloatInput;