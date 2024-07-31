const { SlashCommandBuilder } = require("discord.js");
const path = require("path");
const config = require(path.join(__dirname, "..", "Config.json"));

module.exports = {
  commandBase: {
    slashData: new SlashCommandBuilder()
      .setName("transpilecod")
      .setDescription("Reorganizar codigo")
      .addStringOption((option) =>
        option
          .setName("url")
          .setDescription(
            "Padrão: https://pt.imvu.com/catalog/products_in_scene.php?avatar235322788=13830796%..."
          )
          .setRequired(true)
      ),
    allowedRoles: ["1268334528120881277"],
    async execute(interaction) {
      const url = interaction.options.getString("url");
      const avatar = url.match(/avatar\d+=\d+/);
      const room = url.match(/&room=\d+/);
      const removeUrlAndAvatar = url.split(
        `https://pt.imvu.com/catalog/products_in_scene.php?${url.match(
          /avatar\d+=\d+/
        )}`
      )[1];
      const removeRoomUrl = removeUrlAndAvatar.replace(/&room=\d+/, "");
      const splitCod = removeRoomUrl.split("%3B");

      const addCommandInCod = splitCod.map((cod) => {
        return `*use ${cod}`;
      });

      await interaction.reply({
        content: `${addCommandInCod
          .slice(1)
          .map((cod) => "```" + cod + "```\n")
          .join("")}`,
      });
      await interaction.followUp({
        content: `## Codigo Avatar:\n ${
          "```" + avatar + "```"
        }\n## Codigo Room:\n ${"```" + room + "```"}`,
      });
    },
  },
};
