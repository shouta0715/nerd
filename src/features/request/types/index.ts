import { z } from "zod";

export const RequestSchema = z.object({
  work_title: z
    .string()
    .nonempty({ message: "作品名を入力してください" })
    .min(1, {
      message: "作品名を入力してください",
    })
    .max(100),

  work_url: z.nullable(
    z.string().url({ message: "正しいURLを入力してください。" })
  ),
  work_description: z.nullable(z.string().min(0).max(1000)),
});

export type Request = z.infer<typeof RequestSchema>;
