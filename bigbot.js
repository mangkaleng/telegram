
const bot = new TelegramBot(890754426:AAEzIc6os-kpIyr2VP4PnL9c9MAaJjvHuZU, { polling: true });
const fetch = require("node-fetch");
const cheerio = require("cheerio");
const delay = require("delay");
c(chatId, "");
        } else {
          const decodeURL = await decodeURIComponent(message);
          await delay(60000);
          const regex = await new RegExp(/\?(?:code)\=([\S\s]*?)\&/);

          const resGex = await regex.exec(decodeURL);

          bot.sendMessage(
            chatId,
            "[" +
              " " +
              moment().format("HH:mm:ss") +
              " " +
              "]" +
              " " +
              "Proses Verifikasi"
          );
          const veryf = await functionVerification(email, resGex[1]);
          bot.sendMessage(
            chatId,
            "[" +
              " " +
              moment().format("HH:mm:ss") +
              " " +
              "]" +
              " " +
              "Veryf Sukses"
          );
          bot.sendMessage(chatId, "");
          bot.sendMessage(chatId, "");
        }
      } else {
        bot.sendMessage(chatId, "Email Sudah Terdaftar");
        bot.sendMessage(chatId, "");
        bot.sendMessage(chatId, "");
      }
    }
  })();
});
