import { RepoProps } from "@/types/repo";
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { FaCode, FaStar } from 'react-icons/fa';
import { SiTrailforks } from 'react-icons/si';
import { BsCalendar2DateFill } from 'react-icons/bs';
import Link from 'next/link';

const RepositoryCard = ({ name, language, html_url, forks_count, stargazers_count, created_at, description, homepage, size }: RepoProps) => {



    created_at = created_at.slice(0, 10).split('-').reverse().join('/');



    return (
        <div className="flex flex-col w-11/12 font-semibold items-center border-white text-zinc-700 shadow-cardRepos border-2 rounded-xl lg:m-6 lg:p-4 lg:w-5/12 ">

            {/* Tittle */}
            <div className="w-full text-center items-center justify-center flex">
                <h1 className="w-auto pl-6 pr-6 pb-2 pt-2 mt-4 first-line:flex flex-row font-bold text-xl items-center text-center justify-center shadow-xl rounded-full border">{name}</h1>
            </div>

            {/* Body */}
            <div className="flex flex-col w-10/12 items-start space-y-2 justify-center text-lg p-6 lg:flex-row lg:space-y-0 lg:space-x-6 lg:items-center lg:flex-wrap">
                <div className="flex flex-row items-center space-x-2">
                    <FaCode />
                    <p>
                        {language}
                    </p>
                </div>

                <div className="items-center flex flex-row space-x-1">
                    <FaStar />
                    <span>{stargazers_count}</span>
                </div>
                <div className="items-center flex flex-row space-x-1">
                    <SiTrailforks />
                    <span>{forks_count}</span>
                </div>
                <div className="items-center flex flex-row space-x-1">
                    <BsCalendar2DateFill />
                    <span>{created_at}</span>
                </div>

                <div className="items-center flex flex-row space-x-1">
                    <AiOutlineAlignLeft />
                    <span>{size} Linhas</span>
                </div>

            </div>

            {/* Description */}
            <div className="flex items-center justify-center text-center pb-6 p-2 lg:pb-10 lg:pl-10 lg:pr-10">
                {!description ? <p>Não existe descrição</p> : <p>{description}</p>}
            </div>

            <div className="items-center justify-center text-center flex flex-col w-full space-y-4 pb-4 lg:flex-row lg:space-y-0 lg:space-x-4">
                <Link className="border p-2 pl-10 pr-10 rounded-full shadow-cardRepos" href={html_url} target="_blank">Ver código</Link>
                {homepage && <Link className="border p-2 pl-10 pr-10 rounded-full shadow-cardRepos" href={homepage} target="_blank">Ver deploy</Link>}
            </div>
        </div>
    );
};

export default RepositoryCard;
