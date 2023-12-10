import api from "../api/api";

class GrupoService {
  async getAllGrupos() {
    const response = await api.get("/grupoprodutos/");
    return response.data;
  }
}
export default new GrupoService();
