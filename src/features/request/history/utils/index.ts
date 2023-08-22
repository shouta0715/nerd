import { Status_Enum } from "src/gql/graphql";

export const parseStatus = (
  status: string | string[] | undefined
): Status_Enum | "all" => {
  switch (status) {
    case "all":
      return "all";
    case "pending":
      return Status_Enum.Pending;
    case "approved":
      return Status_Enum.Approved;
    case "rejected":
      return Status_Enum.Rejected;
    default:
      return "all";
  }
};
export const getStatusListLabel = (status: Status_Enum | "all") => {
  switch (status) {
    case Status_Enum.Pending:
      return "審査中";
    case Status_Enum.Approved:
      return "承認済み";
    case Status_Enum.Rejected:
      return "見送り";
    case "all":
      return "全て";
    default:
      return "";
  }
};

export const getStatusQuery = (status: Status_Enum | "all") => {
  switch (status) {
    case Status_Enum.Pending:
      return "pending";
    case Status_Enum.Approved:
      return "approved";
    case Status_Enum.Rejected:
      return "rejected";
    case "all":
      return "all";
    default:
      return "";
  }
};
