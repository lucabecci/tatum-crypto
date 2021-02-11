const { generateAddressFromXPub, Currency } = require("@tatumio/tatum")
const { default: axios } = require("axios")

const GetBalance = async(search) => {   
    for (let i = 0; i < 3; i++) {
        //get balance
        const resp = await axios.get(
            `https://api-eu1.tatum.io/v3/ledger/account/${search.data[i].id}/balance`, {
                headers:{
                    'X-api-key': process.env.TALUM_KEY
                }
            }
        )
        console.log({
            accountID: search.data[i].id,
            balance: resp.data
        })
    }
}

const CreateAddress = async(data) => {
    console.log(data[0].id)
    const resp = await axios.post(
        `https://api-eu1.tatum.io/v3/offchain/account/${data[0].id}/address?index=3`, {
            headers:{
                'X-api-key': process.env.TALUM_KEY
            }
        }
    )
    console.log(resp.data)
}

const AssignAddress = async (address, acc) => {
    // console.log(address)
    // console.log(acc)
    // const resp = await axios.get(
    //     `https://api-eu1.tatum.io/v3/offchain/account/${acc.id}/address/${address}`, {
    //         headers:{
    //             'X-api-key': process.env.TALUM_KEY
    //         }
    //     }
    // )
    // console.log(resp.data)
}
module.exports = {
    GetBalance,
    CreateAddress,
    AssignAddress
}