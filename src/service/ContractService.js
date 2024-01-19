import $api from "../plugins/axios";

export default {
    createContract(newContract, userEmail) {
        return $api.post(`/contract/create`, { contract: newContract, userEmail: userEmail })
    },
    getAll() {
        return $api.post('/contract/get-all')
    },
    addContractEmail(body) {
        return $api.put('/contract/add-contract-email', body)
    }
}