// src/modules/mpro/composables/useMproForm.js
import { ref, reactive } from 'vue'
import { mproFormService } from '../services/mproFormService'

export function useMproForm() {
  const formData = ref(mproFormService.getData())
  
  // Estado reativo para os campos do formulário
  const formState = reactive({
    nome: '',
    email: '',
    telefone: '',
    cidadeEstado: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Lógica de envio do formulário
    console.log('Dados do formulário de revendedor enviados:', formState)
    alert('Mensagem enviada com sucesso! Entraremos em contacto em breve.')
    
    // Limpar campos após envio (opcional)
    Object.keys(formState).forEach(key => {
      formState[key] = ''
    })
  }

  return {
    formData,
    formState,
    handleSubmit
  }
}