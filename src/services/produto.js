import api from "../api/api";

class ProdutoService {
  async getAllProduto() {
    const response = await api.get("/produto/");
    return response.data;
  }
  async saveProduto(produto) {
    const response = await api.post("/produto/", produto);
    return response.data;
  }
  async deleteProduto(produto) {
    const response = await api.delete(`/produto/${produto.id}/`);
    return response.data;
  }
}

export default new ProdutoService();
