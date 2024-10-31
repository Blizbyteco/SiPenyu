import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './pages/Dashboard'
import DataPendidikan from './pages/DataPendidikan';
import PendidikanDetail from './pages/Details/PendidikanDetail';
import OrganizationData from './pages/OrganizationData';
import OrganizationDetail from './pages/Details/OrganizationDetail';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/education"
          element={
            <>
              <PageTitle title="SiPenyuMuda | Data Pendidikan" />
              <DataPendidikan />
            </>
          }
        />
         <Route
            path="/education/addData"
            element={
              <>
                <PageTitle title="SiPenyuMuda | Data Pendidikan" />
                <PendidikanDetail />
              </>
            }
          />
         
        <Route
          path="/organization"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <OrganizationData />
            </>
          }
        />
        <Route
          path="/organization/addData"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <OrganizationDetail />
            </>
          }
        />
       
      </Routes>
    </DefaultLayout>
  );
}

export default App;
