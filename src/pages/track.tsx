import React from "react";
import { Layout, QueryResult } from "../components";

import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import TrackDetail from "../components/track-detail";

export const GET_TRACK = gql(`
  query GetTrack($trackId: ID!) {
  track(id: $trackId) {
    id
    title
    author {
      id
      name
      photo
    }
    thumbnail
    length
    modulesCount
    description
    numberOfViews
    modules {
      id
      title
      length
      content
      videoUrl
    }
  }
}
  `);

const Track = () => {
  let { trackId = "" } = useParams();

  const { loading, error, data } = useQuery(GET_TRACK, { variables: { trackId } });
  return (
    <Layout>
      <QueryResult loading={loading} error={error} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;
