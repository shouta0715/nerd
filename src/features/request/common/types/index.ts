import {
  Input,
  maxLength,
  minLength,
  nullable,
  object,
  string,
  url,
} from "valibot";

export const RequestSchema = object({
  work_title: string([
    minLength(1, "作品名を入力してください"),
    maxLength(100),
  ]),
  work_url: nullable(
    string([
      (input, info) => {
        if (!input) return input;

        return url("正しいURLを入力してください。")(input, info);
      },
    ])
  ),
  work_description: nullable(string([maxLength(1000)])),
});

export type Request = Input<typeof RequestSchema>;
