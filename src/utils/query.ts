import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
  query Me {
    me {
      id
      username
      name
      profilePicture
      followersCount
      followingsCount
      tagline
      dateJoined
      location
      availableFor
      ambassador
      provider
      deactivated
    }
  }
`;
