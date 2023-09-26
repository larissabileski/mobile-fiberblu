import api from '../api/api'

class EmpresaService {
  async getAllEmpresa() {
    const response = await api.get("/empresa/");
    return response.data;
  }

}

export default new EmpresaService();
