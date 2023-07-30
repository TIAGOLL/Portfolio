import FloatInput from "@/components/FloatInput";

const FormContact = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center p-6">
                <h1 className="text-xl font-semibold text-zinc-800 lg:text-2xl">Entre em contato:</h1>
            </div>
            <form className="w-10/12 flex flex-col gap-4 lg:w-4/12">
                <FloatInput id="email" name="email" placeHolder="Email" typeInput="email" />
                <FloatInput id="assunto" name="assunto" placeHolder="Assunto" typeInput="text" />
                <FloatInput id="mensagem" name="mensagem" placeHolder="Mensagem" typeInput="text" bigText />
                <button className="flex flex-row bg-emerald-500 justify-center items-start rounded px-6 py-2 text-lg font-semibold text-zinc-800 border-2 border-zinc-400 shadow-lg">Enviar</button>
            </form>
        </div>
    );
}

export default FormContact;