import { ZodSchema, z } from "zod";

export function validate<T extends ZodSchema>(
  target: unknown,
  schema: T
): asserts target is z.infer<T> {
  schema.parse(target);
}
