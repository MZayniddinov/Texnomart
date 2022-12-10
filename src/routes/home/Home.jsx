
//components
import BannerDesktop from "../../components/banner-desktop/BannerDesktop"
import BannerMobile from "../../components/banner-mobile/BannerMobile"
import BrandsSlider from "../../components/brands-slider/BrandsSlider"
import CatalogSlider from "../../components/catalog-slider/CatalogSlider"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Main from "../../components/main/Main"

const Home = () => {
  return (
    <>
      <Header/>
      <BannerDesktop/>
      <BannerMobile/>
      <BrandsSlider/>
      <CatalogSlider/>
      <Main/>
      <Footer/>
    </>
  )
}

export default Home