import React, { useRef } from "react";
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
import { generateMessege } from "../utils/text";

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


  // Refs

  const senderName = useRef()
  const senderAddress = useRef()
  const senderBusiness = useRef()
  const senderMessege = useRef()

  // Handlers

  const handleMessege = () => {
    window.open(`https://wa.me/+6281333745705/?text=${generateMessege(senderName.current.value, senderAddress.current.value, senderBusiness.current.value, senderMessege.current.value)}`, "_blank")
  }


  return (
    <div>
      {/* hero section */}
      <section id="beranda" className="w-full bg-hero h-screen bg-cover bg-fixed bg-no-repeat py-6 flex flex-col justify-center items-center text-4xl font-semibold space-y-2 px-4">
        <h1>
        <span className="text-secondary">Sistem</span> pendataan kepemudaan kabupaten <span className="text-primary">pamekasan</span>
        </h1>
      </section>

      {/* statistic section */}
      <section id="statistik" className="bg-grid-mobile bg-cover bg-fixed bg-center min-h-screen py-12 px-4">
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

      <section id="data" className="py-12 min-h-screen max-w-full w-full">
        <h1 className="text-3xl text-center font-semibold">
          Visualisasi & Pencarian Data Kepemudaan
        </h1>
        <p className="mt-8 text-gra px-4">
          Anda dapat menjelajahi data kepemudaan Pamekasan melalui grafik
          interaktif dan tabel dinamis. Gunakan fitur pencarian untuk menemukan
          data spesifik, atau filter berdasarkan kategori tertentu. Data juga
          dapat diunduh dalam format CSV untuk keperluan analisis lebih lanjut.
        </p>
        <div className="min-h-[70vh] h-max w-full bg-data-graphic bg-cover rounded-lg py-8 px-4 mt-12 space-y-12">
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
              <table className="table-auto w-full mt-6 text-sm border border-gray-300">
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
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-l border-r border-gray-300 text-center py-2 px-4">1</td>
                    <td className="border-l border-r border-gray-300 text-center py-2 px-4">Proppoo</td>
                    <td className="border-l border-r border-gray-300 text-center py-2 px-4">Mahasiswa</td>
                    <td className="border-l border-r border-gray-300 text-center py-2 px-4">Pelajar Sekolah</td>
                    <td className="border-l border-r border-gray-300 text-center py-2 px-4">2024</td>
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

      <section id="about" className="py-12 px-4 min-h-[80vh] max-w-full w-full">
          <h1 className="text-3xl font-semibold">Tentang Si Penyu Muda</h1>
          <div className="w-1/4 rounded-md h-[5px] bg-secondary mt-6"></div>
          <p className="mt-8">
          Di era Society 5.0 perubahan didasarkan adanya big data yang dapat dikembangkan secara virtual agar data diakses dan dapat dijadikan solusi untuk pengambilan keputusan secara tepat dan efektif.
          Melalui Si Penyu Muda akan menghadirkan data Pemuda Pamekasan setiap tahunnya yang akan ditampilkan di website Dinas Kepemudaan Olahraga dan Kepemudaan Kabupaten Pamekasan.
          </p>
      </section>

      <section id="contact" className="w-full min-h-screen bg-secondary text-white text-center px-4 py-12">
        <h1 className="font-semibold text-4xl text-center">Contact</h1>
        <p className="mt-8 mb-12">
        Pengguna  Si Penyu Muda Kabupaten Pamekasan dapat mengirimkan saran, masukan, kritikan dan informasi lainnya yang dapat membantu dalam pengembangan Si Penyu Muda Kabupaten Pamekasan.
        </p>

        <div className="space-y-6">

        <MacTerminal>
          <div className="space-y-6 py-4">
            <p className="text-gray-500 text-left text-sm">Pesan ini akan otomatis di kirim ke whatsapp, pastikan anda sudah meng-install aplikasi whatsapp
            </p>
            <input ref={senderName} type="text" className="bg-gray-200 w-full rounded-md py-3 px-6 text-sm text-gray-600" placeholder="nama" />
            <input ref={senderAddress} type="text" className="bg-gray-200 w-full rounded-md py-3 px-6 text-sm text-gray-600" placeholder="alamat" />
            <input ref={senderBusiness} type="text" className="bg-gray-200 w-full rounded-md py-3 px-6 text-sm text-gray-600" placeholder="usaha" />
            <textarea ref={senderMessege} type="text" className="bg-gray-200 w-full rounded-md py-3 px-6 text-sm text-gray-600" placeholder="pesan" />
            <button onClick={handleMessege} className="w-full py-2 rounded-md bg-secondary text-center text-white text-sm">Kirim</button>
          </div>
        </MacTerminal>
        <MacTerminal>
          <div className="py-4 text-gray-500 text-sm text-left space-y-4">
              <p>WhatsApp : +62 5589 55488 55</p>
              <p>Email    : statistik@pamekasankab.go.id</p>
              <p>Lokasi   : Jl. Darma No.12, Taman, Lawangan Daya, Kec. Pademawu, Kabupaten Pamekasan, Jawa Timur 69323</p>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3958.6998424832036!2d113.4927466!3d-7.1606578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd77deedfa7e05b%3A0xf65af701caa3372c!2sKantor%20DISPORAPAR%20Kab.%20Pamekasan!5e0!3m2!1sen!2sid!4v1728703419630!5m2!1sen!2sid" width="600" height="450" className="border-none rounded-md max-w-full mt-4" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </MacTerminal>
        </div>
      </section>
    </div>
  );
}
