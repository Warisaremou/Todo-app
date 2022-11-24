import { useEffect, useState } from "react";

function MatchMediaWrapper({ mobileBackground, desktopBackground }) {
  const [isNarrowScreen, setIsNarrowScreen] = useState(false)
  useEffect(() => {
    const mediaWatcher = window.matchMedia("(max-width: 768px)")
    setIsNarrowScreen(mediaWatcher.matches);

    function updateIsNarrowScreen(e) {
      setIsNarrowScreen(e.matches);
    }
    if (mediaWatcher.addEventListener) {
      mediaWatcher.addEventListener('change', updateIsNarrowScreen)
      return function cleanup() {
        mediaWatcher.removeEventListener('change', updateIsNarrowScreen)
      }
    } else {
      mediaWatcher.addListener(updateIsNarrowScreen)
      return function cleanup() {
        mediaWatcher.removeListener(updateIsNarrowScreen)
      }
    }
  }, [])

  return isNarrowScreen ? mobileBackground : desktopBackground
}

export default MatchMediaWrapper