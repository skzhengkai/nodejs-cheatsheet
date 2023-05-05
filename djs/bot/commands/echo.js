const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('echo')
    .setDescription('echo a string to the chat')
    .addStringOption(option =>
      option.setName('query')
        .setDescription('what do you want the bot to say?')
        .setRequired(true)),
  async execute(interaction) {
    const query = interaction.options.getString('query');

    await interaction.deferReply();
    await interaction.channel.send(query);
    await interaction.editReply({ content: "sent message!" });
  }
}
