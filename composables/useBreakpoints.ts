// Tailwind CSS breakpoints
// sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

export function useBreakpoints() {
  const isDesktop = useState('isDesktop', () => false)
  const isTablet = useState('isTablet', () => false)
  const isMobile = useState('isMobile', () => true)

  const updateBreakpoints = () => {
    const width = window.innerWidth
    isDesktop.value = width >= breakpoints.lg
    isTablet.value = width >= breakpoints.md && width < breakpoints.lg
    isMobile.value = width < breakpoints.md
  }

  onMounted(() => {
    updateBreakpoints()
    window.addEventListener('resize', updateBreakpoints)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateBreakpoints)
  })

  return {
    isDesktop,
    isTablet,
    isMobile,
  }
}

