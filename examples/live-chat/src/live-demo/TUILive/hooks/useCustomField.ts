import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import TIM, { ChatSDK, Conversation, Group } from 'tim-js-sdk';
import { useTUIKitContext } from '../../../../../../src/context';
import { useTUILiveContext } from '../context/TUILiveContext';
import { Icon, IconTypes } from '../../../../../../src/components/Icon';

interface ativeClickReturn {
  value?: boolean,
  suffixValue?: boolean,
}

interface useLiveAtiveBasicParams {
  className?: string,
  icon?: IconTypes,
  activeIcon?: IconTypes,
  iconWidth?: number,
  iconHeight?: number,
  name?: string,
  type?: string,
  value?: boolean,
  onClick?: () => ativeClickReturn;
}

export interface useLiveAtiveElementsParams extends useLiveAtiveBasicParams {
  suffix?: useLiveAtiveBasicParams;
}

export function useCustomField<T extends useLiveAtiveElementsParams>(
  props:PropsWithChildren<T>,
) {
  const { tim } = useTUIKitContext('useCustomField');
  const { group } = useTUILiveContext('TUILiveHeader');
  const setGroupMemberCustomField = useCallback(() => {
    tim.setGroupMemberCustomField({ groupID: (group as any).groupID, memberCustomField: [{ key: 'group_member_test', value: 'test' }] });
  }, [tim]);
  return (
    setGroupMemberCustomField
  );
}
