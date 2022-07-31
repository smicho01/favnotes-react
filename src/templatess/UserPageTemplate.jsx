import React from 'react';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import PropTypes from 'prop-types';

const UserPageTemplate = ({ children, pageType }) => (
  <React.Fragment>
    <Sidebar pageType={pageType} />
    {children}
  </React.Fragment>
);

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

UserPageTemplate.defaultProps = {
  cardType: 'note',
};

export default UserPageTemplate;
