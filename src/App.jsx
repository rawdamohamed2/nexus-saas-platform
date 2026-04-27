import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout.jsx'
import LandingPage from '@/pages/LandingPage.jsx'
import FeaturesPage from '@/pages/FeaturesPage.jsx'
import { Toaster } from '@/components/ui/sonner'
import ServicesPage from '@/pages/ServicesPage.jsx'
import PricingPage from '@/pages/PricingPage.jsx'
function App() {
  return (
    <>
      <Toaster position="top-center" richColors />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
