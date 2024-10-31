import { Link } from "react-router-dom"
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb"
import TableThree from "../components/Tables/TableThree"


function DataPendidikan() {
  return (
    <div className="space-y-4">
      <Breadcrumb pageName="Data Pendidikan" />
      <div className="flex justify-end">
        <Link to="addData/" className="py-2 px-4 rounded-md bg-primary text-white mt-2" >Tambah Data</Link>
      </div>
      <TableThree columns={["Nama", "Tempat Tanggal Lahir", "Alamat Terakhir", "Pendidika Terakhir"]} data={[["Alvin Setya Pranata", "Pamekasan, 24 April 2005", "Jl. Jembatan Baru, no 85", "SMK/SMA Sederajat"]]}/>
    </div>
  )
}

export default DataPendidikan