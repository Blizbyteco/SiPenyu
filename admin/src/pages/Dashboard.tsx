import CardData from '../components/CardData'
import ChartOne from '../components/Charts/ChartOne'
import ChartThree from '../components/Charts/ChartThree'
import TableThree from '../components/Tables/TableThree'

function Dashboard() {
  return (
    <div className='space-y-4'>
    <div className="flex gap-4 2xl:gap-7.5">
      <CardData title='Jumlah Pemuda' total='161.563' />
      <CardData title='Jumlah Pendidikan' total='161.563' />
      <CardData title='Jumlah Organisasi' total='161.563' />
      <CardData title='Jumlah kewirausahaan' total='161.563' />
    </div>

    <ChartOne />
    
    <ChartThree />

    <TableThree />
    </div>
  )
}

export default Dashboard