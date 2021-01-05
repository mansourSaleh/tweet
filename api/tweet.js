const {getTrends, client} = require('./twitter')

module.exports = async (req, res) => {
    try {
        const tweets = [
            'https://twitter.com/iWaiterMENA/status/1345325479499341826?s=09',
            'https://twitter.com/iWaiterMENA/status/1336687718043160576?s=20',
            'https://twitter.com/iWaiterMENA/status/1336295749777240064?s=20',
            'https://twitter.com/iWaiterMENA/status/1333393805702258688?s=20',
            'https://twitter.com/iWaiterMENA/status/1333393805702258688?s=20',
            'https://twitter.com/iWaiterMENA/status/1333383593926807555?s=20',
            'https://twitter.com/iWaiterMENA/status/1333383241265532928?s=20',
            'https://twitter.com/iWaiterMENA/status/1333381600659210240?s=20',
        ]
        const trends = await getTrends(1939753)
        const n = Math.floor(Math.random() * tweets.length)
        const randomTweet = tweets[n]
        for (let i = 0; i < trends.length; i++) {
            const hash = trends[i];
            const tweet = await client.post('statuses/update', {
                status: `اي ويتر النادل الذكي \n @iwaiterMENA \n  ${randomTweet}  \n \n ${hash}`
            })
        }
        await res.send("Done")
    } catch (error) {
        console.log(error)
        res.send("Error")
    }
}


