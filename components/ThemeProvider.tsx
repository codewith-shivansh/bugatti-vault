'use client'
import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react'

type Theme = 'dark' | 'light'
interface ThemeCtx { theme: Theme; toggleTheme: () => void }

const ThemeContext = createContext<ThemeCtx>({ theme: 'dark', toggleTheme: () => {} })

export function useTheme() { return useContext(ThemeContext) }

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  const applyTheme = useCallback((t: Theme) => {
    const root = document.documentElement
    if (t === 'light') {
      root.style.setProperty('--col-bg', '#f2f0eb')
      root.style.setProperty('--col-white', '#1a1917')
      root.style.setProperty('--col-white-dim', 'rgba(26,25,23,0.55)')
      root.style.setProperty('--col-white-faint', 'rgba(26,25,23,0.18)')
      root.style.setProperty('--col-chrome', '#5a5750')
      root.style.setProperty('--col-gold', '#8b7340')
      root.style.setProperty('--col-gold-dim', 'rgba(139,115,64,0.4)')
      document.body.style.background = '#f2f0eb'
      document.body.style.color = '#1a1917'
    } else {
      root.style.setProperty('--col-bg', '#080807')
      root.style.setProperty('--col-white', '#f0ede6')
      root.style.setProperty('--col-white-dim', 'rgba(240,237,230,0.5)')
      root.style.setProperty('--col-white-faint', 'rgba(240,237,230,0.15)')
      root.style.setProperty('--col-chrome', '#b8b4ac')
      root.style.setProperty('--col-gold', '#c9a96e')
      root.style.setProperty('--col-gold-dim', 'rgba(201,169,110,0.4)')
      document.body.style.background = '#080807'
      document.body.style.color = '#f0ede6'
    }
  }, [])

  useEffect(() => {
    const saved = localStorage.getItem('bugatti-theme') as Theme | null
    if (saved) { setTheme(saved); applyTheme(saved) }
  }, [applyTheme])

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('bugatti-theme', next)
    applyTheme(next)
  }, [theme, applyTheme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
