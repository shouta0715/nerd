/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { ZodSchema, z } from "zod";

//! アロー関数の場合、型推論がうまくいかないので、function で書く

export function validate<T extends ZodSchema>(
  target: unknown,
  schema: T
): asserts target is z.infer<T> {
  schema.parse(target);
}
