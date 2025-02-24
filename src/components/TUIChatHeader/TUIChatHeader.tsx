import React, { PropsWithChildren } from 'react';
import { Conversation } from 'tim-js-sdk';
import { useTUIChatStateContext } from '../../context/TUIChatStateContext';
import type { TUIChatHeaderDefaultProps } from './TUIChatHeaderDefault';
import { TUIChatHeaderDefault } from './TUIChatHeaderDefault';

import './styles/index.scss';
import { useComponentContext } from '../../context';

interface TUIChatHeaderProps {
  title?: string,
  TUIChatHeader?: React.ComponentType<TUIChatHeaderDefaultProps>,
  conversation?: Conversation,
  avatar?: React.ReactElement | string,
  headerOpateIcon?: React.ReactElement | string,
}

function UnMemoizedTUIChatHeader<T extends TUIChatHeaderProps>(
  props: PropsWithChildren<T>,
):React.ReactElement {
  const {
    title,
    conversation: propsConversation,
    TUIChatHeader: propTUIChatHeader,
    avatar,
    headerOpateIcon,
  } = props;

  const { conversation: contextConversation } = useTUIChatStateContext('TUIChatHeader');
  const { TUIChatHeader: ContextTUIChatHeader } = useComponentContext('TUIChatHeader');

  const TUIChatHeaderUIComponent = propTUIChatHeader
  || ContextTUIChatHeader || TUIChatHeaderDefault;
  const conversation = propsConversation || contextConversation;

  return (
    <TUIChatHeaderUIComponent
      title={title}
      conversation={conversation}
      avatar={avatar}
      opateIcon={headerOpateIcon}
    />
  );
}

export const TUIChatHeader = React.memo(UnMemoizedTUIChatHeader) as
typeof UnMemoizedTUIChatHeader;
