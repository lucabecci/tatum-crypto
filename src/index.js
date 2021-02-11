const Tatum = require('@tatumio/tatum');
const { default: axios } = require('axios');
require("dotenv/config")

const {CreateAccount} = require('./account')
const {GetBalance, CreateAddress,AssignAddress} = require('./balanceService')
async function main(){
    const ltcWallet = await Tatum.generateWallet(Tatum.Currency.LTC, false);
    const search = await axios.get('https://api-eu1.tatum.io/v3/ledger/account?pageSize=3', {
        headers:{
            'X-api-key': process.env.TALUM_KEY
        }
    })
    await CreateAccount(ltcWallet.xpub, search)
    await GetBalance(search)
    await CreateAddress(search.data)
    // await AssignAddress()
}


//TALUM_KEY="42d59d92-4365-45ee-a8dc-82a460e96a84"
main()