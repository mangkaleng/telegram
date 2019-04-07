;
        const domain = eml[0].match(regMail)[0];

        const email = uname + "@" + domain;

        await delay(120000);
        const message = await functionGetMessages(uname, domain);
        console.log(message);

        if (message === undefined) {
          console.log(
            "[" +
              " " +
              moment().format("HH:mm:ss") +
              " " +
              "]" +
              " " +
              "TOKEN EXPIRED / BELUM ADA EMAIL....."
          );
          console.log("");
          console.log("");
        } else {
          if (message == 44) {
            const getLocation = await functionGetLocation(message);

            const regex = await new RegExp(/\?(?:code)\=([\S\s]*?)\&/);
            const regexEm = await new RegExp(/[.\w]+@[\w\-]{3,}(.\w{2,})+/);
            const resGex = await regex.exec(getLocation);
            const resGexEm = await regexEm.exec(getLocation);
            await delay(120000);
            const veryf = await functionVerification(resGexEm[0], resGex[1]);
            // const msg = JSON.parse(veryf).error.status;

            if (JSON.parse(veryf).hasOwnProperty("error")) {
              console.log(
                "[" +
                  " " +
                  moment().format("HH:mm:ss") +
                  " " +
                  "]" +
                  " " +
                  `Email : ${resGexEm[0]}` +
                  " " +
                  "Token Expired"
              );
            } else {
              console.log(
                "[" +
                  " " +
                  moment().format("HH:mm:ss") +
                  " " +
                  "]" +
                  " " +
                  `Email : ${resGexEm[0]}` +
                  " " +
                  "Veryf Sukses"
              );
            }
          } else {
            const decodeURL = await decodeURIComponent(message);

            const regex = await new RegExp(/\?(?:code)\=([\S\s]*?)\&/);
            const regexEm = await new RegExp(
              /([\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4})/
            );
            const resGex = await regex.exec(decodeURL);
            const resGexEm = await regexEm.exec(decodeURL);

            await delay(DelaY);
            const veryf = await functionVerification(resGexEm[0], resGex[1]);
            // const msg = JSON.parse(veryf).error.status;

            if (JSON.parse(veryf).hasOwnProperty("error")) {
              console.log(
                "[" +
                  " " +
                  moment().format("HH:mm:ss") +
                  " " +
                  "]" +
                  " " +
                  `Email : ${resGexEm[0]}` +
                  " " +
                  "Token Expired"
              );
            } else {
              console.log(
                "[" +
                  " " +
                  moment().format("HH:mm:ss") +
                  " " +
                  "]" +
                  " " +
                  `Email : ${resGexEm[0]}` +
                  " " +
                  "Veryf Sukses"
              );
            }
          }
        }
      }
    });
  });
})();
