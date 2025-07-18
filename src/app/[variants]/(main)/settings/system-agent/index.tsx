'use client';

import { DEFAULT_REWRITE_QUERY } from '@/const/settings';
import { isServerMode } from '@/const/version';
import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';

import SystemAgentForm from './features/SystemAgentForm';

const Page = () => {
  const { enableKnowledgeBase } = useServerConfigStore(featureFlagsSelectors);
  return (
    <>
      <SystemAgentForm systemAgentKey="topic" />
      <SystemAgentForm systemAgentKey="generationTopic" />
      <SystemAgentForm systemAgentKey="translation" />
      <SystemAgentForm systemAgentKey="historyCompress" />
      <SystemAgentForm systemAgentKey="agentMeta" />
      {isServerMode && enableKnowledgeBase && (
        <SystemAgentForm
          allowCustomPrompt
          allowDisable
          defaultPrompt={DEFAULT_REWRITE_QUERY}
          systemAgentKey="queryRewrite"
        />
      )}
    </>
  );
};

Page.displayName = 'SystemAgent';

export default Page;
