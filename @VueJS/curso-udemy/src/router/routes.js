import Dashboard from '@/views/Dashboard.vue';
import ControleDeProdutos from "@/views/ControleDeProdutos.vue";
import ControleDeClientes from '@/views/ControleDeClientes.vue'
import Login from '@/views/Login.vue'
import Produto from '@/views/Produto.vue'
import ListaProdutoCard from "@/views/ListaProdutoCard.vue"
import router from '.';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        title: 'Login',
        // icon: '', ICON CASO PRECISE DE UM PERSONALIZADO PARA A ROTA
        // META SERVE PARA DEFINIR SE CASO A ROTA NECESSITE DE AUTORIZAÇÃO OU N
        meta: {
            requiredAuth: false
        }
    },
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        title: "Dashboard",
        meta: {
            requiredAuth: true
        }
    },
    {
        path: '/controle-de-produtos',
        name: 'ControleDeProdutos',
        component: ControleDeProdutos,
        title: "Produtos",
        meta: {
            requiredAuth: true
        }
    },
    {
        path: '/controle-de-clientes',
        name: 'ControleDeClientes',
        component: ControleDeClientes,
        title: "Clientes",
        meta: {
            requiredAuth: true
        }
    },
    {
        path: '/controle-de-clientes/novo',
        name: 'NovoProduto',
        component: Produto,
        title: "Adicionar Produto",
        meta: {
            requiredAuth: true
        }
    },
    {
        path: '/controle-de-clientes/editar',
        name: 'EditarProduto',
        component: Produto,
        title: "Editar Produto",
        meta: {
            requiredAuth: true
        }
    },
    {
        path: '/controle-de-produtos/lista-cards',
        name: 'ListaProdutoCards',
        component: ListaProdutoCard,
        title: "Card Produto",
        meta: {
            requiredAuth: true
        }
    },

]

export default routes