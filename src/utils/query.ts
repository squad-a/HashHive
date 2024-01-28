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
    personalized: feed(first: 9, filter: { type: PERSONALIZED }) {
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
    recent: feed(first: 9, filter: { type: RECENT }) {
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

const GET_PUBLICATION = gql`
  query getPublication($host: String!) {
    publication(host: $host) {
      title
      id
    }
  }
`;

const GET_CURRENT_USER_PROFILE_WITH_POSTS = gql`
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
      socialMediaLinks {
        website
        github
        twitter
        instagram
        facebook
        stackoverflow
        linkedin
        youtube
      }
      posts(pageSize: 10, page: 1) {
        totalDocuments
        nodes {
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
        }
      }
    }
  }
`;

export {
  GET_CURRENT_USER_AND_INITIAL_DATA,
  ADD_POST,
  GET_PUBLICATION,
  GET_CURRENT_USER_PROFILE_WITH_POSTS
};
