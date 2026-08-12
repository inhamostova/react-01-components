import PropTypes from 'prop-types';
import {
  CardWrapper,
  Description,
  Image,
  Name,
  Stats,
  StatsItem,
  StatsSpan,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <CardWrapper>
      <Description>
        <Image src={avatar} alt={tag} />
        <Name>{username}</Name>
        <p>{tag}</p>
        <p>{location}</p>
      </Description>

      <Stats>
        <StatsItem>
          <span>Followers</span>
          <StatsSpan>{followers}</StatsSpan>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <StatsSpan>{views}</StatsSpan>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <StatsSpan>{likes}</StatsSpan>
        </StatsItem>
      </Stats>
    </CardWrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
