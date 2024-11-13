import { applyDoubleCborEncoding, MintingPolicy } from "@lucid-evolution/lucid"
import cfMint from "../compiled/mint.json" with {type: "json"}


const Mint: MintingPolicy = {
    script: applyDoubleCborEncoding(cfMint.cborHex),
    type: "PlutusV3"
}