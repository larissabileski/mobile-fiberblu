import api from "../src/api";

class CategoriaClienteService {
  async getAllCategoriaCliente() {
    const response = await api.get("/categoriasclientes/");
    return response.data;
  }
  async saveCategoriaCliente(categoriacliente) {
    const response = await api.post("/categoriasclientes/", CategoriaCliente);
    return response.data;
  }
  async deleteCategoriaCliente(categoriacliente) {
    const response = await api.delete(
      `/categoriasclientes/${categoriacliente.id}/`
    );
    return response.data;
  }
}

export default new CategoriaClienteService();
