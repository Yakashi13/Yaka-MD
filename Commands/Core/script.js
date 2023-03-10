const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "script",
    alias: ["repo","sc","sourcecode"],
    desc: "Say hello to bot.",
    react: "š",
    category: "Core",
    
     start: async(Miku, m,{pushName,prefix}) => {
        let picURL = fs.readFileSync('./Page/yaka.jpg')
        let repoInfo = await axios.get('https://api.github.com/repos/Yakashi13/Yaka-MD')
        let repo = repoInfo.data
        let txt = `      ā­ļø *| Y A K A  B O T's Script |* ā­ļø\n\n*š Total Forks:* ${repo.forks_count}\n*ā­ Total Stars:* ${repo.stargazers_count}\n*š License:* ${repo.license.name}\n*š Repo Size:* ${(repo.size/1024).toFixed(2)} MB\n*š Last Updated:* ${repo.updated_at}\n\n*š Repo Link:*\n${repo.html_url}\n\nā Thanks For Using *Y A K A - M D.* ā\n\n*Ā©ļø ššššššš - 2023*`
        await Miku.sendMessage(m.from,{image:picURL, caption:txt},{quoted:m});
    }
}
