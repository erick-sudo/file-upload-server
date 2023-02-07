const express = require('express')
const cors = require('cors')
const multiparty = require('multiparty')
const fs = require('fs')

const bp = require('body-parser')

const app = express()

app.use(express.static('public'))
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(cors())

const port = 4000

app.post("/files", (req, res) => {
    logAccess(req.method, req.path)

    const form = new multiparty.Form()

    form.parse(req, (err, fields, files) => {
        const uploadedFiles = files.myfiles

        for(let file of uploadedFiles) {
            let newPath = "./public/images"+file.originalFilename
            readeAndWriteFile(file, newPath)
        }
    })

    function readeAndWriteFile(singleFile, newPath) {
        fs.readFile(singleFile.path, (err, data) => {
            fs.writeFile(newPath, data, (err) =>{
                if(err) console.log("Error writing!!!", err)
            })
        })
    }

})

app.get("/", (req, res) =>  {
    logAccess(req.method, req.path)
    res.sendFile('home.html', {root: "./public"})
})


app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})


function logAccess(method, path) {
    console.log(`${method.padEnd(9)}${path.slice(0,25).padEnd(35,".")}`)
}
