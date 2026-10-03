import "dotenv/config";
import Debug from "debug";
import bcrypt from "bcryptjs";
import { pathToFileURL } from "url";

const debug = Debug("app:hash");

export const hashPassword = async (
  plainPassword: string,
  saltRounds: number
): Promise<string> => {
  // const salt = await bcrypt.genSalt(saltRounds);
  // const hashedPassword = await bcrypt.hash(plainPassword, salt);

  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

  return hashedPassword;
};

async function main() {
  for (let i = 1; i < 16; i++) {
    const hashedPassword = await hashPassword("5678", i);
    debug(`saltRounds=${i}, hash=${hashedPassword}`);
  }
}
// รัน demo เฉพาะตอนสั่งรันไฟล์นี้ตรง ๆ (เช่น `tsx src/utils/hash.ts`) ไม่ใช่ตอนถูก import
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
