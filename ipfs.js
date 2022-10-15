document.querySelector('#file').addEventListener('change', upload)
document.querySelector('#fileMetaData').addEventListener('change', uploadMetaData)

async function upload() {
    const fileReader = new FileReader()
    // Read file as ArrayBuffer
    console.log(document.getElementById("file").value)
    console.log(event.target.files[0])
    await fileReader.readAsArrayBuffer(event.target.files[0])
    //  Listen for the onload event
   
    fileReader.onload = async (event) => {            
        const node = await Ipfs.create({repo: 'ok' + Math.random()})
        // upload the file content
        console.log(fileReader.result)
        let { path } = await node.add(fileReader.result)
        
        console.log(path);
        document.getElementById("ipfsImage").value = "https://ipfs.io/ipfs/" + path ;
        console.log("https://ipfs.io/ipfs/" +path );
    }
}

async function uploadMetaData() {
    const fileReader = new FileReader()
    // Read file as ArrayBuffer
    console.log(document.getElementById("fileMetaData").value)
    console.log(event.target.files[0])
    await fileReader.readAsArrayBuffer(event.target.files[0])
    //  Listen for the onload event
   
    fileReader.onload = async (event) => {            
        const node = await Ipfs.create({repo: 'ok' + Math.random()})
        // upload the file content
        console.log(fileReader.result)
        let { path } = await node.add(fileReader.result)
        
        console.log(path);
        document.getElementById("ipfsMetaData").value = "https://ipfs.io/ipfs/" + path ;
        console.log("https://ipfs.io/ipfs/" +path );
    }
}

async function setMetaData(){
    const NFT = {
                "attributes": [
                    {
                    "trait_type": "Score",
                    "value": ""
                    },
                    {
                    "trait_type": "Rows",
                    "value": ""
                    }
                ],
                "description": "I love HK",
                "image": "IPFS image url",
                "name": "NFT"
                };
    
    NFT.name = document.getElementById("filename").value;
    NFT.description = document.getElementById("desc").value;
    NFT.image = document.getElementById("ipfsImage").value;
    NFT.attributes[0].value = document.getElementById("filescore").value;
    NFT.attributes[1].value = document.getElementById("fileraws").value;

    JSON.stringify(NFT);
    download(JSON.stringify(NFT), "NFT_transcript_data.json", "text/plain");
}

function download(content, fileName, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function onDownload(){
    download(JSON.stringify(jsonData), "NFTcustomData.json", "text/plain");
}

