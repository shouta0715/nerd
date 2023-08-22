import {
  getStatusListLabel,
  getStatusQuery,
  parseStatus,
} from "src/features/request/history/utils";
import { Status_Enum } from "src/gql/graphql";

describe("request/history/utils", () => {
  describe("parseStatus", () => {
    test("pendingの場合はStatus_Enum.Pendingを返す", () => {
      expect(parseStatus("pending")).toBe(Status_Enum.Pending);
    });

    test("approvedの場合はStatus_Enum.Approvedを返す", () => {
      expect(parseStatus("approved")).toBe(Status_Enum.Approved);
    });

    test("rejectedの場合はStatus_Enum.Rejectedを返す", () => {
      expect(parseStatus("rejected")).toBe(Status_Enum.Rejected);
    });

    test("allの場合はallを返す", () => {
      expect(parseStatus("all")).toBe("all");
    });

    test("undefineの場合はallを返す", () => {
      expect(parseStatus(undefined)).toBe("all");
    });
  });

  describe("getStatusListLabel", () => {
    test("pendingの場合は審査中を返す", () => {
      expect(getStatusListLabel(Status_Enum.Pending)).toBe("審査中");
    });

    test("approvedの場合は承認済みを返す", () => {
      expect(getStatusListLabel(Status_Enum.Approved)).toBe("承認済み");
    });

    test("rejectedの場合は見送りを返す", () => {
      expect(getStatusListLabel(Status_Enum.Rejected)).toBe("見送り");
    });

    test("allの場合は全てを返す", () => {
      expect(getStatusListLabel("all")).toBe("全て");
    });
  });

  describe("getStatusQuery", () => {
    test("Status_Enum.Pendingの場合はpendingを返す", () => {
      expect(getStatusQuery(Status_Enum.Pending)).toBe("pending");
    });

    test("Status_Enum.Approvedの場合はapprovedを返す", () => {
      expect(getStatusQuery(Status_Enum.Approved)).toBe("approved");
    });

    test("Status_Enum.Rejectedの場合はrejectedを返す", () => {
      expect(getStatusQuery(Status_Enum.Rejected)).toBe("rejected");
    });

    test("allの場合はallを返す", () => {
      expect(getStatusQuery("all")).toBe("all");
    });
  });
});
