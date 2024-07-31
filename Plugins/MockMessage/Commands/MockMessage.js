const { SlashCommandBuilder } = require("discord.js");
const path = require("path");
const config = require(path.join(__dirname, "..", "Config.json"));

module.exports = {
  commandBase: {
    slashData: new SlashCommandBuilder()
      .setName("generatemsg")
      .setDescription("[STAFF] Mostra os resultados de um staff"),
    allowedRoles: ["1254587829720186982"],
    async execute(interaction) {
      let numMsg = 1000;

      async function startTimer(numberOfLogs, interval) {
        let count = 0;

        const sendMessage = async () => {
          if (count < numberOfLogs) {
            // await interaction.followUp(
            //   `# TICKET EXEMPLO ${
            //     count + 1
            //   } \nRESOLVIDO POR: <@579769867289362452>`
            // );

            //             await interaction.followUp(`
            // **RELATÓRIO DE ADV/BAN**

            // **DENUNCIADO:** n/a |
            // **PUNIÇÃO:** <@&1254562579804721183>
            // **TICKET:** ${count + 1}
            // **RESULTADO:** Aprovado
            // **MOTIVO:** teste
            // **ITENS LOOTEADOS:** teste x1
            // teste x2
            // **MULTA POR LOOT INDEVIDO:** R$ 999999
            // **RESOLVIDO POR:** <@579769867289362452>
            // **APROVADO POR:** <@579769867289362452>
            // **PROVAS:** sla
            //               `);

            await interaction.followUp(`
> **ID:** n/a
> **TICKET:** n/a
> **MOTIVO:** n/a
> **RESULTADO:** NEGADO
> **NEGADO POR:** <@579769867289362452>
              `);

            count++;
            setTimeout(sendMessage, interval);
          } else {
            await interaction.followUp("Finished logging.");
          }
        };

        sendMessage();
      }

      await interaction.reply({
        content: `Enviando mensagens`,
        ephemeral: true,
      });

      startTimer(numMsg, 50);
    },
  },
};
