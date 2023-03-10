import React from 'react'
import bgImg from '../assets/cyber-bg.png'
import CloudIcon from '../assets/cloud.svg'
import DatabaseIcon from '../assets/database.svg'
import PaperAirplaneIcon from '../assets/paper-airplane.svg'
import ServerIcon from '../assets/server.svg'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col justify-between'>
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Sequenciamento & Produção Exclusivos</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Gerenciamento em Nuvem</h1>
                <p className='text-2xl'>Essa é nossa marca Tech.</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Comece Agora</button>
            </div>
            <div>
              <img src={bgImg} alt="/" className='w-full'/>
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
              <p>Serviços Data</p>
              <div className='flex justify-between flex-wrap px-4'>
                <p className='flex px-4 py-2'><img src={CloudIcon} className="h-6"/>Segurança a APPs</p>
                <p className='flex px-4 py-2'><img src={DatabaseIcon} className="h-6"/>Painel de Controle de Design</p>
                <p className='flex px-4 py-2'><img src={ServerIcon} className="h-6"/>Cloud Data</p>
                <p className='flex px-4 py-2'><img src={PaperAirplaneIcon} className="h-6"/>APIs</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero