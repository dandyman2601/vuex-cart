

const routes = [
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
]

export default routes;