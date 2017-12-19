const NodeService = require('../../services/common/node-service');
export let ApiService = 'http://localhost:3000/api/';
if (NodeService.isProduction()) {
    ApiService = 'https://quoctho.herokuapp.com/api/';
}
