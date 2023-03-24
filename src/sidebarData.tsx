type SideBarData = {
  title: string;
  meta_data: {
    href: string;
    text: string;
    iconSrc: string;
  }[];
}[];

import briefCase from "../../../assets/sideMenu/briefcase.svg";
import users from "./assets/sideMenu/user-friends.svg";
import user from "./assets/sideMenu/users.svg";
import loans from "./assets/sideMenu/loans.svg";
import decisionModels from "./assets/sideMenu/decision-models.svg";
import savings from "./assets/sideMenu/savings.svg";
import loanRequests from "./assets/sideMenu/loan-requests.svg";
import whiteList from "./assets/sideMenu/white-list.svg";
import karma from "./assets/sideMenu/karma.svg";
import organization from "./assets/sideMenu/organization.svg";
// import loanProducts from "./assets/sideMenu/loan-request.svg";
import savingProducts from "./assets/sideMenu/savings-product.svg";
import feesNCharges from "./assets/sideMenu/fees-and-charges.svg";
import transactions from "./assets/sideMenu/transactions.svg";
import services from "./assets/sideMenu/services.svg";
import serviceAccount from "./assets/sideMenu/service-account.svg";
import settlments from "./assets/sideMenu/settlements.svg";
import reports from "./assets/sideMenu/reports.svg";
import settings from "./assets/sideMenu/settings.svg";
import help from "./assets/sideMenu/help.svg";
import logout from "./assets/sideMenu/logout.svg";
import preference from "./assets/sideMenu/preferences.svg";
import feesNcharges from "./assets/sideMenu/fees-and-charges.svg";
import auditLogs from "./assets/sideMenu/audit-and-logs.svg";

const data: SideBarData = [
  {
    title: "Customers",
    meta_data: [
      {
        href: "/dashboard/users",
        text: "Users",
        iconSrc: users,
      },

      {
        href: "/dashboard/guarantors",
        text: "Guarantors",
        iconSrc: users,
      },
      {
        href: "/dashboard/loans",
        text: "Loans",
        iconSrc: loans,
      },
      {
        href: "/dashboard/decisionModels",
        text: "Decision Models",
        iconSrc: decisionModels,
      },
      {
        href: "/dashboard/savings",
        text: "Savings",
        iconSrc: savings,
      },
      {
        href: "/dashboard/loanRequests",
        text: "Loan Requests",
        iconSrc: loanRequests,
      },
      {
        href: "/dashboard/whiteList",
        text: "White List",
        iconSrc: whiteList,
      },
      {
        href: "/dashboard/karma",
        text: "Karma",
        iconSrc: karma,
      },
    ],
  },

  {
    title: "BUSINESSES",
    meta_data: [
      {
        href: "/dashboard/organization",
        text: "Organization",
        iconSrc: organization,
      },
      {
        href: "/dashboard/loanProducts",
        text: "Loan Products",
        iconSrc: loanRequests,
      },
      {
        href: "/dashboard/savingProducts",
        text: "Saving Products",
        iconSrc: savingProducts,
      },
      {
        href: "/dashboard/feesNCharges",
        text: "Fees & Charges",
        iconSrc: feesNCharges,
      },
      {
        href: "/dashboard/transactions",
        text: "Transactions",
        iconSrc: transactions,
      },
      {
        href: "/dashboard/services",
        text: "Services",
        iconSrc: services,
      },
      {
        href: "/dashboard/serviceAccount",
        text: "Service Account",
        iconSrc: serviceAccount,
      },
      {
        href: "/dashboard/settlments",
        text: "Settlements",
        iconSrc: settlments,
      },
      {
        href: "/dashboard/reports",
        text: "Reports",
        iconSrc: reports,
      },
    ],
  },

  {
    title: "SETTINGS",
    meta_data: [
      {
        href: "dashboard/preferences",
        text: "Preferences",
        iconSrc: preference,
      },
      {
        href: "dashboard/auditNlogs",
        text: "Audit & Logs",
        iconSrc: auditLogs,
      },
    ],
  },
];

export default data;
