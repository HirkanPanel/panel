import { z } from "zod";
export declare const jsonValueSchema: z.ZodType<unknown>;
export declare const jsonObjectSchema: z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>;
export declare const tagSchema: z.ZodString;
export declare const portSchema: z.ZodNumber;
export declare const inboundPortSchema: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
//# sourceMappingURL=shared.d.ts.map