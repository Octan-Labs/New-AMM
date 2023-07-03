import hre from "hardhat";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
    console.log("Verify Token20 Contract ......")
    const Token20 = '';
    const decimals = 18;
    await hre.run("verify:verify", {
      address: Token20,
      constructorArguments: [
        decimals,
        'Tether USD',
        'USDT'
      ],
    });

    console.log('\n===== DONE =====')
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
});