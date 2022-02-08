import React from 'react';
import README from './README.mdx';
import SendContent from './send-content.component';

export default {
  title: 'Pages/Send/SendContent',
  id: __filename,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    asset: {
      name: 'Asset',
      control: { type: 'object' },
      defaultValue: { type: 'NATIVE' },
    },
    assetError: {
      name: 'Asset Error',
      control: { type: 'text' },
      defaultValue: 'unsendableAsset',
    },
    contact: {
      name: 'Contact',
      control: { type: 'object' },
      defaultValue: { name: 'Name' },
    },
    error: {
      name: 'Error',
      control: { type: 'text' },
      defaultValue: 'connecting',
    },
    gasIsExcessive: {
      name: 'Gas Is Excessive',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    getIsBalanceInsufficient: {
      name: 'Get Is Balance Insufficient',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    isEthGasPrice: {
      name: 'Backup Gas Price',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    isOwnedAccount: {
      name: 'Is In Address Book',
      control: { type: 'boolean' },
      defaultValue: true,
    },
    networkOrAccountNotSupports1559: {
      name: 'Network Or Account Not Supports 1559',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    noGasPrice: {
      name: 'No Gas Price',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    showHexData: {
      name: 'Show Hex Data',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    to: {
      name: 'To',
      control: { type: 'text' },
      defaultValue: '',
    },
    warning: {
      name: 'Warning',
      control: { type: 'text' },
      defaultValue: 'connecting',
    },
  },
};

export const DefaultStory = (args) => {
  return <SendContent {...args} />;
};

DefaultStory.storyName = 'SendContent';
