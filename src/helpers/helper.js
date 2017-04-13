export const extractEmailsFromMemberships = (memberships) => {
  return memberships.map(membership => membership.user_email).join(', ');
}
