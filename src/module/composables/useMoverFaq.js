// src/modules/home/composables/useMoverFaq.js
import { ref } from 'vue'
import { moverFaqService } from '../services/moverFaqService'

export function useMoverFaq() {
  const faqData = ref(moverFaqService.getFaqData())

  const toggleFaq = (index) => {
    faqData.value.faqs[index].isOpen = !faqData.value.faqs[index].isOpen
  }

  return {
    faqData,
    toggleFaq
  }
}