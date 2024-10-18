require('dotenv').config()
const freeclimbSDK = require('@freeclimb/sdk')

const accountId = process.env.ACCOUNT_ID
const apiKey = process.env.API_KEY
const configuration = freeclimbSDK.createConfiguration({ accountId, apiKey })
const freeclimb = new freeclimbSDK.DefaultApi(configuration)

getMembers(queueId).then(members => {
  console.log('got queue members', members)
}).catch(err => {
  console.log(err)
})

async function getMembers(queueId) {
  const members = []

  let response = await freeclimb.listMembers()
  members.push(...response.queueMembers)

  while (response.nextPageUri) {
    response = await freeclimb.getNextPage(response)
    members.push(...response.queueMembers)
  }
  return members
}