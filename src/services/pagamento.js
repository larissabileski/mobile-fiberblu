import api from "../api/api";

class PagamentoService {
  async getAllPagamento() {
    const response = await api.get("/pagamento/");
    return response.data;
  }
}

export default new PagamentoService();