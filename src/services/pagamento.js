import api from "../api/api";

class PagamentoService {
  async getAllPagamentos() {
    const response = await api.get("/pagamentos/");
    return response.data;
  }
}
export default new PagamentoService();