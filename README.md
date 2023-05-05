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
