import { Route, Routes } from 'react-router-dom'
import GardenScreen from './screens/GardenScreen'
import OnboardingScreen from './screens/OnboardingScreen'
import PlantScreen from './screens/PlantScreen'
import DiagnosticCaptureScreen from './screens/DiagnosticCaptureScreen'
import DiagnosticResultScreen from './screens/DiagnosticResultScreen'
import AlertsScreen from './screens/AlertsScreen'
import NotificationPreviewScreen from './screens/NotificationPreviewScreen'
import VacationScreen from './screens/VacationScreen'
import PlantSitterSheetScreen from './screens/PlantSitterSheetScreen'
import HomeProfileScreen from './screens/HomeProfileScreen'
import ParasiteScreen from './screens/ParasiteScreen'
import GuidesListScreen from './screens/GuidesListScreen'
import GuideViewerScreen from './screens/GuideViewerScreen'
import HistoryScreen from './screens/HistoryScreen'
import PostMortemScreen from './screens/PostMortemScreen'
import './App.css'

function App() {
  return (
    <div className="app-viewport">
      <Routes>
        <Route path="/" element={<GardenScreen />} />
        <Route path="/onboarding" element={<OnboardingScreen />} />
        <Route path="/vacances" element={<VacationScreen />} />
        <Route path="/plant-sitter/:token" element={<PlantSitterSheetScreen />} />
        <Route path="/logement" element={<HomeProfileScreen />} />
        <Route path="/guides" element={<GuidesListScreen />} />
        <Route path="/guides/:symptomId" element={<GuideViewerScreen />} />
        <Route path="/plants/:plantId" element={<PlantScreen />} />
        <Route path="/plants/:plantId/diagnostic" element={<DiagnosticCaptureScreen />} />
        <Route path="/plants/:plantId/diagnostic/resultat" element={<DiagnosticResultScreen />} />
        <Route path="/plants/:plantId/alertes" element={<AlertsScreen />} />
        <Route path="/plants/:plantId/notification" element={<NotificationPreviewScreen />} />
        <Route path="/plants/:plantId/parasites" element={<ParasiteScreen />} />
        <Route path="/plants/:plantId/historique" element={<HistoryScreen />} />
        <Route path="/plants/:plantId/post-mortem" element={<PostMortemScreen />} />
      </Routes>
    </div>
  )
}

export default App
