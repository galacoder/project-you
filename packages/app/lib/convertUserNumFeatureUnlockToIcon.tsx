export default function convertUserNumFeatureUnlockToIcon(
  categoryID: number,
  [checkUserFeatureIsUnlockReturnObj]: any
) {
  if (checkUserFeatureIsUnlockReturnObj[categoryID] === true) {
    return "unlock-alt";
  } else {
    return "lock";
  }
}
