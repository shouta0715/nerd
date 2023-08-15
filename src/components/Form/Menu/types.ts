// export const usernameSchema = z.object({
//   username: z.string().min(1).max(20),
// });

import { Input, maxLength, minLength, object, string } from "valibot";

export const usernameSchema = object({
  username: string([minLength(1), maxLength(20)]),
});

export type Username = Input<typeof usernameSchema>;
