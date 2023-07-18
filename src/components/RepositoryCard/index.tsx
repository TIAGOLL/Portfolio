import { RepoProps } from "@/types/repo";
import { AiOutlineStar, AiOutlineBranches } from 'react-icons/ai';
import { FaCode, FaStar } from 'react-icons/fa';
import { SiTrailforks } from 'react-icons/si';
import { BsCalendar2DateFill } from 'react-icons/bs';

const RepositoryCard = ({
    name,
    language,
    html_url,
    forks_count,
    stargazers_count,
    created_at,
}: RepoProps) => {
    created_at = created_at.slice(0,10)
    return (
        <div className="flex flex-col border-white text-zinc-700 shadow-cardRepos border-2 rounded-xl m-6 p-4 w-5/12 font-semibold items-center">

            {/* Tittle */}
            <div className="w-full text-center items-center justify-center flex">
                <h1 className="w-auto pl-6 pr-6 pb-2 pt-2 first-line:flex flex-row font-bold text-xl items-center text-center justify-center shadow-xl rounded-full border">{name}</h1>
            </div>

            {/* Body */}
            <div className="flex flex-row w-10/12 items-center justify-center space-x-6 text-lg p-6">
                <div className="flex flex-row items-center space-x-2">
                    <FaCode />
                    <p className="">
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


            </div>

            {/* Description */}
            <div className="flex flex-col items-center justify-center text-center pb-10">
                <p></p>
            </div>

            <div className="items-center justify-center text-center flex flex-row">
                <a className="border p-2 pl-10 pr-10 rounded-full shadow-cardRepos" href={html_url} target="_blank" >
                    <span>Ver código</span>
                </a>
            </div>
        </div>
    );
};

export default RepositoryCard;
