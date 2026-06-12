import React, { useState } from 'react'
import { 
  Check, 
  Copy, 
  User, 
  Mail, 
  FileText, 
  Wifi, 
  Key, 
  ArrowLeft, 
  Lock, 
  Coffee, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react'

// Vector Inline SVG of the official Semilla brand icon (circle with stylized S curve)
const SemillaLogoIcon = ({ className }) => (
  <svg 
    viewBox="-3182 1083 179 179" 
    className={className} 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M-3092.67,1259.16c-47.61,0-86.34-38.73-86.34-86.34c0-47.61,38.73-86.34,86.34-86.34 s86.34,38.73,86.34,86.34C-3006.33,1220.43-3045.06,1259.16-3092.67,1259.16z M-3092.67,1095.69 c-42.53,0-77.13,34.6-77.13,77.13c0,42.53,34.6,77.13,77.13,77.13s77.13-34.6,77.13-77.13 C-3015.54,1130.29-3050.14,1095.69-3092.67,1095.69z" />
    <path d="M-3051.18,1200.3l-0.05-1.2c-1.2-17.24-19.41-30.74-41.44-30.74c-16.09,0-29.51-8.45-32.11-19.58 c4.19-2.28,6.93-2.8,6.93-2.8c7.89-1.62,16.29-0.76,23.64,2.42c12,5.19,25.76,5.19,37.76,0l2.55-1.1c1.73-0.75,2.8-2.51,2.67-4.4 c-1.2-17.24-19.41-30.74-41.44-30.74c-22.89,0-41.51,14.6-41.51,32.55c0,0.2,0.01,0.4,0.02,0.6l0.05,1.22 c1.2,17.24,19.41,30.74,41.44,30.74c16.47,0,30.15,8.86,32.28,20.37c-3.43,1.29-7.23,2-7.23,2c-7.93,1.57-16.01,0.71-23.38-2.48 c-12-5.2-25.76-5.2-37.76,0l-2.68,1.16c-1.73,0.75-2.81,2.51-2.68,4.4c1.2,17.24,19.41,30.74,41.44,30.74 c22.89,0,41.51-14.6,41.51-32.55C-3051.17,1200.71-3051.17,1200.5-3051.18,1200.3z M-3092.67,1121.08 c15.95,0,29.31,8.31,32.07,19.41c-9.6,3.96-20.52,3.87-30.07-0.26c-9.15-3.96-19.16-4.99-28.97-2.98 c-1.51,0.27-3.09,0.84-4.52,1.46C-3120.48,1128.58-3107.78,1121.08-3092.67,1121.08z M-3092.67,1224.55 c-15.95,0-29.31-8.31-32.07-19.41c9.64-4.02,20.62-3.95,30.21,0.2c9.03,3.91,18.94,4.97,28.65,3.04c1.28-0.21,3.03-0.79,4.69-1.43C-3064.89,1217.07-3077.58,1224.55-3092.67,1224.55z" />
  </svg>
);

function App() {
  // Navigation State: 'register' | 'instructions'
  const [screen, setScreen] = useState('register')
  const [transitioning, setTransitioning] = useState(false)
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    document: '',
    email: ''
  })
  const [errors, setErrors] = useState({})
  const [currentUser, setCurrentUser] = useState(null)

  // Clipboard success state
  const [copiedStates, setCopiedStates] = useState({
    doorKey: false,
    wifiSsid: false,
    wifiPass: false
  })

  // Smooth screen transition helper
  const navigateTo = (newScreen) => {
    setTransitioning(true)
    setTimeout(() => {
      setScreen(newScreen)
      setTransitioning(false)
    }, 300)
  }

  // Form validations
  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio'
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'El nombre debe tener al menos 3 caracteres'
    }

    if (!formData.document.trim()) {
      newErrors.document = 'El documento es obligatorio'
    } else if (!/^[0-9a-zA-Z-]{5,15}$/.test(formData.document.trim())) {
      newErrors.document = 'Documento inválido (5-15 caracteres alfanuméricos)'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Correo electrónico inválido'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Core Sync Function to Google Sheets via Netlify Backend Proxy Function
  const syncToGoogleSheets = async (logEntry) => {
    try {
      // Direct POST to local Netlify Serverless Function (hides Google Sheets URL from client)
      await fetch('/.netlify/functions/ingress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(logEntry)
      });
      console.log('Log successfully forwarded to secure serverless proxy.');
    } catch (err) {
      console.error('Failed to forward log to secure serverless proxy:', err);
    }
  }

  // Handle Form Submission
  const handleRegister = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    const newRegistration = {
      id: Date.now(),
      name: formData.name.trim(),
      document: formData.document.trim(),
      email: formData.email.trim(),
      timestamp: new Date().toLocaleTimeString('es-CO', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      }),
      date: new Date().toLocaleDateString('es-CO'),
      type: 'Registro completo'
    }

    setCurrentUser(newRegistration)
    navigateTo('instructions')

    // Background sync to Google Sheets (fire-and-forget, non-blocking)
    syncToGoogleSheets(newRegistration)
  }

  // Handle Skip (Bypass) flow
  const handleSkip = () => {
    const guestRegistration = {
      id: Date.now(),
      name: 'Invitado / Anon',
      document: 'N/A',
      email: 'N/A',
      timestamp: new Date().toLocaleTimeString('es-CO', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      }),
      date: new Date().toLocaleDateString('es-CO'),
      type: 'Acceso sin registro'
    }

    setCurrentUser(guestRegistration)
    navigateTo('instructions')

    // Background sync to Google Sheets (fire-and-forget, non-blocking)
    syncToGoogleSheets(guestRegistration)
  }

  // Handle Copy to Clipboard
  const handleCopyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedStates(prev => ({ ...prev, [key]: true }))
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [key]: false }))
      }, 2000)
    })
  }

  // Reset form and return to register
  const handleBackToRegister = () => {
    setFormData({ name: '', document: '', email: '' })
    setErrors({})
    setCurrentUser(null)
    navigateTo('register')
  }

  return (
    <div className="min-h-screen bg-brand-cream-50 flex items-center justify-center p-0 sm:p-4 md:p-6 relative overflow-hidden font-sans">
      {/* Decorative leaf 1 */}
      <img 
        src="/assets/brand/hoja-01.png" 
        alt="" 
        className="absolute -top-12 -left-12 w-48 md:w-64 opacity-15 pointer-events-none select-none" 
      />
      {/* Decorative leaf 2 */}
      <img 
        src="/assets/brand/hoja-02.png" 
        alt="" 
        className="absolute -bottom-16 -right-16 w-56 md:w-80 opacity-15 pointer-events-none select-none" 
      />

      {/* Main mobile viewport container */}
      <div className="w-full sm:max-w-md bg-brand-cream-100 sm:rounded-xl sm:border-[3px] border-brand-forest-800 sm:shadow-lg min-h-screen sm:min-h-[800px] flex flex-col justify-between relative overflow-hidden transition-all duration-300">
        
        {/* Top Header Bar */}
        <header className="bg-brand-forest-800 text-brand-cream-100 py-6 px-6 border-b-2 border-brand-forest-800 flex flex-col items-center justify-center relative">
          <div className="flex items-center gap-3">
            <SemillaLogoIcon className="w-11 h-11 text-brand-gold-500 drop-shadow-sm" />
            <div className="flex flex-col">
              <span className="text-[1.25rem] font-[900] tracking-widest leading-none text-brand-cream-100">SEMILLA</span>
              <span className="text-[0.625rem] font-light tracking-[0.25em] leading-none text-brand-gold-300 mt-1 uppercase">Café & Coworking</span>
            </div>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 px-2 py-0.5 border border-brand-gold-500/30 rounded text-[9px] font-semibold text-brand-gold-300 tracking-wider">
            MED COL
          </div>
        </header>

        {/* Content Area with transitions */}
        <main className={`flex-grow flex flex-col px-6 py-8 transition-opacity duration-300 ${transitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          
          {screen === 'register' ? (
            /* ========================================================
               SCREEN 1: REGISTRATION FLOW
               ======================================================== */
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <div className="text-center mb-6">
                  <h1 className="text-brand-forest-800 text-2xl font-[900] tracking-wider mb-2">INGRESO AL COWORKING</h1>
                  <p className="text-brand-olive-700 text-xs font-medium uppercase tracking-widest">Segundo Piso • Registro de Visitantes</p>
                  <div className="w-12 h-[2px] bg-brand-gold-500 mx-auto mt-3"></div>
                </div>

                <div className="bg-brand-cream-50/50 border border-brand-forest-800/10 rounded-lg p-4 mb-6 text-center">
                  <p className="text-brand-forest-800 text-[13px] font-light leading-relaxed">
                    Para brindarte una mejor experiencia y mantener el espacio seguro, te invitamos a completar tus datos.
                  </p>
                </div>

                <form onSubmit={handleRegister} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest text-brand-forest-800 uppercase mb-1 flex items-center gap-1.5">
                      <User size={12} className="text-brand-gold-500" />
                      Nombre Completo
                    </label>
                    <input 
                      type="text" 
                      placeholder="Ej. Mateo Gómez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3 py-2.5 bg-white border ${errors.name ? 'border-red-500 bg-red-50/30' : 'border-brand-forest-800/20 focus:border-brand-forest-800'} rounded-sm text-brand-forest-800 text-[14px] font-light placeholder-brand-forest-800/40 outline-none transition-all duration-200`}
                    />
                    {errors.name && <p className="text-red-600 text-[11px] mt-1 font-medium">{errors.name}</p>}
                  </div>

                  {/* ID Input */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest text-brand-forest-800 uppercase mb-1 flex items-center gap-1.5">
                      <FileText size={12} className="text-brand-gold-500" />
                      Documento de Identidad
                    </label>
                    <input 
                      type="text" 
                      placeholder="Ej. C.C. o Pasaporte"
                      value={formData.document}
                      onChange={(e) => setFormData({ ...formData, document: e.target.value })}
                      className={`w-full px-3 py-2.5 bg-white border ${errors.document ? 'border-red-500 bg-red-50/30' : 'border-brand-forest-800/20 focus:border-brand-forest-800'} rounded-sm text-brand-forest-800 text-[14px] font-light placeholder-brand-forest-800/40 outline-none transition-all duration-200`}
                    />
                    {errors.document && <p className="text-red-600 text-[11px] mt-1 font-medium">{errors.document}</p>}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest text-brand-forest-800 uppercase mb-1 flex items-center gap-1.5">
                      <Mail size={12} className="text-brand-gold-500" />
                      Correo Electrónico
                    </label>
                    <input 
                      type="email" 
                      placeholder="Ej. mateo@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3 py-2.5 bg-white border ${errors.email ? 'border-red-500 bg-red-50/30' : 'border-brand-forest-800/20 focus:border-brand-forest-800'} rounded-sm text-brand-forest-800 text-[14px] font-light placeholder-brand-forest-800/40 outline-none transition-all duration-200`}
                    />
                    {errors.email && <p className="text-red-600 text-[11px] mt-1 font-medium">{errors.email}</p>}
                  </div>

                  {/* Primary submit action */}
                  <button 
                    type="submit" 
                    className="w-full mt-4 bg-brand-forest-800 hover:bg-brand-forest-700 text-white font-medium py-3 rounded-sm tracking-wider uppercase text-[12px] flex items-center justify-center gap-2 border border-brand-forest-800 shadow-md transition-all duration-300"
                  >
                    Registrar e Ingresar
                    <ChevronRight size={14} />
                  </button>
                </form>
              </div>

              {/* Gold secondary action - Bypass button */}
              <div className="mt-8 text-center border-t border-brand-forest-800/10 pt-6">
                <p className="text-[12px] text-brand-forest-800/60 font-light mb-2">¿Tienes afán o prefieres no registrarte?</p>
                <button 
                  type="button"
                  onClick={handleSkip}
                  className="inline-flex items-center gap-1 px-4 py-2 border border-brand-forest-800/20 rounded hover:bg-brand-cream-50 text-[11px] font-bold tracking-wider uppercase text-brand-forest-800 transition-all duration-200"
                >
                  Continuar sin registro
                  <ChevronRight size={12} />
                </button>
              </div>
            </div>
          ) : (
            /* ========================================================
               SCREEN 2: INSTRUCTIONS VIEW
               ======================================================== */
            <div className="flex-grow flex flex-col justify-between">
              <div>
                {/* Visual Status Indicator */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-brand-forest-800 flex items-center justify-center text-white mb-3 shadow-md border border-brand-gold-500/20">
                    <ShieldCheck size={24} className="text-brand-gold-300" />
                  </div>
                  <h2 className="text-brand-forest-800 text-xl font-[900] tracking-wider uppercase text-center">INGRESO AUTORIZADO</h2>
                  {currentUser && (
                    <p className="text-[11px] text-brand-olive-700 font-light tracking-wide uppercase mt-1">
                      {currentUser.name === 'Invitado / Anon' ? 'Acceso Invitado' : `Hola, ${currentUser.name.split(' ')[0]}`}
                    </p>
                  )}
                  <div className="w-12 h-[2.5px] bg-brand-gold-500 mt-2"></div>
                </div>

                {/* STEPS LIST */}
                <div className="space-y-6">
                  
                  {/* STEP 1: Door Key */}
                  <div className="bg-white border-2 border-brand-forest-800 rounded p-4 relative shadow-sm">
                    <div className="absolute top-4 right-4 bg-brand-forest-800 text-brand-cream-100 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold">
                      1
                    </div>
                    <h3 className="text-[11px] font-bold uppercase tracking-wider text-brand-olive-700 flex items-center gap-2 mb-2">
                      <Lock size={12} className="text-brand-gold-500" />
                      Clave de la Puerta (Door Key)
                    </h3>
                    
                    {/* The code container */}
                    <div className="bg-brand-cream-50 border border-brand-forest-800/10 rounded p-3 my-3 flex items-center justify-between">
                      <code className="text-xl font-bold tracking-widest text-brand-forest-800 select-all">
                        3 OK - 0000 OK
                      </code>
                      <button 
                        onClick={() => handleCopyToClipboard('3 OK - 0000 OK', 'doorKey')}
                        className="p-2 hover:bg-brand-cream-100 rounded text-brand-forest-800 transition-colors duration-200"
                        title="Copiar clave"
                      >
                        {copiedStates.doorKey ? (
                          <span className="text-[10px] font-bold text-brand-forest-800 flex items-center gap-1">
                            <Check size={14} className="text-brand-gold-500" />
                            ¡Copiado!
                          </span>
                        ) : (
                          <Copy size={16} className="text-brand-forest-800/70" />
                        )}
                      </button>
                    </div>

                    <div className="text-[12px] font-light leading-relaxed text-brand-forest-800 space-y-1">
                      <p className="font-medium">Instrucciones del teclado físico:</p>
                      <ol className="list-decimal pl-4 space-y-0.5">
                        <li>Presiona el botón <span className="font-bold">3</span></li>
                        <li>Presiona el botón <span className="font-bold">OK</span></li>
                        <li>Digita el código <span className="font-bold">0000</span></li>
                        <li>Finaliza presionando <span className="font-bold">OK</span></li>
                      </ol>
                    </div>
                  </div>

                  {/* STEP 2: WiFi Access */}
                  <div className="bg-white border border-brand-forest-800/20 rounded p-4 relative shadow-sm">
                    <div className="absolute top-4 right-4 bg-brand-forest-800/10 text-brand-forest-800 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold">
                      2
                    </div>
                    <h3 className="text-[11px] font-bold uppercase tracking-wider text-brand-olive-700 flex items-center gap-2 mb-3">
                      <Wifi size={12} className="text-brand-gold-500" />
                      Conexión Red Wi-Fi
                    </h3>

                    {/* Network SSID */}
                    <div className="flex items-center justify-between border-b border-brand-forest-800/10 pb-2 mb-2">
                      <div>
                        <span className="text-[10px] text-brand-forest-800/50 uppercase tracking-widest font-bold block">RED / Network</span>
                        <span className="text-[14px] font-semibold text-brand-forest-800">semillacoworking</span>
                      </div>
                      <button 
                        onClick={() => handleCopyToClipboard('semillacoworking', 'wifiSsid')}
                        className="px-2 py-1 bg-brand-cream-50 hover:bg-brand-cream-100 border border-brand-forest-800/10 rounded text-[10px] font-bold uppercase text-brand-forest-800 transition-colors"
                      >
                        {copiedStates.wifiSsid ? 'Copiado' : 'Copiar Red'}
                      </button>
                    </div>

                    {/* Network Password */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-brand-forest-800/50 uppercase tracking-widest font-bold block">PASSWORD</span>
                        <span className="text-[14px] font-semibold text-brand-forest-800 font-mono">Semillacoworking2022</span>
                      </div>
                      <button 
                        onClick={() => handleCopyToClipboard('Semillacoworking2022', 'wifiPass')}
                        className="px-2 py-1 bg-brand-cream-50 hover:bg-brand-cream-100 border border-brand-forest-800/10 rounded text-[10px] font-bold uppercase text-brand-forest-800 transition-colors"
                      >
                        {copiedStates.wifiPass ? 'Copiado' : 'Copiar clave'}
                      </button>
                    </div>
                  </div>

                  {/* STEP 3: Coffee Shop Promotion */}
                  <div className="bg-brand-cream-50/50 border border-brand-forest-800/10 rounded p-4 flex items-start gap-3">
                    <Coffee className="text-brand-gold-500 mt-0.5 flex-shrink-0" size={18} />
                    <div className="text-[12px] font-light leading-relaxed text-brand-forest-800">
                      <p className="font-semibold mb-1 text-brand-forest-800">¿Deseas café de especialidad?</p>
                      <p>
                        Visita nuestra barra en el primer piso para ver el menú y ordenar. Puedes llevar tus consumos a tu mesa en el coworking.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Reset view back action */}
              <div className="mt-8 pt-4 border-t border-brand-forest-800/10 text-center">
                <button 
                  onClick={handleBackToRegister}
                  className="inline-flex items-center gap-1.5 text-brand-forest-800 hover:text-brand-gold-700 text-[11px] font-bold tracking-widest uppercase transition-colors"
                >
                  <ArrowLeft size={12} />
                  Volver al Registro
                </button>
              </div>
            </div>
          )}

        </main>

        {/* Footer info / Branding */}
        <footer className="py-6 px-6 border-t border-brand-forest-800/10 text-center bg-brand-cream-50">
          <p className="text-[10px] font-light tracking-[0.2em] text-brand-forest-800/60 uppercase">
            IDEAS THAT GROW BY NATURE • LAURELES
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
