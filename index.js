const Discord = require('discord.js');
 client = new Discord.Client();
 client.once('ready', () => { 	console.log('Ready!');
 	let statuses = [
 		'with shander',
 		'with ronak'
 		]
 		 setInterval(function() {
 		 	let status = statuses[Math.floor(Math.random() * statuses.length)];
 		 	client.user.setActivity(status, {type: "PLAYING"}); 		 	
 		 }, 5000)
 });
 
client.on('message', message => {
	if(message.content === 'k!avatar')
	{	       message.reply(message.author.avatarURL)
 }
 })
 
 client.on('message', message => {
 	if(message.content === 'k!doggy')
 	{
 		const attachment = new Discord.Attachment ('https://cdn.discordapp.com/attachments/610786191175843842/627076689478025226/Screenshot_2019-09-27-15-08-04-529_com.google.android.googlequicksearchbox.png')
 			message.channel.send(attachment)
 	}
 	})
 	
 	client.on('message', message => {
 	if(message.content === 'k!abhinew')
 	{
 		const attachment = new Discord.Attachment ('https://cdn.discordapp.com/attachments/636252281196773407/636521727010275358/IMG-20191023-WA0004.jpg')
 			message.channel.send(attachment)
 	}
 	})
 	
 	client.on('message', message => {
	if(message.content === 'Hi')
	{
			       message.reply('Hello!')
 }
 })
   
 client.on('message', message => {
	if(message.content === 'am i right?')
	{
			       message.reply('yes u are,sir')
 }
 })
 
client.on('message', message => {
 if(message.content.startsWith('k!dm')
 ){
let content = message.content
content = content.replace ('k!dm', '').subString(12)
let user = message.mentions.roles.first().members.forEach((member) => {
   member.send(content).catch()
})
message.delete().catch()
}
})

 client.on('message', message => {
 if(message.content.startsWith('k!say')
 ){
let content = message.content
content = content.replace ('k!say', '')
message.channel.send(content)
message.delete().catch()
}

	});
client.login('NjI2MDM4NjQyMjg4MDk5MzM4.Xa8OgQ.MVMoHxe_bqpfzGA7pv7Dyjopd88')