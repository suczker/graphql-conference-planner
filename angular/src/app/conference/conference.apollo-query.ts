// We use the gql tag to parse our query string into a query document
import gql from 'graphql-tag';

export const AllConferencesQuery = gql`
`;

export interface AllConferencesQueryResponse {
  allConferences;
  loading;
}


export const DetailedConferenceQuery = gql`
`;

export interface DetailedConferenceQueryResponse {
  conference;
  loading;
}
