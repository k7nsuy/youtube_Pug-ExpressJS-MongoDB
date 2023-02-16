import express from 'express'

const app = express()
const PORT = 3333

 


const handHome = (req,res,nex) => {
    console.log(req);
    res.end()
}

app.get('/', handHome)


const handleListening = () => {
    console.log(`This server is running on port 3333✅`);
}
app.listen(PORT, handleListening)