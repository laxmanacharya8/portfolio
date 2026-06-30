import { useEffect, useState } from "react";
import { socials } from "@/data/portfolio";

export type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
};

export type GithubReposState = {
  status: "loading" | "ok" | "error";
  repos: GithubRepo[];
};

const subscribers = new Set<(state: GithubReposState) => void>();
let snapshot: GithubReposState = { status: "loading", repos: [] };
let pendingRequest: Promise<void> | null = null;
let lastFetchedAt = 0;

function publish(next: GithubReposState) {
  snapshot = next;
  subscribers.forEach((subscriber) => subscriber(snapshot));
}

function refreshGithubRepos() {
  const cacheIsFresh = Date.now() - lastFetchedAt < 60_000;
  if ((snapshot.status === "ok" && cacheIsFresh) || pendingRequest) return;

  pendingRequest = fetch(
    `https://api.github.com/users/${socials.githubUser}/repos?sort=updated&per_page=100`,
    { headers: { Accept: "application/vnd.github+json" } },
  )
    .then(async (response) => {
      if (!response.ok) throw new Error(String(response.status));
      return (await response.json()) as GithubRepo[];
    })
    .then((repos) => {
      lastFetchedAt = Date.now();
      publish({ status: "ok", repos });
    })
    .catch(() => {
      if (!snapshot.repos.length) publish({ status: "error", repos: [] });
    })
    .finally(() => {
      pendingRequest = null;
    });
}

export function useGithubRepos() {
  const [state, setState] = useState<GithubReposState>(snapshot);

  useEffect(() => {
    subscribers.add(setState);
    setState(snapshot);
    refreshGithubRepos();

    const refreshWhenVisible = () => {
      if (document.visibilityState === "visible") refreshGithubRepos();
    };

    document.addEventListener("visibilitychange", refreshWhenVisible);
    return () => {
      subscribers.delete(setState);
      document.removeEventListener("visibilitychange", refreshWhenVisible);
    };
  }, []);

  return state;
}
