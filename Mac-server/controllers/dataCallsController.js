import * as service from '../services/dataCallsService.js';

export function getDataCalls(req, res) {
    service.getDataCalls(req, res);
}

export function findByprovince(req, res) {
    service.findByprovince(req, res);
}

