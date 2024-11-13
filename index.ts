import { Emulator, generateEmulatorAccount, Lucid, Parameters, paymentCredentialOf } from "@lucid-evolution/lucid";
import { createCampaign } from "./spend";

export const accountA = generateEmulatorAccount({ lovelace: 12_001_000_000n })
export const accountB = generateEmulatorAccount({ lovelace: 12_001_000_000n })
export const accountC = generateEmulatorAccount({ lovelace: 12_001_000_000n })
export const accountD = generateEmulatorAccount({ lovelace: 12_001_000_000n })
export const accountE = generateEmulatorAccount({ lovelace: 12_001_000_000n })
export const accountF = generateEmulatorAccount({ lovelace: 12_001_000_000n })
export const accountG = generateEmulatorAccount({ lovelace: 12_001_000_000n })

const emulator = new Emulator(
    [accountA, accountB, accountC, accountD, accountE, accountF, accountG]
)

export async function startContractExe() {
    console.clear()
    console.log("-------------------------Start Emulation-------------------------")
    console.log("accountA", accountA.address)
    const lucid = await Lucid(emulator, "Custom")


    emulator.awaitBlock(2)
    // emulator.awaitSlot(2)
    // emulator.awaitTx("")
    await createCampaign(accountA, lucid, emulator)

}

await startContractExe()