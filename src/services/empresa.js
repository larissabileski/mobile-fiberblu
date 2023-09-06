import api from '../src/api'

class EmpresaService {
  async getAllEmpresa() {
    const response = await api.get('/empresas/')
    return response.data
  }
  async saveEmpresa(empresa) {
    const response = await api.post('/empresas/', Empresa)
    return response.data
  }
  async deleteEmpresa(empresa) {
    const response = await api.delete(`/empresas/${empresa.id}/`)
    return response.data
  }
}

export default new EmpresaService()