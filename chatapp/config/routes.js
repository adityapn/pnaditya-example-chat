var chatRoutes = {
    '/' : {
         controller: 'main',
         action: 'index'
    },
    '/signup' : {
         controller: 'main',
         action: 'signup'
    },
    '/login' : {
         controller: 'main',
         action: 'login'
    },
    '/chat' : {
         controller: 'main',
         action: 'chat'
    }
};

module.exports.routes = chatRoutes;