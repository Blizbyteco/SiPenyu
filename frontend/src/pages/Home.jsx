import React from 'react'
import StatisticCard from '../components/Atoms/StatisticCard'
import MacTerminal from '../components/MacTerminal'
import BubbleRight from '../assets/img/illustrasi/bubble_right.webp'
import BubbleLeft from '../assets/img/illustrasi/bubble_left.webp'
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sekolah',
        data: [30, 40, 35, 50, 55, 60],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Putus Sekolah',
        data: [30, 40, 35, 50, 55, 60],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Mahasiswa',
        data: [30, 40, 35, 50, 55, 60],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Status Pendidikan',
      },
    },
  };

  return (
    <div>
      {/* hero section */}
      <section className='w-full bg-hero h-screen bg-cover bg-fixed bg-no-repeat py-6 flex flex-col justify-center items-center text-4xl font-semibold space-y-2'>

        <h1>Selamat Datang</h1>
        <div className='flex items-center gap-x-4'>
          <img className='w-16' src={BubbleLeft} alt="left" />
          <h1>di</h1>
          <img className='w-16' src={BubbleRight} alt="right" />
        </div>
        <h1>Aplikasi Si Penyu Muda</h1>
      </section>

      {/* statistic section */}
      <section className='bg-grid-mobile bg-cover bg-fixed bg-center min-h-screen py-12 px-4'>
        <h1 className='text-3xl text-center font-semibold'>Statistik Pemuda
        Kabupaten Pamekasan</h1>

        <div className='mt-16  space-y-12  '>
          <StatisticCard />
          <StatisticCard />
          <StatisticCard />
          <StatisticCard />
        </div>
      </section>

      <section className='py-12 px-4 min-h-screen'>
        <h1 className='text-3xl text-center font-semibold'>Visualisasi & Pencarian Data Kepemudaan</h1>
        <p className='mt-8 text-gray'>
        Anda dapat menjelajahi data kepemudaan Pamekasan melalui grafik interaktif dan tabel dinamis. Gunakan fitur pencarian untuk menemukan data spesifik, atau filter berdasarkan kategori tertentu. Data juga dapat diunduh dalam format CSV untuk keperluan analisis lebih lanjut.
        </p>
        <div className='h-[70vh] w-full bg-data-graphic bg-cover rounded-lg p-8 mt-12'>

          {/* window background */}
          <MacTerminal>
            <h2>Grafik berdasarkan kategori</h2>
            <select name="category" className='w-full p-2 mt-4 rounded-md bg-gray text-gray text-sm'>
              <option value="Pelajar">Pelajar</option>
            </select>
              
            <Line data={data} options={options} className='mt-6'/>
          </MacTerminal>
          {/* window background */}
        </div>
      </section>
    </div>
  )
}
