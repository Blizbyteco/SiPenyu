import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"


function OrganizationDetail() {
  return (
    <div className="space-y-4">
        <Breadcrumb pageName="Input Data Pendidikan" paths={["Data Pendidikan /"]} />

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Data Organisasi
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Nama Organisasi
                </label>
                <input
                  type="text"
                  placeholder="Nama"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Nama Ketua
                </label>
                <input
                  type="text"
                  placeholder="<TEMPAT>, <TANGGAL>-<BULAN>-<TAHUN>"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Alamat
                </label>
                <input
                  type="address"
                  placeholder="Alamat terakhir"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Jumlah Anggota
                </label>
                <input
                  type="number"
                  placeholder="Pendidikan Terakhir"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <button className="w-full bg-primary text-center text-white rounded-lg py-3">Tambah Data</button>
            </div>
          </div>
    </div>
  )
}

export default OrganizationDetail