import { z } from "zod";

export const InputStateSchema = z.object({
  content: z.string().min(1, "入力してください").max(100),
  episode_id: z.string().uuid(),
  time: z.number().int().min(0),
});
