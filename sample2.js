const data = {
    PC: [{ policyName: 'PC' }]
}

const clone = {
    policyData: [{
        ...data.PC[0],
        policyType: 'PC'
    }]
}

delete data.PC

console.log(clone)