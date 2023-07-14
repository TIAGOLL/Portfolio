import Image from "next/image";

const UsedTechs = () => {

    return (
        <>
            <h1 className="text-zinc-700 pt-1 text-xl font-bold w-full pl-4">
                Tecnologias usadas:
            </h1>

            <div className="flex flex-row pt-6 space-x-1">
                <Image className="rounded-3xl shadow-link" height={0} src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="Logo JS" width={30} />
                <Image className="rounded-3xl shadow-link" height={0} src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" alt='Logo TS' width={30} />
                <Image className="rounded-3xl shadow-link" height={0} src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt="Logo React" width={30} />
                <Image className="rounded-3xl shadow-link" height={0} src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" alt="Logo Node.JS" width={30} />
                <Image className="rounded-3xl shadow-link" height={0} src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/eslint/eslint.png" alt="Logo ESLint" width={30} />
                <Image className="rounded-3xl shadow-link" height={0} src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png" alt="Logo MySQL" width={30} />
                <Image className="rounded-3xl shadow-link" height={0} src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" alt="Logo Git" width={30} />
                <Image className="rounded-3xl shadow-link" height={0} src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" alt="Logo GitHub" width={30} />
            </div>

        </>
    )

}

export default UsedTechs;