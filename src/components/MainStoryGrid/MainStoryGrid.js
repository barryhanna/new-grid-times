import React from 'react';
import styled from 'styled-components/macro';

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  section:nth-child(1) {
    /* Main Story */
    /* background: red; */

    @media ${QUERIES.tabletAndUp} {
      padding-right: 1rem;
      border-right: 1px solid var(--color-gray-300);
    }
  }
  section:nth-child(2) {
    /* Secondary Stories */
    /* background: green; */

    border-bottom: 1px solid transparent;

    @media ${QUERIES.laptopAndUp} {
      padding-bottom: 1rem;
      margin-right: -1rem;
      border-bottom: 1px solid var(--color-gray-300);
    }
  }

  section:nth-child(3) {
    /* background: yellow; */

    @media ${QUERIES.desktopAndUp} {
      padding-left: 1rem;
      margin-left: 0;
      border-left: 1px solid var(--color-gray-300);
      border-bottom: 1px solid var(--color-gray-300);
    }
  }

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 65% 30%;
    grid-template-areas:
      'main-story secondary-stories'
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    gap: 15px;
    /* margin-bottom: 48px; */
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 40% 25% 25%;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
    gap: 15px;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 2rem;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;
