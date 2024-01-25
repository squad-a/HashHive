import { gql } from '@apollo/client';

const GET_CURRENT_USER_AND_INITIAL_DATA = gql`
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
    personalized: feed(first: 10, filter: { type: PERSONALIZED }) {
      edges {
        node {
          id
          slug
          title
          subtitle
          url
          canonicalUrl
          cuid
          brief
          readTimeInMinutes
          views
          reactionCount
          replyCount
          responseCount
          featured
          bookmarked
          featuredAt
          publishedAt
          updatedAt
          hasLatexInPost
          isFollowed
          isAutoPublishedFromRSS
          coverImage {
            url
            isPortrait
            attribution
            photographer
            isAttributionHidden
          }
          author {
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
            deactivated
            following
            followsBack
            isPro
            tagsFollowing {
              id
              name
              slug
              logo
              tagline
              followersCount
              postsCount
            }
          }
          tags {
            id
            name
            slug
            logo
            tagline
            followersCount
            postsCount
          }
        }
      }
    }
    recent: feed(first: 10, filter: { type: RECENT }) {
      edges {
        node {
          id
          slug
          title
          subtitle
          url
          canonicalUrl
          cuid
          brief
          readTimeInMinutes
          views
          reactionCount
          replyCount
          responseCount
          featured
          bookmarked
          featuredAt
          publishedAt
          updatedAt
          hasLatexInPost
          isFollowed
          isAutoPublishedFromRSS
          coverImage {
            url
            isPortrait
            attribution
            photographer
            isAttributionHidden
          }
          author {
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
            deactivated
            following
            followsBack
            isPro
            tagsFollowing {
              id
              name
              slug
              logo
              tagline
              followersCount
              postsCount
            }
          }
          tags {
            id
            name
            slug
            logo
            tagline
            followersCount
            postsCount
          }
        }
      }
    }
  }
`;

const ADD_POST = gql`
  mutation PublishPost($input: PublishPostInput!) {
    publishPost(input: $input) {
      post {
        id
        slug
        title
        subtitle
      }
    }
  }
`;

export { GET_CURRENT_USER_AND_INITIAL_DATA, ADD_POST };
