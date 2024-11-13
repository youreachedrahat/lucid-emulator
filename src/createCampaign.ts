import { Data, Emulator, EmulatorAccount, LucidEvolution, paymentCredentialOf, validatorToAddress } from "@lucid-evolution/lucid"
import { CFDatum } from "./types";
import { spendingValidator } from "./validators";


export async function createCampaign(account: EmulatorAccount, lucid: LucidEvolution, emulator: Emulator) {
    lucid.selectWallet.fromSeed(account.seedPhrase)
    const datum: CFDatum = {
        campaign_id: BigInt(1),
        title: "666f6f",
        goal: BigInt(100),
        creator: paymentCredentialOf(account.address).hash,
        deadline: BigInt(Date.now() + 777539000)
    }

    const contractAddress = validatorToAddress(lucid.config().network, spendingValidator);
    const tx = await lucid
        .newTx()
        .pay.ToAddressWithData(
            contractAddress,
            { kind: "inline", value: Data.to(datum, CFDatum) },
            { lovelace: 5_000_000n }
        )
        .complete();

    const signedTx = await tx.sign.withWallet().complete();
    const txHash = await signedTx.submit();
    console.log("txHash:# ",txHash);
    console.log("------------------------------------------");
    console.log("tx:", tx)
    emulator.awaitBlock(1)
    const allUTxOs = await lucid.utxosAt(contractAddress);
    console.log("------------------------------------------");
    console.log("utxo: ", allUTxOs)
}