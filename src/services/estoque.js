import api from '../api/api'

class EstoqueService {
    async getAllProdutos(){
        const response = await api.get('/produtos/')
        return response.data
    }
    async saveProduto(produto){
        const response = await api.post('/produtos/', produto)
        return response.data
    }
}

export default new EstoqueService();