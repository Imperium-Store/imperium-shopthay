const { SlashCommandBuilder } = require("discord.js");
const path = require("path");
const config = require(path.join(__dirname, "..", "Config.json"));

module.exports = {
	commandBase: {
		slashData: new SlashCommandBuilder()
			.setName("rpendencia")
			.setDescription("Relatorio pendencia entregue")
			.addStringOption((option) =>
				option
					.setName("idplayerdc")
					.setDescription("id do player (id dc)")
					.setRequired(true)
			)
			.addStringOption((option) =>
				option
					.setName("idplayer")
					.setDescription("id do player (id game)")
					.setRequired(true)
			)
			.addStringOption((option) =>
				option
					.setName("idsolicitacao")
					.setDescription("id de quem solicitou (id dc)")
					.setRequired(true)
			)
			.addStringOption((option) =>
				option
					.setName("itens")
					.setDescription("itens entregues")
					.setRequired(true)
			),
		allowedRoles: ["1254587829720186982", "1268334528120881277"],
		async execute(interaction) {
			const Idplayerdc = interaction.options.getString("idplayerdc");
			const Idplayer = interaction.options.getString("idplayer");
			const Idsolicitacao = interaction.options.getString("idsolicitacao");
			const Itens = interaction.options.getString("itens");

			const messageFormat = `
        ${"```✅ PENDÊNCIA ENTREGUE ✅```"} 

> **ID DO PLAYER:** <@${Idplayerdc}>  ${Idplayer}
> **DISCORD:** ${Idplayerdc}
> **ITENS ENTREGUES:**  

${Itens}

> **SOLICITAÇÃO:**
  <@${Idsolicitacao}>
        `;

			await interaction.reply({
				content: messageFormat,
				ephemeral: false,
			});
		},
	},
};
