const routes = [
    {
      path: '/home',
      name: 'home',
      meta: {
        type: 'home',
      },
      component: () => import('../views/Home/Home.vue'),
    },

    {
      path: '/workspace',
      name: 'workspace',
      meta: {
        type: 'workspace',
      },
      component: () => import('../views/WorkSpace/nlp.vue'),
    },

    
  ]
  
  export default routes