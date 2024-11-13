import { Data } from "@lucid-evolution/lucid"


const DatumSchema = Data.Object({
    campaign_id: Data.Integer(),
    title: Data.Bytes(),
    goal: Data.Integer(),
    creator: Data.Bytes(),
    deadline: Data.Integer(),
});
export type CFDatum = Data.Static<typeof DatumSchema>;
export const CFDatum = DatumSchema as unknown as CFDatum;