import React from 'react'
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb'
import { Link } from 'react-router-dom'
import TableThree from '../components/Tables/TableThree'

function OrganizationData() {
  return (
    <div className='space-y-4'>
        <Breadcrumb pageName='Data Organisasi'/>
        <div className="flex justify-end">
        <Link to="addData/" className="py-2 px-4 rounded-md bg-primary text-white mt-2" >Tambah Data</Link>
      </div>
      <TableThree columns={["Nama Organisasi", "Nama Ketua", "Alamat", "Jumlah Anggota"]} data={[["Blizbyteco", "Alvin Setya Pranata", "JL. Jembatan Baru", "3"]]} />
    </div>
  )
}

export default OrganizationData