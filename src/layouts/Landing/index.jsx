import { Outlet } from 'react-router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Landing = () => {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  )
}

export default Landing