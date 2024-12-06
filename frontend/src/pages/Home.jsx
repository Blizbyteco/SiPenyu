import React, { useEffect, useRef, useState } from "react";
import StatisticCard from "../components/Atoms/StatisticCard";
import MacTerminal from "../components/MacTerminal";
import { Bar } from "react-chartjs-2";
import YouthIcon from "../components/SVG/YouthIcon";
import { easeIn, motion } from "framer-motion";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);
import { generateMessege } from "../utils/text";
import BusinessIcon from "../components/SVG/BusinessIcon";
import OrganizationIcon from "../components/SVG/OrganizationIcon";
import Pagination from "../components/Atoms/Pagination";

export default function Home() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Data Pendidikan",
      },
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  const [statisticData, setStatisticData] = useState({
    pemuda: "-",
    wirausaha: "-",
    organisasi: "-",
  });
  const [selectedAnalyticCategory, setSelectedAnalyticCategory] = useState();
  const [analyticData, setAnalyticData] = useState({
    labels: [],
    datasets: [],
  });

  // Fetcher

  const getStatisticData = async () => {
    await fetch(`${import.meta.env.VITE_BASE_API_URL}/statistic`)
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        }
        return [];
      })
      .then((data) => setStatisticData(data.data));
  };

  const getAnalyticData = async () => {
    await fetch(`${import.meta.env.VITE_BASE_API_URL}/statistic/education`)
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        }
      })
      .then((data) => {
        if (data) {
          const datasets = [];

          Object.keys(data.data).map((labelData) => {
            datasets.push(data.data[labelData]);
          });

          setAnalyticData({
            labels: Object.keys(data.data),
            datasets: [
              {
                label: "Data Pendidikan",
                data: datasets, // Single value for each label
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          });
        }
      });
  };

  // Testing
  useEffect(() => {
    getStatisticData();
    getAnalyticData();
  }, []);

  // Refs

  const senderName = useRef();
  const senderAddress = useRef();
  const senderBusiness = useRef();
  const senderMessege = useRef();

  // Handlers

  const handleMessege = () => {
    window.open(
      `https://wa.me/+6281333745705/?text=${generateMessege(
        senderName.current.value,
        senderAddress.current.value,
        senderBusiness.current.value,
        senderMessege.current.value
      )}`,
      "_blank"
    );
  };

  // Framer motion

  const textAnimations = {
    initial: {
      y: -80,
    },

    animate: {
      y: 0,
      transition: {
        type: "inertia",
        velocity: 100,
      },
    },
  };

  return (
    <div>
      {/* hero section */}
      <section
        id="beranda"
        className="w-full relative bg-hero h-screen bg-cover bg-fixed bg-center bg-no-repeat flex flex-col justify-center items-center lg:items-start lg:justify-end text-4xl font-semibold space-y-2 bg-[url('/hero-bg.jpeg')]"
      >
        <div className="absolute left-0 top-0 bg-black w-screen h-screen bg-opacity-80"></div>
        <div className="absolute bottom-[10%] lg:left-8 z-10">
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.03, ease: easeIn }}
            className=" text-white font-bold lg:text-6xl lg:max-w-[1000px] text-3xl md:text-6xl overflow-hidden flex py-1 items-center"
          >
            {"Sistem Informasi".split("").map((word, index) => (
              <motion.h2
                className="font-primary"
                variants={textAnimations}
                key={index}
              >
                {word == " " ? "\u00A0" : word}
              </motion.h2>
            ))}
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            transition={{
              staggerChildren: 0.03,
              ease: easeIn,
              delayChildren: 0.4,
            }}
            className="text-white font-bold lg:text-6xl lg:max-w-[1000px] text-3xl md:text-6xl overflow-hidden flex py-1 items-center"
          >
            {"Penyusunan Data Kepemudaan".split("").map((word, index) => (
              <motion.h2
                className="font-primary"
                variants={textAnimations}
                key={index}
              >
                {word == " " ? "\u00A0" : word}
              </motion.h2>
            ))}
          </motion.div>
        </div>
        {/* <h1 className="absolute left-4 bottom-24 text-white font-bold z-20 lg:text-6xl lg:max-w-[1000px]">
        Sistem Informasi penyusunan data kepemudaan
        </h1> */}
      </section>

      {/* statistic section */}
      <section
        id="statistik"
        className="flex bg-cover bg-fixed bg-center min-h-screen py-12 px-4"
      >
        <div className="flex-1">
          <h1 className="text-3xl text-center font-semibold">
            Statistik Pemuda
          </h1>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-y-16 max-w-[1200px] mx-auto">
            <StatisticCard
              title="Jumlah Pemuda"
              icon={<YouthIcon />}
              value={`${statisticData.pemuda} Pemuda`}
            />
            <StatisticCard
              title="Jumlah Wirausaha"
              icon={<BusinessIcon />}
              value={`${statisticData.wirausaha} Wirausaha`}
            />
            <StatisticCard
              title="Jumlah Organisasi"
              icon={<OrganizationIcon />}
              value={`${statisticData.organisasi} Organisasi`}
            />
          </div>
        </div>
      </section>

      <section id="data" className="py-12 min-h-screen max-w-full w-full">
        <h1 className="text-3xl text-center font-semibold">
          Visualisasi & Pencarian Data Kepemudaan
        </h1>
        <p className="mt-8 text-gra px-8">
          Anda dapat menjelajahi data kepemudaan Pamekasan melalui grafik
          interaktif dan tabel dinamis. Gunakan fitur pencarian untuk menemukan
          data spesifik, atau filter berdasarkan kategori tertentu. Data juga
          dapat diunduh dalam format CSV untuk keperluan analisis lebih lanjut.
        </p>
        <div className="min-h-[70vh] h-max w-full bg-data-graphic bg-cover rounded-lg py-8 px-4 mt-12 space-y-12">
          {/* window background */}
          <Pagination />
          <MacTerminal>
            <h2>Grafik berdasarkan kategori</h2>
            <select
              name="category"
              className="w-full p-2 mt-4 rounded-md bg-gray text-gray text-sm"
              value={selectedAnalyticCategory}
              onChange={setSelectedAnalyticCategory}
            >
              <option value="pendidikan">Pendidikan</option>
            </select>

            <Bar data={analyticData} options={options} className="mt-6" />
          </MacTerminal>
          {/* window background */}
        </div>
      </section>

      <section id="about" className="py-12 px-8 min-h-[80vh] max-w-full w-full">
        <h1 className="text-3xl font-semibold">Tentang Si Penyu Muda</h1>
        <div className="w-1/4 rounded-md h-[5px] bg-secondary mt-6"></div>
        <p className="mt-8">
          Di era Society 5.0 perubahan didasarkan adanya big data yang dapat
          dikembangkan secara virtual agar data diakses dan dapat dijadikan
          solusi untuk pengambilan keputusan secara tepat dan efektif. Melalui
          Si Penyu Muda akan menghadirkan data Pemuda Pamekasan setiap tahunnya
          yang akan ditampilkan di website Dinas Kepemudaan Olahraga dan
          Kepemudaan Kabupaten Pamekasan.
        </p>
      </section>

      <section
        id="contact"
        className="w-full min-h-screen bg-secondary text-white text-center px-4 py-12"
      >
        <h1 className="font-semibold text-4xl text-center">Kontak kami</h1>
        <p className="mt-8 mb-12">
          Jangan segan untuk berkonsultasi tentang usaha atau keluh kesah anda
          kepada kami. tunggu apalagi? segera hubungi kami
        </p>

        <div className="space-y-6">
          <MacTerminal>
            <div className="space-y-6 py-4">
              <p className="text-gray-500 text-left text-sm">
                Pesan ini akan otomatis di kirim ke whatsapp, pastikan anda
                sudah meng-install aplikasi whatsapp
              </p>
              <input
                ref={senderName}
                type="text"
                className="bg-gray-200 w-full rounded-md py-3 px-6 text-sm text-gray-600"
                placeholder="nama"
              />
              <input
                ref={senderAddress}
                type="text"
                className="bg-gray-200 w-full rounded-md py-3 px-6 text-sm text-gray-600"
                placeholder="alamat"
              />
              <input
                ref={senderBusiness}
                type="text"
                className="bg-gray-200 w-full rounded-md py-3 px-6 text-sm text-gray-600"
                placeholder="usaha"
              />
              <textarea
                ref={senderMessege}
                type="text"
                className="bg-gray-200 w-full rounded-md py-3 px-6 text-sm text-gray-600"
                placeholder="pesan"
              />
              <button
                onClick={handleMessege}
                className="w-full py-2 rounded-md bg-secondary text-center text-white text-sm"
              >
                Kirim
              </button>
            </div>
          </MacTerminal>
          <MacTerminal>
            <div className="py-4 text-gray-500 text-sm text-left space-y-4">
              <p>WhatsApp : +62 5589 55488 55</p>
              <p>Email : statistik@pamekasankab.go.id</p>
              <p>
                Lokasi : Jl. Darma No.12, Taman, Lawangan Daya, Kec. Pademawu,
                Kabupaten Pamekasan, Jawa Timur 69323
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3958.6998424832036!2d113.4927466!3d-7.1606578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd77deedfa7e05b%3A0xf65af701caa3372c!2sKantor%20DISPORAPAR%20Kab.%20Pamekasan!5e0!3m2!1sen!2sid!4v1728703419630!5m2!1sen!2sid"
              className="border-none rounded-md w-full mt-4 h-[450px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MacTerminal>
        </div>
      </section>
    </div>
  );
}
