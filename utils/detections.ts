// title: Detections
// description: A collection of detections for common data types

/**
 * Detect the current device type (Mobile or Desktop)
 * @example detectDevice()
 * @returns `Mobile` or `Desktop`
 */
export function detectDevice(): string {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
}

/**
 * Detect the device OS (iOS, Android, Windows, etc.)
 * @example detectDeviceType()
 * @returns `iOS`, `Android`, `Windows`, `Mac`, `Linux`, `UNIX`, or `Unknown`
 */
export function detectDeviceType(): string {
  return navigator.userAgent
}

/**
 * Detects the user's browser based on the user agent string.
 * @example detectBrowser()
 * @returns A string representing the detected browser.
 */
export function detectBrowser(): string {
  return navigator.userAgent.toLowerCase()
}

/**
 * Detect if the browser window is currently active or hidden.
 * @example detectActiveBrowser()
 */
export function detectActiveBrowser(): boolean {
  return !document.hidden
}

/**
 * Detect the current color scheme
 * @example detectColorScheme()
 */
export function detectColorScheme(): string {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/**
 * Detect the current operating system
 * @example `getOS()`
 */
export function detectOS(): string {
  const userAgent = navigator.userAgent.toLowerCase()
  switch (true) {
    case userAgent.indexOf('win') !== -1:
      return 'Windows'
    case userAgent.indexOf('mac') !== -1:
      return 'Mac'
    case userAgent.indexOf('linux') !== -1:
      return 'Linux'
    case userAgent.indexOf('x11') !== -1:
      return 'UNIX'
    default:
      return 'Unknown'
  }
}

/**
 * Detect the current browser language
 * @example detectBrowserLanguage()
 */
export function detectBrowserLanguage(): string {
  return navigator.language
}

/**
 * Detect the current user's location
 * @example detectUserLocation()
 */
export function detectGeolocation(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

/**
 * Detect the current user's Timezone
 * @example detectUserTimezone()
 */
export function detectUserTimezone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone
}

/**
 * Detect the currect device orientation
 * @example detectDeviceOrientation()
 */
export function detectDeviceOrientation(): string {
  return window.screen.orientation.type
}

/**
 * Detect the current device motion
 * @example detectDeviceMotion()
 */
export function detectDeviceMotion(): Promise<DeviceMotionEvent> {
  return new Promise((resolve, reject) => {
    window.addEventListener('devicemotion', resolve, { once: true })
    setTimeout(reject, 5000)
  })
}

/**
 * Detect the browser's window size
 * @example detectWindowSize()
 */
export function detectWindowSize(): { width: number; height: number } {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}

/**
 * Detect the screen or monitor size
 * @example detectScreenSize()
 */
export function detectScreenSize(): { width: number; height: number } {
  return {
    width: window.screen.width,
    height: window.screen.height
  }
}

/**
 * Detect the container size via ID
 * @example detectContainerSize('container')
 */
export function detectContainerSize(id: string): { width: number; height: number } {
  const element = document.getElementById(id)
  if (!element) return { width: 0, height: 0 }
  return {
    width: element.offsetWidth,
    height: element.offsetHeight
  }
}

/**
 * Detect the current breakpoint based on Tailwind CSS breakpoints
 * @example detectTailwindBreakpoint()
 */
export function detectTailwindBreakpoint(): string {
  const width = window.innerWidth
  switch (true) {
    case width < 640:
      return 'xs'
    case width < 768:
      return 'sm'
    case width < 1024:
      return 'md'
    case width < 1280:
      return 'lg'
    case width < 1536:
      return 'xl'
    default:
      return '2xl'
  }
}

/**
 * Detect the current container breakpoint based on Tailwind CSS breakpoints
 * @example detectTailwindContainerBreakpoint('container')
 */
export function detectTailwindContainerBreakpoint(id: string): string {
  const width = getContainerSize(id).width
  switch (true) {
    case width < 320:
      return '@xs'
    case width < 384:
      return '@sm'
    case width < 448:
      return '@md'
    case width < 512:
      return '@lg'
    case width < 576:
      return '@xl'
    case width < 672:
      return '@2xl'
    case width < 768:
      return '@3xl'
    case width < 896:
      return '@4xl'
    case width < 1024:
      return '@5xl'
    case width < 1152:
      return '@6xl'
    case width < 1280:
      return '@7xl'
    default:
      return '@7xl'
  }
}

/**
 * Detect the current scroll position of the window
 * @example detectScrollPosition()
 */
export function detectScrollPosition(): { x: number; y: number } {
  return {
    x: window.scrollX,
    y: window.scrollY
  }
}

/**
 * Detect the current mouse position within the window
 * @example detectMousePosition(event)
 */
export function detectMousePosition(event: MouseEvent) {
  return {
    x: event.pageX,
    y: event.pageY
  }
}

/**
 * Detect the current mouse position within a container via ID
 * @example detectRelativeMousePosition('container', event)
 */
export function detectRelativeMousePosition(id: string, e: MouseEvent) {
  const element = document.getElementById(id)
  if (!element) return { x: 0, y: 0 }
  const rect = element.getBoundingClientRect()
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  }
}

/**
 * Detect the current network status of the user (Online or Offline)
 * @example detectNetworkStatus()
 */
