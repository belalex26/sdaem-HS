import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

interface MainLayoutProps {
  title?: string,
  children: any
}

const MainLayout = ({ children, title = 'Sdayem' }: MainLayoutProps) => {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}

export default MainLayout;