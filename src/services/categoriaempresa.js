import api from "../api/api";

class CategoriaEmpresaService {
  async getAllCategoriaEmpresas() {
    const response = await api.get("/categoriaempresas/");
    return response.data;
  }
}
export default new CategoriaEmpresaService();
