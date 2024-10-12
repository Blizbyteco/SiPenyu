import React from "react";
import StatisticCard from "../components/Atoms/StatisticCard";
import MacTerminal from "../components/MacTerminal";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

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
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sekolah",
        data: [30, 40, 35, 50, 55, 60],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Putus Sekolah",
        data: [30, 40, 35, 50, 55, 60],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Mahasiswa",
        data: [30, 40, 35, 50, 55, 60],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Status Pendidikan",
      },
    },
  };

  return (
    <div>
      {/* hero section */}
      <section className="w-full bg-hero h-screen bg-cover bg-fixed bg-no-repeat py-6 flex flex-col justify-center items-center text-4xl font-semibold space-y-2 px-4">
        <h1>
        <span className="text-secondary">Sistem</span> pendataan kepemudaan kabupaten <span className="text-primary">pamekasan</span>
        </h1>
      </section>

      {/* statistic section */}
      <section className="bg-grid-mobile bg-cover bg-fixed bg-center min-h-screen py-12 px-4">
        <h1 className="text-3xl text-center font-semibold">
          Statistik Pemuda Kabupaten Pamekasan
        </h1>

        <div className="mt-16  space-y-12  ">
          <StatisticCard />
          <StatisticCard />
          <StatisticCard />
          <StatisticCard />
        </div>
      </section>

      <section className="py-12 px-4 min-h-screen max-w-full w-full">
        <h1 className="text-3xl text-center font-semibold">
          Visualisasi & Pencarian Data Kepemudaan
        </h1>
        <p className="mt-8 text-gray">
          Anda dapat menjelajahi data kepemudaan Pamekasan melalui grafik
          interaktif dan tabel dinamis. Gunakan fitur pencarian untuk menemukan
          data spesifik, atau filter berdasarkan kategori tertentu. Data juga
          dapat diunduh dalam format CSV untuk keperluan analisis lebih lanjut.
        </p>
        <div className="min-h-[70vh] h-max w-full bg-data-graphic bg-cover rounded-lg p-8 mt-12 space-y-12">
          {/* window background */}
          <MacTerminal>
            <h2>Grafik berdasarkan kategori</h2>
            <select
              name="category"
              className="w-full p-2 mt-4 rounded-md bg-gray text-gray text-sm"
            >
              <option value="Pelajar">Pelajar</option>
            </select>

            <Line data={data} options={options} className="mt-6" />
          </MacTerminal>
          {/* window background */}

          <MacTerminal>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
              <input
                type="text"
                className="border-[1.5px] border-gray-300 rounded-md px-4 py-2 text-gray-500 text-sm col-span-2"
                placeholder="Search..."
              />

              <select className="p-2 rounded-md">
                <option value="8">8</option>
              </select>

              <select className="p-2 rounded-md px-6 text-sm text-gray-600">
                <option value="">Kategori</option>
              </select>
              <select className="p-2 rounded-md px-6 text-sm text-gray-600">
                <option value="">Sub-Kategori</option>
              </select>
              <select className="p-2 rounded-md px-6 text-sm text-gray-600">
                <option value="8">Tahun</option>
              </select>

              <button className="bg-secondary text-white rounded-md px-6 py-2 flex-1 col-span-2">
                Cari
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-max table-auto mt-6 text-sm border border-gray-300">
                <thead>
                  <tr>
                    <th className="text-center border-r border-l  border-gray-400 bg-gray-300 py-2 px-4 font-semibold">
                      No
                    </th>
                    <th className="text-center border-r border-l  border-gray-400 bg-gray-300 py-2 px-4 font-semibold">
                      Kecamatan
                    </th>
                    <th className="text-center border-r border-l  border-gray-400 bg-gray-300 py-2 px-4 font-semibold">
                      Kategori
                    </th>
                    <th className="text-center border-r border-l  border-gray-400 bg-gray-300 py-2 px-4 font-semibold">
                      Sub Kategori
                    </th>
                    <th className="text-center border-r border-l  border-gray-400 bg-gray-300 py-2 px-4 font-semibold">
                      Tahun
                    </th>
                    <th className="border-r border-l border-gray-300 bg-gray-300 py-2 px-4 font-semibold">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-l border-r border-gray-300 text-center py-2 px-4">1</td>
                    <td className="border-l border-r border-gray-300 text-center py-2 px-4">Proppoo</td>
                    <td className="border-l border-r border-gray-300 text-center py-2 px-4">Mahasiswa</td>
                    <td className="border-l border-r border-gray-300 text-center py-2 px-4">Pelajar Sekolah</td>
                    <td className="border-l border-r border-gray-300 text-center py-2 px-4">2024</td>
                    <td className="border-l border-r border-gray-300 text-center py-2 px-4">
                      <button className="bg-secondary text-white p-2">Download</button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="w-full flex items-center gap-x-4 mt-8">
                {Array.from({length: 4}, (_, i) => (
                  <button className="text-xs px-3 py-2 bg-gray-200 border border-gray-300">{i + 1}</button>
                ))}
              </div>
            </div>
          </MacTerminal>
        </div>
      </section>

      <section className="py-12 px-4 min-h-screen max-w-full w-full">
          <h1 className="text-3xl font-semibold">Tentang Si Penyu Muda</h1>
          <p className="">
          Di era Society 5.0 perubahan didasarkan adanya big data yang dapat dikembangkan secara virtual agar data diakses dan dapat dijadikan solusi untuk pengambilan keputusan secara tepat dan efektif.
          Melalui Si Penyu Muda akan menghadirkan data Pemuda Pamekasan setiap tahunnya yang akan ditampilkan di website Dinas Kepemudaan Olahraga dan Kepemudaan Kabupaten Pamekasan.
          </p>
      </section>
    </div>
  );
}
