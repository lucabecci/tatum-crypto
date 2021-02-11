const { default: axios } = require('axios');

const CreateAccount = async (xpub, search) => {
    let user = {
        currency: 'LTC',
        xpub: `${xpub}`,
        customer: {
            accountingCurrency: 'USD',
            customerCountry: 'US',
            externalId: '1',
            providerCountry: 'US'
        },
        compliant: false,
        accountCode: 'AC_1011_B',
        accountingCurrency: 'USD',
        accountNumber: '1'
    }
    if(search.data.length < 3){
        console.log('Creating accounts....')
        for(let i = 0; i <= 2; i++){
            user.accountNumber = [i+1] + ""
            user.externalId = [i+1] + ""
            try{
                const resp = await axios.post('https://api-eu1.tatum.io/v3/ledger/account', 
                user, {
                    headers: {
                        'x-api-key': process.env.TALUM_KEY
                    }
                })
            }
            catch(e){
                console.log("error to create account", e)
                break;
            }
        }
        console.log('Accounts created')
        return 
    }else {
        console.log('Accounts already created')
        search.data.forEach(s => {
            console.log(s.id)
        });
        return
    }

    
}

module.exports = {
    CreateAccount
}