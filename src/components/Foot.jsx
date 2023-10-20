import React from 'react'

const Foot = ({footerAPI:{titles,links}}) => {
  return (
<footer className='bg-theme pt-7 pb-5  '>
    <div className='nike-container text-slate-200  items-center justify-center'>
        <div className='grid items-center  justify-center grid-cols-3 max-w-2xl
        md:max-w-none mg:gap-5'>
        {titles.map((val,i)=>(
            <div key={i} className='grid items-center justify-center'>
                <h1 className='text-lg lg:text-base uppercase font-bold'>{val.title}</h1>
            </div>
        ))}
        {links.map((list,i)=>(
            <ul className='grid items-center justify-center' key={i}>{list.map((val,i)=>(<li className='text-sm sm:text-xs '>{val.link}</li>))}</ul>
        ))}
    </div>
    <div className='mt-5 text-center'>
<p className='text-sm md:text-center text-center'>All Right Reserved</p>
    </div>
    </div>
</footer>  )
}

export default Foot