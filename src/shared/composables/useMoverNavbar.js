// src/shared/composables/useMoverNavbar.js
import { ref, onMounted, onUnmounted } from 'vue'
import { moverNavbarService } from '../services/moverNavbarService'

export function useMoverNavbar() {
  const navbarData = moverNavbarService.getNavbarData()
  const isMobileMenuOpen = ref(false)
  const isScrolled = ref(false)
  const activeDropdown = ref(null)

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 30
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
  }

  const setDropdown = (index) => {
    activeDropdown.value = index
  }

  const clearDropdown = () => {
    activeDropdown.value = null
  }

  return {
    navbarData,
    isMobileMenuOpen,
    isScrolled,
    activeDropdown,
    toggleMobileMenu,
    closeMobileMenu,
    setDropdown,
    clearDropdown
  }
}