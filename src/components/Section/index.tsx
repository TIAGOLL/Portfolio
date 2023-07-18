type sectionProps = {
  width: string,
  height: string,
  text: string,
  items: string,
  justify: string,
  children: React.ReactElement,
}

const Section = ({ width, text, items, justify, children, height }: sectionProps) => {


  return (
    <>
      <div className={`w-${width}/12 h-${height} bg-violet-400 flex-col flex text-${text} items-${items} justify-${justify} p-5 rounded-2xl`}>
        <>
          {children}
        </>
      </div>
    </>
  )
}

export default Section;