import {
  CheckBadgeIcon,
  CheckIcon,
  CloudArrowUpIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
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

export const getStatusColor = (): {
  [key in Status_Enum]: string;
} => {
  return {
    [Status_Enum.Pending]: "text-yellow-700 bg-yellow-50 ring-yellow-600/20",
    [Status_Enum.Approved]: "text-green-700 bg-green-50 ring-green-600/20",
    [Status_Enum.Rejected]: "text-red-700 bg-red-50 ring-red-600/10",
  };
};

type Icon = typeof CheckIcon;

export const getStatusIcon = (): {
  [key in Status_Enum]: Icon;
} => {
  return {
    [Status_Enum.Pending]: CloudArrowUpIcon,
    [Status_Enum.Approved]: CheckBadgeIcon,
    [Status_Enum.Rejected]: XCircleIcon,
  };
};

export const getStatusIconColor = (): {
  [key in Status_Enum]: string;
} => {
  return {
    [Status_Enum.Pending]: "text-amber-600",
    [Status_Enum.Approved]: "text-green-600",
    [Status_Enum.Rejected]: "text-red-600",
  };
};
