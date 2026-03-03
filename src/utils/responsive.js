// Responsive utility functions and breakpoints

export const breakpoints = {
  sm: '640px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

// Hook to detect screen size
export const useScreenSize = () => {
  const [screenSize, setScreenSize] = React.useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    ...screenSize,
    isMobile: screenSize.width < 768,
    isTablet: screenSize.width >= 768 && screenSize.width < 1024,
    isDesktop: screenSize.width >= 1024,
    isLarge: screenSize.width >= 1280
  };
};

// Responsive class generator
export const responsive = {
  // Container classes
  container: 'w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  
  // Grid classes
  grid: {
    cols1: 'grid grid-cols-1',
    cols2: 'grid grid-cols-1 md:grid-cols-2',
    cols3: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    cols4: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  },
  
  // Flex classes
  flex: {
    col: 'flex flex-col',
    row: 'flex flex-row',
    center: 'flex items-center justify-center',
    between: 'flex items-center justify-between'
  },
  
  // Spacing classes
  spacing: {
    section: 'py-8 sm:py-12 lg:py-16',
    component: 'p-4 sm:p-6 lg:p-8',
    gap: 'gap-4 sm:gap-6 lg:gap-8'
  },
  
  // Text classes
  text: {
    h1: 'text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold',
    h2: 'text-xl sm:text-2xl lg:text-3xl font-semibold',
    h3: 'text-lg sm:text-xl lg:text-2xl font-medium',
    body: 'text-sm sm:text-base',
    small: 'text-xs sm:text-sm'
  }
};

// Mobile-first responsive utilities
export const mobile = {
  // Hide on mobile
  hide: 'hidden md:block',
  // Show only on mobile
  only: 'block md:hidden',
  // Mobile-specific padding
  padding: 'p-4 md:p-6 lg:p-8',
  // Mobile-specific margins
  margin: 'm-4 md:m-6 lg:m-8'
};