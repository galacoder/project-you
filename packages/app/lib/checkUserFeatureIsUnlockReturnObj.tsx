// import { useRecoilValue } from "recoil";
// import { currentUserNumDataStoreQuery } from "../atoms/UserNum";

export default function checkUserFeatureIsUnlockReturnObj(userNumInfo: any) {
  // const userNum = useRecoilValue(currentUserNumDataStoreQuery);
  // const foundUserNumInfo = userNum.filter((item) => item.id === userId);
  const userNumFeatureUnlockedDetails: {
    1: boolean;
    2: boolean;
    3: boolean;
    4: boolean;
    5: boolean;
  } = {
    //CategoryID = 1 is isRulingNumberPaid
    //CategoryID =2 is isOuterExpNumPaid
    //CategoryID = 3 is isSoulUrgePaid
    //CategoryID = 4 is isPersonalYearPaid
    //CategoryID = 5 is isFengShuiPaid
    1: userNumInfo.isRulingNumberPaid,
    2: userNumInfo.isOuterExpNumPaid,
    3: userNumInfo.isSoulUrgePaid,
    4: userNumInfo.isPersonalYearPaid,
    5: userNumInfo.isFengShuiPaid,
  };
  return userNumFeatureUnlockedDetails;
}

// export default function checkUserFeatureIsUnlockReturnObj([userNumInfo]) {
//   // const userNum = useRecoilValue(currentUserNumDataStoreQuery);
//   // const foundUserNumInfo = userNum.filter((item) => item.id === userId);
//   const userNumFeatureUnlockedDetails: {
//     1: boolean;
//     2: boolean;
//     3: boolean;
//     4: boolean;
//     5: boolean;
//   } = userNumInfo.map((item) => {
//     return {
//       //CategoryID = 1 is isRulingNumberPaid
//       //CategoryID = 2 is isOuterExpNumPaid
//       //CategoryID = 3 is isSoulUrgePaid
//       //CategoryID = 4 is isPersonalYearPaid
//       //CategoryID = 5 is isFengShuiPaid
//       1: item.isRulingNumberPaid,
//       2: item.isOuterExpNumPaid,
//       3: item.isSoulUrgePaid,
//       4: item.isPersonalYearPaid,
//       5: item.isFengShuiPaid,
//     };
//   });
//   return userNumFeatureUnlockedDetails;
// }
