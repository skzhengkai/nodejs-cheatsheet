# random-djs
a bunch of random discord.js snippets that i made because i couldnt find them on the web

__list all guilds and their owners__

```js
const Guilds = client.guilds.cache.map(guild => guild.id);
Guilds.forEach(async guildId => {
    const guild = await client.guilds.cache.get(guildId);
    const owner = await guild.fetchOwner();
    console.log(`Guild: ${guild.name}, Owner: ${owner.user.tag}`);
});
```

__return if timed out or no permissions to send messages__
```js
if (!message.channel.permissionsFor(message.guild.members.me).has(PermissionFlagsBits.SendMessages) || message.guild.members.me.isCommunicationDisabled()) {
  console.log("cannot send messages");
  return;
}
```
__leave all guilds by a specific username__
```js
const Guilds = client.guilds.cache.map(guild => guild.id);
Guilds.forEach(async guildId => {
  const guild = await client.guilds.cache.get(guildId);
  const owner = await guild.fetchOwner();
  if (owner.user.tag === 'Wumpus#0000') {
    await guild.leave();
    console.log(`Left guild ${guild.name} owned by ${owner.user.tag}`);
  } else {
    console.log(`Skipped guild ${guild.name} owned by ${owner.user.tag}`);
  }
});
```
__is webhook valid?__ (true = yes, valid. false = no, not valid.)
```js
function testWebhook(webhookURL) {
  return new Promise((resolve, reject) => {
    const req = https.request(webhookURL, { method: 'HEAD' }, (res) => {
      if (res.statusCode === 200) {
        resolve(true);
      } else {
        resolve(false);
      }
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.end();
  });
}
```
