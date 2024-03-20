import { ColorModeContext, useMode} from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './pages/global/Topbar';
import Dashboard from './pages/dashboard/index';
import Sidebar from './pages/global/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Team from './pages/team';
import Contacts from './pages/contacts';
import Invoices from './pages/invoices';




function App() {
  const [theme, colorMode] = useMode()
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Sidebar />
          <main className='content'>
             <Topbar />
             <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
            {/*  <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calender" element={<Calender />} /> */}
             </Routes>
          </main>
        </div>
      </ThemeProvider>
     
    </ColorModeContext.Provider>
  
  );
}

export default App;
