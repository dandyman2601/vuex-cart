import Player from '../components/Home/Player.vue'
import Payment from '../components/Home/Payment.vue'
import Home from '../components/Home/Home.vue'

const routes = [

    {   path: '/player',
        component: Player,
        name:'player'
    },
    {   
        path: '/payment',
        component: Payment,
        name:'payment'
    },
    {   
        path: '/home',
        component: Home,
        name:'home'
    },
    {   
        path: '/counter/:name/:id',
        component: () => import('../components/Home/Counter.vue'),
        name:'counter'
    },
    {   
        path: '/cart',
        component: () => import('../components/Home/Cart.vue'),
        name:'cart'
    },
    {   
        path: '/binding',
        component: () => import('../components/binding/Main.vue'),
        name:'binding'
    },
    {   
        path: '/css',
        component: () => import('../components/Home/Css.vue'),
        name:'CSS'
    }
]

export default routes;

