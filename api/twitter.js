const axios = require('axios')
const dotenv = require('dotenv').config()
const Twitter = require('twitter-lite')

const client = new Twitter({
    subdomain: "api", // "api" is the default (change for other subdomains)
    version: "1.1", // version "1.1" is the default (change for other subdomains)
    consumer_key: process.env.TWITTER_API_KEY, // from Twitter.
    consumer_secret: process.env.TWITTER_API_KEY_SECRET, // from Twitter.
    access_token_key: process.env.TWITTER_ACCESS, // from your User (oauth_token)
    access_token_secret: process.env.TWITTER_ACCESS_SECRET // from your User (oauth_token_secret)
});


const getTrends = async (id) => {
    try {
        const res = await axios({
            method: 'GET',
            url: `https://api.twitter.com/1.1/trends/place.json?id=${id}`,
            headers: {
                Authorization: 'Bearer ' + process.env.TWITTER_TOKEN
            }
        })
        if(res.data && res.data[0] && res.data[0].trends){
            let hashes = []
            let num = 0;
            res.data[0].trends.forEach(t => {
                if(t.name.includes("#") && num < 10){
                    hashes.push(t.name)
                    num++
                }
            })
            return hashes;
        }else{
            return []
        }
    } catch (error) {
        console.log(error.response)
        return []
    }
}


module.exports = {getTrends, client}