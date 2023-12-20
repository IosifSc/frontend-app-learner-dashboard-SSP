import React from 'react';

import { useIntl } from '@edx/frontend-platform/i18n';

import { reduxHooks } from 'hooks';

import messages from './messages';

export const BrandLogo = () => {
  const { formatMessage } = useIntl();
  const dashboard = reduxHooks.useEnterpriseDashboardData();

  /*return (
    <a href={dashboard?.url || '/'} className="mx-auto">
      <img
        className="logo py-3"
        src="https://edx-cdn.org/v3/prod/logo.svg"
        alt={formatMessage(messages.logoAltText)}
      />
    </a>
  );
};*/
	return (
    <a href={dashboard?.url || '/'} className="mx-auto">
      <img
        className="logo py-3"
        src={process.env.LOGO_POWERED_BY_OPEN_EDX_URL_SVG}
        alt={formatMessage(messages.logoAltText)}
      />
    </a>
  );
};

BrandLogo.propTypes = {};

export default BrandLogo;
