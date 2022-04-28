import React from 'react';
import PropTypes from 'prop-types';
import Flex from 'components/common/Flex';
import Link from 'next/link';
import Avatar from 'components/common/Avatar';
import VerifiedBadge from 'components/common/VerifiedBadge';

export const EducationItem = ({ details, isLast }) => {
  const { logo, institution, degree, duration, location, verified } = details;
  return (
    <Flex>
      <Link href="#!">
        <Avatar size="3xl" src={logo} width={56} />
      </Link>
      <div className="flex-1 position-relative ps-3">
        <h6 className="fs-0 mb-0">
          <Link href="#!">{institution}</Link>
          {verified && <VerifiedBadge />}
        </h6>
        <p className="mb-1">{degree}</p>
        <p className="text-1000 mb-0">{duration}</p>
        <p className="text-1000 mb-0">{location}</p>
        {!isLast && <div className="border-dashed-bottom my-3"></div>}
      </div>
    </Flex>
  );
};

EducationItem.propTypes = {
  details: PropTypes.shape({
    logo: PropTypes.string,
    institution: PropTypes.string,
    degree: PropTypes.string,
    duration: PropTypes.string,
    location: PropTypes.string,
    verified: PropTypes.bool
  }),
  isLast: PropTypes.bool
};

export default EducationItem;