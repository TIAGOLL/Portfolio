import Header from "@/components/Header";
import Image from "next/image";

const Home = () => {

  return (
    <>
      <Header />

      {/* MOBILE */}
      <div className='w-screen items-center justify-center flex'>
        <div className='w-full flex bg-secondary pt- flex-col items-center justify-center lg:hidden'>

          <div className="items-center justify-center flex pt-5 lg:w-4/12">
            <Image className='shadow-link rounded-full border-zinc-600 border-2' src={'images/myphoto.png'} alt="Minha foto" width={500} height={0} />
          </div>

          <div className='text-center justify-center p-5 flex flex-col space-y-2'>
            <h1 className='font-bold font-[Montserrat] text-md text-tittle'>Estudante e entusiasta da programação</h1>
            <p className='text-description font-semibold text-sm'>Hoje estou focando em dominar o Next.js, um framework que me está me levando para o full-stack!</p>
          </div>


        </div>



        {/* PC */}
        <div className='w-full bg-secondary lg:flex hidden'>
          <div className='w-8/12 text-center justify-start pt-28 flex flex-col space-y-10'>
            <h1 className='font-bold font-[Montserrat] text-5xl text-tittle'>Estudante e entusiasta da programação</h1>
            <p className='text-description font-semibold'>Hoje estou focando em dominar o Next.js, um framework que me está me levando para o full-stack!</p>
          </div>

          <div className="w-4/12 items-center justify-center flex">
            <Image className='shadow-link rounded-full border-zinc-600 border-2' src={'images/myphoto.png'} alt="Minha foto" width={500} height={0} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;