"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export type IGoToUrl = (
  router: AppRouterInstance,
  url: string,
  onStartLoading?: () => void,
  onEndLoading?: () => void
) => void;

export const GoToUrl = (
  router: AppRouterInstance,
  url: string,
  onStartLoading?: () => void,
  onEndLoading?: () => void
) => {
  if (onStartLoading) {
    onStartLoading();
  }

  if (onEndLoading) {
    new Promise((_) => {
      router.push(url);
    }).then(() => {
      if (onEndLoading) {
        onEndLoading();
      }
    });
  } else {
    router.push(url);
  }
};
