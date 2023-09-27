import api from '../api/api'

class EmpresaService {
  async getAllEmpresa() {
    const response = await api.get("/empresa/");
    return response.data;
  }
  async saveEmpresa(empresa) {
    const response = await api.post("/empresa/", empresa);
    return response.data;
  }

}

export default new EmpresaService();
