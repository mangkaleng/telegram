oenEmail(10);
      await delay(10000);
      const register = await functionRegister(emel, item);
      const email = emel + "@" + item;
      await console.log(
        "[" +
          " " +
          moment().format("HH:mm:ss") +
          " " +
          "]" +
          " " +
          "Membuat Email..."
      );
      if (register === 0) {
        await console.log(
          "[" +
            " " +
            moment().format("HH:mm:ss") +
            " " +
            "]" +
            " " +
            "Sukses register dengan email :" +
            " " +
            `${email}`
        );
        const createMail = await functionCreateEmail(emel, item);
        await console.log(
          "[" +
            " " +
            moment().format("HH:mm:ss") +
            " " +
            "]" +
            " " +
            "Mengambil Token..."
        );
        await delay(120000);
        const message = await functionGetMessages(emel, item);

        if (message === undefined) {
          console.log(
            "[" +
              " " +
              moment().format("HH:mm:ss") +
              " " +
              "]" +
              " " +
              "Gagal Mengambil Token..."
          );
          console.log(
            "[" +
              " " +
              moment().format("HH:mm:ss") +
              " " +
              "]" +
              " " +
              "Cek sendiri dan tunggu dalam beberapa menit/jam kedepan :" +
              " " +
              `https://waste.email/main.php?${email}`
          );
          fs.appendFile(
            "result_waste.txt",
            `https://waste.email/main.php?${email} \n`,
            "utf-8"
          );
          console.log(
            "[" +
              " " +
              moment().format("HH:mm:ss") +
              " " +
              "]" +
              " " +
              "Lokasi Link :" +
              " " +
              `result_waste.txt`
          );
          console.log("");
          console.log("");
        } else {
          const getLocation = await functionGetLocation(message);
          // const decodeURL = await decodeURIComponent(getLocation);
          const regex = await new RegExp(/\?(?:code)\=([\S\s]*?)\&/);
          const resGex = await regex.exec(getLocation);
          console.log(
            "[" +
              " " +
              moment().format("HH:mm:ss") +
              " " +
              "]" +
              " " +
              "Proses Verifikasi"
          );
          const veryf = await functionVerification(email, resGex[1]);
          console.log(
            "[" +
              " " +
              moment().format("HH:mm:ss") +
              " " +
              "]" +
              " " +
              "Veryf Sukses"
          );
          console.log("");
          console.log("");
        }
      } else {
        console.log(
          "[" +
            " " +
            moment().format("HH:mm:ss") +
            " " +
            "Email Sudah Terdaftar"
        );
        console.log("");
        console.log("");
      }
    }
  } catch (e) {}
})();
