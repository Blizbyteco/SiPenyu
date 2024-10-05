import React from 'react'
import StatisticCard from '../components/Atoms/StatisticCard'

export default function Home() {
  return (
    <div>
      <section className='w-full bg-hero h-screen bg-cover bg-fixed bg-no-repeat bg-center py-6'>
        <h1>Sipenyu</h1>
      </section>
      <section className='bg-box bg-cover bg-fixed bg-center min-h-screen py-12 px-4'>
        <h1 className='text-3xl text-center font-semibold'>Statistik Pemuda
        Kabupaten Pamekasan</h1>

        <div className='mt-12 space-y-6'>
          <StatisticCard />
          <StatisticCard />
          <StatisticCard />
          <StatisticCard />
        </div>
      </section>
    </div>
  )
}
