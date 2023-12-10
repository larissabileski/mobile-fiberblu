import api from "../api/api";

class CategoriaProdutoService {
  async getAllCategoriaProdutos() {
    const response = await api.get("/categoriaprodutos/");
    return response.data;
  }
}
export default new CategoriaProdutoService();
