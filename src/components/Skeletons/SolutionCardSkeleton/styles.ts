import { Skeleton } from 'antd';
import styled from 'styled-components';

export const SkeletonCardContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const SkeletonCard = styled(Skeleton.Button)`
  width: 283px !important;
  height: 60px !important;
  margin-left: 0px;
  margin-right: 15px;
  margin-bottom: 15px;
`;
