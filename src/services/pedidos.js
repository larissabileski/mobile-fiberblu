import api from "../api/api";

class PedidoService {
  async getAllPedidos() {
    const response = await api.get("/pedido/");
    return response.data;
  }
}
export default new PedidoService();
