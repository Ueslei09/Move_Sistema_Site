// src/modules/home/composables/useMoverLead.js
import { ref } from 'vue'
import { moverLeadService } from '../services/moverLeadService'

export function useMoverLead() {
  const leadData = ref(moverLeadService.getLeadData())
  const formData = ref({
    name: '',
    email: ''
  })

  const handleLeadSubmit = () => {
    // Lógica de envio do lead
    console.log('Lead cadastrado:', formData.value)
    alert('Inscrição realizada com sucesso!')
    formData.value.name = ''
    formData.value.email = ''
  }

  return {
    leadData,
    formData,
    handleLeadSubmit
  }
}