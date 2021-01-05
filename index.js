const {getTrends, client} = require('./twitter')



const start = async () => {
    try {
        const trends = await getTrends(1939753)
        console.log(trends)
        const tweet = await client.post('statuses/update', {
            status: `سلام تويتر بوت ${trends[0]}`
        })
        console.log(tweet)
    } catch (error) {
        
    }
    
}


start()