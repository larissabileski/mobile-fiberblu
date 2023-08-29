import api from '../screens/api'

class CategoriaEmpresaService {
  async getAllCategoriaEmpresa() {
    const response = await api.get('/categoriasempresas/')
    return response.data
  }
  async saveCategoriaEmpresa(categoriaempresa) {
    const response = await api.post('/categoriasempresas/', CategoriaEmpresa)
    return response.data
  }
  async deleteCategoriaEmpresa(categoriaempresa) {
    const response = await api.delete(`/categoriasempresas/${categoriaempresa.id}/`)
    return response.data
  }
}

export default new CategoriaEmpresaService()