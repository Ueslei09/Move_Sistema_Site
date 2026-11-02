// src/modules/home/composables/useAboutForm.js
import { ref } from 'vue'
import { aboutFormService } from '../services/aboutFormService'

export function useAboutForm() {
  const formData = ref(aboutFormService.getData())
  
  const formState = ref({
    name: '',
    email: ''
  })

  function handleSubmit() {
    // Aqui você pode integrar com sua API ou serviço de email
    console.log('Formulário enviado:', formState.value)
    alert('Obrigado por se inscrever!')
    formState.value.name = ''
    formState.value.email = ''
  }

  return {
    formData,
    formState,
    handleSubmit
  }
}