import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  CardContainer,
  ContentContainer,
  FlexColumn,
  FlexRow,
  OutlineButton,
} from "../../style";
import useFetchId from "../../hooks/useFetchId";
// import profile from "../../assets/users/usser-details.svg";
import { Rating } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AppContext from "../../context";
import LoadingGear from "../loading";
import "./index.scss";
import UserData from "../../model/interface/data";

const UserDetails: React.FC = () => {
  const { loading } = React.useContext(AppContext);
  const { id } = useParams();
  const { data }: any = useFetchId(id);
  const navigate = useNavigate();
  const [isTabActive, setIsTabActive] = React.useState<number>(0);

  return (
    <ContentContainer>
      {loading ? (
        <LoadingGear />
      ) : (
        <React.Fragment>
          <FlexRow
            gap="1"
            justifyContent="flex-start"
            cursor="pointer"
            onClick={() => navigate(-1)}
            className="user_details_back"
          >
            <KeyboardBackspaceIcon />
            <p>Back to Users</p>
          </FlexRow>
          <FlexRow justifyContent="space-between" wrap="wrap" bottomMargin="2">
            <p className="user_details_title">User Details</p>
            <FlexRow gap="1" width="100%" wrap="wrap" className="btn_wrap">
              <OutlineButton
                topPadding="0.5"
                bottomPadding="0.5"
                color="#E4033B"
              >
                BLACKLIST USER
              </OutlineButton>
              <OutlineButton
                topPadding="0.5"
                bottomPadding="0.5"
                color="#39CDCC"
              >
                ACTIVATE USER
              </OutlineButton>
            </FlexRow>
          </FlexRow>

          <CardContainer
            className="user_details_card"
            rightPadding="2"
            leftPadding="2"
            bottomPadding="0"
            topPadding="2"
          >
            <FlexRow gap="5" wrap="wrap" justifyContent="center">
              <div className="img_wrapper wrapper">
                <img
                  src={data?.profile?.avatar}
                  alt="user_img"
                  height="90px"
                  width="50px"
                />
              </div>
              <FlexColumn width="max-content" className="wrapper divider-y">
                <p className="user_details_name">
                  {data?.profile?.firstName} {data?.profile?.lastName}
                </p>

                <p className="user_details_number">{data?.accountNumber}</p>
              </FlexColumn>

              <FlexColumn className="divider-y wrapper">
                <p className="user_details_rating">User's Tier</p>
                <Rating name="simple-controlled" value={1} />
              </FlexColumn>

              <FlexColumn className="wrapper divider-y">
                <p className="user_details_balance">
                  &#8358;
                  {data?.accountBalance}
                </p>
                <p className="user_details_num">{data?.accountNumber}</p>
              </FlexColumn>
            </FlexRow>

            {/* user details tab panel */}
            <FlexRow
              gap="1"
              className="user_details_tab"
              topMargin="2"
              justifyContent="flex-start"
              alignItems="center"
              wrap="wrap"
            >
              <div
                className={`${
                  isTabActive == 0 ? "active" : ""
                } user_details_tab_link`}
                onClick={() => setIsTabActive(0)}
              >
                <p>General Details</p>
              </div>
              <div
                className={`${
                  isTabActive == 1 ? "active" : ""
                } user_details_tab_link`}
                onClick={() => setIsTabActive(1)}
              >
                <p>Documents</p>
              </div>
              <div
                className={`${
                  isTabActive == 2 ? "active" : ""
                } user_details_tab_link`}
                onClick={() => setIsTabActive(2)}
              >
                <p>Bannk Details</p>
              </div>
              <div
                className={`${
                  isTabActive == 3 ? "active" : ""
                } user_details_tab_link`}
                onClick={() => setIsTabActive(3)}
              >
                <p>Loans</p>
              </div>
              <div
                className={`${
                  isTabActive == 4 ? "active" : ""
                } user_details_tab_link`}
                onClick={() => setIsTabActive(4)}
              >
                <p>Savings</p>
              </div>
              <div
                className={`${
                  isTabActive == 6 ? "active" : ""
                } user_details_tab_link`}
                onClick={() => setIsTabActive(6)}
              >
                <p>App and Sytem</p>
              </div>
            </FlexRow>
          </CardContainer>

          {/* Personal Information section */}
          <CardContainer
            rightPadding="2"
            leftPadding="2"
            topPadding="2"
            bottomPadding="2"
          >
            <div className="divider-x">
              <p className="card_details_title">Personal Information</p>

              <FlexRow
                justifyContent="flex-start"
                alignItems="flex-start"
                className="card_personal_wrap"
                wrap="wrap"
              >
                <div className="col">
                  <p>FULL NAME</p>
                  <span>
                    {data?.profile?.firstName} {data?.profile?.lastName}
                  </span>
                </div>
                <div className="col">
                  <p>PHONE NUMBER</p>
                  <span>{data?.profile?.phoneNumber}</span>
                </div>
                <div className="col">
                  <p>EMAIL ADDRESS</p>
                  <span>{data?.email}</span>
                </div>
                <div className="col">
                  <p>BVN</p>
                  <span>{data?.profile?.bvn}</span>
                </div>
                <div className="col">
                  <p>GENDER</p>
                  <span>{data?.profile?.gender}</span>
                </div>
                <div className="col">
                  <p>MARITAL STATUS</p>
                  <span>Married</span>
                </div>
                <div className="col">
                  <p>CHILDREN</p>
                  <span>None</span>
                </div>
                <div className="col">
                  <p>TYPE OF RESIDENCE</p>
                  <span>Apartment</span>
                </div>
              </FlexRow>
            </div>

            {/* Education and Emmployment */}

            <div className="divider-x">
              <p className="card_details_title">Education and Employment</p>

              <FlexRow
                justifyContent="flex-start"
                alignItems="flex-start"
                className="card_personal_wrap"
                wrap="wrap"
              >
                <div className="col">
                  <p>LEVEL OF EDUCATION</p>
                  <span>{data?.education?.level}</span>
                </div>
                <div className="col">
                  <p>EMPLOYMENT STATUS</p>
                  <span>{data?.education?.employmentStatus}</span>
                </div>
                <div className="col">
                  <p>SECTOR OF EMPLOYMENT</p>
                  <span>{data?.education?.sector}</span>
                </div>
                <div className="col">
                  <p>DURATION OF EMPLOYMENT</p>
                  <span>{data?.education?.duration}</span>
                </div>
                <div className="col">
                  <p>OFFICE EMAIL</p>
                  <span>{data?.education?.officeEmail}</span>
                </div>
                <div className="col">
                  <p>MONTHLY INCOME</p>
                  <span>
                    &#8358;
                    {data?.education?.monthlyIncome[0]} - &#x20A6;
                    {data?.education?.monthlyIncome[1]}
                  </span>
                </div>
                <div className="col">
                  <p>LOAN REPAYMENT</p>
                  <span>&#8358;{data?.education?.loanRepayment}</span>
                </div>
              </FlexRow>
            </div>

            {/* Socials */}

            <div className="divider-x">
              <p className="card_details_title">Socials</p>

              <FlexRow
                justifyContent="flex-start"
                alignItems="flex-start"
                className="card_personal_wrap"
                wrap="wrap"
              >
                <div className="col">
                  <p>TWITTER</p>
                  <span>{data?.socials?.twitter}</span>
                </div>
                <div className="col">
                  <p>FACEBOOK</p>
                  <span>{data?.socials?.facebook}</span>
                </div>
                <div className="col">
                  <p>INSTAGRAM</p>
                  <span>{data?.socials?.instagram}</span>
                </div>
              </FlexRow>
            </div>

            {/* GUARANTOR */}

            <div>
              <p className="card_details_title">Guarantor</p>

              <FlexRow
                justifyContent="flex-start"
                alignItems="flex-start"
                className="card_personal_wrap"
                wrap="wrap"
              >
                <div className="col">
                  <p>FULL NAME</p>
                  <span>
                    {data?.guarantor?.firstName} {data?.guarantor?.lastName}
                  </span>
                </div>
                <div className="col">
                  <p>PHONE NUMBER</p>
                  <span>{data?.guarantor?.phoneNumber}</span>
                </div>
                <div className="col">
                  <p>EMAIL ADDRESS</p>
                  <span>{data?.guarantor?.address}</span>
                </div>
                <div className="col">
                  <p>RELATIONSHIP</p>
                  <span>SISTER</span>
                </div>
              </FlexRow>
            </div>
          </CardContainer>
        </React.Fragment>
      )}
    </ContentContainer>
  );
};

export default UserDetails;
