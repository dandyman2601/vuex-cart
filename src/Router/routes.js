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
    }
]

export default routes;

