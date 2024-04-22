// npm install --save-dev chalk@^3.0.0 ora@^4.1.0 scp2@^0.5.0
import client from "scp2";
import ora from "ora";
import chalk from "chalk";

const spinner = ora("正在发布到服务器...");

const config = {
  host: "121.199.73.224",
  port: 22,
  username: "root",
  password: "GAgaxin123.",
  path: "/www/wwwroot/www.lvgongjiang.com/",
};

spinner.start();
client.scp("dist/", config, (err) => {
  if (!err) {
    spinner.stop();
    console.log(chalk.green("项目发布成功.\n"));
  } else {
    console.log(err);
    console.log(chalk.red("项目发布失败.\n"));
  }
});
