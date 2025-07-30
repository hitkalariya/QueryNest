import { addLogEntry } from "./logEntries";
import { isF16Supported } from "./webGpu";

export const defaultSettings = {
  showEnableAiResponsePrompt: true,
  enableAiResponse: false,
  enableWebGpu: true,
  enableImageSearch: true,
  webLlmModelId: isF16Supported
    ? VITE_WEBLLM_DEFAULT_F16_MODEL_ID
    : VITE_WEBLLM_DEFAULT_F32_MODEL_ID,
  wllamaModelId: VITE_WLLAMA_DEFAULT_MODEL_ID,
  cpuThreads: Math.max(1, (navigator.hardwareConcurrency ?? 1) - 2),
  searchResultsToConsider: 3,
  searchResultsLimit: 15,
  systemPrompt: `- Respond using the provided search results with referencing links + your knowledge + extra relevant insights (note: referencing links should be placed near the fact you are quoting, in this format: [youtube.com](https://www.youtube.com/watch?v=dQw4w9WgXcQ), meaning the link text should be the top level domain of the website, without "https://" or "www.")
- Write your response in the same language as the query
- You are allowed to use the following Markdown components in your response: anchor, bold, italic, code, quote, table

Below are the search results fetched at {{dateTime}}.

{{searchResults}}`,
  inferenceType: VITE_DEFAULT_INFERENCE_TYPE,
  inferenceTemperature: 0.7,
  inferenceTopP: 0.9,
  minP: 0.1,
  inferenceFrequencyPenalty: 0,
  inferencePresencePenalty: 0,
  openAiApiBaseUrl: "",
  openAiApiKey: "",
  openAiApiModel: "",
  hordeApiKey: "0000000000",
  hordeModel: "",
  enterToSubmit: true,
  enableAiResponseScrolling: true,
  allowAiModelDownload: false,
  enableTextSearch: true,
  selectedVoiceId: "",
  reasoningStartMarker: "<think>",
  reasoningEndMarker: "</think>",
};

addLogEntry(
  `Number of logical processors in CPU: ${
    navigator.hardwareConcurrency ?? "unknown"
  }`,
);

export const inferenceTypes = [
  { value: "browser", label: "In the browser (Private)" },
  { value: "openai", label: "Remote server (API)" },
  { value: "horde", label: "AI Horde (Pre-configured)" },
  ...(VITE_INTERNAL_API_ENABLED
    ? [{ value: "internal", label: VITE_INTERNAL_API_NAME }]
    : []),
];
