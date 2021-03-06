/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { IntlProvider } from 'react-intl';
import {
  DEFAULT_LOCALE,
} from '../App/constants';
import { makeSelectLocale } from './selectors';

export const LanguageProvider = ({ locale, messages, children }) =>
  <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
    {React.Children.only(children)}
  </IntlProvider>
;

LanguageProvider.propTypes = {
  locale: React.PropTypes.string,
  messages: React.PropTypes.object,
  children: React.PropTypes.element.isRequired,
};

LanguageProvider.defaultProps = {
  locale: DEFAULT_LOCALE,
  messages: {},
};


const mapStateToProps = createSelector(
  makeSelectLocale(),
  (locale) => ({ locale })
);

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageProvider);
