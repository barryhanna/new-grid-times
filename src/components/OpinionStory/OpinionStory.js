import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <StoryLink href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </StoryLink>
  );
};

const StoryLink = styled.a`
  margin-block: 0.5rem;

  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-gray-300);

  &:last-of-type {
    border-bottom 1px solid transparent;
  }

  @media ${QUERIES.tabletAndUp} {
    border-bottom: 1px solid transparent;
  }
`;

const Wrapper = styled.article`
  display: flex;
  color: var(--color-gray-900);

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
  }
`;

const Avatar = styled.img`
  display: block;
  order: 1;
  width: 48px;
  height: 48px;
  margin-left: auto;
  border-radius: 50%;
  object-fit: cover;
  @media ${QUERIES.tabletOnly} {
    order: 0;
    margin-left: 0;
  }
`;

const AuthorName = styled.p`
  grid-area: name;
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  grid-area: title;
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
