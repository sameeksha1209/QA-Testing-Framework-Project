const axios = require('axios');

async function testAPI() {
    try 
    {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

        if (res.status === 200) 
        {
            console.log("✅ API Test Passed");
        } 
        else 
        {
            console.log("❌ API Test Failed");
        }
    } 
    catch (err) 
    {
        console.log("❌ Error:", err.message);
    }
}
testAPI();