export function detectNetworkStatus(): string {
  return navigator.onLine ? 'Online' : 'Offline'
}

/**
 * Detect the current memory status of the user (RAM)
 * @example detectMemoryStatus()
 */
export function detectMemoryStatus(): { totalJSHeapSize: number; usedJSHeapSize: number; jsHeapSizeLimit: number } {
  return {
    totalJSHeapSize: (performance as any).memory.totalJSHeapSize,
    usedJSHeapSize: (performance as any).memory.usedJSHeapSize,
    jsHeapSizeLimit: (performance as any).memory.jsHeapSizeLimit
  }
}

/**
 * Detect the current performance status of the user (CPU, RAM, etc.)
 * @example detectPerformance()
 */
export function detectPerformance(): Promise<PerformanceNavigationTiming> {
  return new Promise((resolve, reject) => {
    window.addEventListener('load', () => {
      resolve(performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming)
    })
    setTimeout(reject, 5000)
  })
}

/**
 * Detect the current storage status of the user (Local Storage, Session Storage)
 * @example detectStorage()
 */
export function detectStorage(): { localStorage: number; sessionStorage: number } {
  return {
    localStorage: JSON.stringify(localStorage).length,
    sessionStorage: JSON.stringify(sessionStorage).length
  }
}

/**
 * Returns a cookie value by name
 * @example detectCookie('name')
 */
export function detectCookie(name: string) {
  const value = '; ' + document.cookie
  const parts = value.split('; ' + name + '=')
  if (parts.length === 2) return parts.pop()?.split(';').shift()
}

/**
 * Returns a local storage value by name and parses it into JSON
 * @example detectLocalStorage('name')
 */
export function detectLocalStorage(name: string) {
  const item = localStorage.getItem(name)
  if (item) return JSON.parse(item)
}

/**
 * Returns a session storage value by name and parses it into JSON
 * @example detectSessionStorage('name')
 */
export function detectSessionStorage(name: string) {
  const item = sessionStorage.getItem(name)
  if (item) return JSON.parse(item)
}

/**
 * Returns a value from the URL by name
 * @example detectURLParameters('http://url.com/page?name=Adam&surname=Smith')
 */
export function detectURLParameters(url: string, param?: string) {
  const params = (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a: any, v: any) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a), {})

  if (param) {
    return params[param] || null
  }

  return params
}

/**
 * Returns a value from the URL hash by name
 * @example detectURLHashParameters()
 */
export function detectURLHashParameters() {
  return getURLParameters(window.location.hash)
}

/**
 * Retrieves and returns the parameters from the URL search query string
 * @example detectURLSearchParameters()
 */
export function detectURLSearchParameters() {
  return getURLParameters(window.location.search)
}

/**
 * Returns the current URL
 * @example detectURL()
 */
export function detectURL() {
  return window.location.href
}

/**
 * Returns the current domain
 * @example detectDomain()
 */
export function detectDomain() {
  return window.location.hostname
}

/**
 * Returns the current IP address
 * @example detectIP()
 */
export function detectIP() {
  return window.location.host
}

/**
 * Returns the current port
 * @example detectPort()
 */
export function detectPort() {
  return window.location.port
}

/**
 * Returns the current protocol (HTTP or HTTPS)
 * @example detectProtocol()
 */
export function detectProtocol() {
  return window.location.protocol
}

/**
 * Returns the URL of the referring page (the page that linked to the current page)
 * @example detectReferrer()
 */
export function detectReferrer() {
  return document.referrer
}

/**
 *  Retrieves cached entries and optionally filters the entries based on a provided key
 * @example detectCachedData('abc')
 */
export function detectCachedData(key?: string): PerformanceEntry[] {
  const cachedData = window.performance.getEntriesByType('resource')

  if (key) {
    return cachedData.filter((data) => data.name.includes(key))
  }

  return cachedData
}

// Is it?

/**
 * Detects if the element is currently in the viewport
 * @example isInViewport(element)
 */
export function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

/**
 * Detects if the element is currently in the container via ID
 * @example isInContainer(element, 'container')
 */
export function isInContainer(element: HTMLElement, id: string) {
  const rect = element.getBoundingClientRect()
  const container = document.getElementById(id)
  if (!container) return false
  const containerRect = container.getBoundingClientRect()
  return rect.top >= containerRect.top && rect.left >= containerRect.left && rect.bottom <= containerRect.bottom && rect.right <= containerRect.right
}

/**
 * Detects if the element is overflowing vertically
 * @example isOverflowingY(element)
 */
export function isOverflowingY(element: HTMLElement) {
  return element.scrollWidth > element.clientWidth || element.scrollHeight > element.clientHeight
}

/**
 * Detects if the element is overflowing horizontally
 * @example isOverflowingX(element)
 */
export function isOverflowingX(element: HTMLElement) {
  return element.scrollWidth > element.clientWidth
}

/**
 * Detects if the element is scrollable (overflowing vertically or horizontally)
 * @example isScrollable(element)
 */
export function isScrollable(element: HTMLElement) {
  return isOverflowingY(element) || isOverflowingX(element)
}

/**
 * Detects if the elements is an HTML element
 * @example isElement(element)
 */
export function isElement(element: HTMLElement) {
  return element instanceof HTMLElement
}
