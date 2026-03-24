export const LinkImageSource = {
  Github: "/images/logos/github.png",
} as const;

export type LinkImageSource =
  typeof LinkImageSource[keyof typeof LinkImageSource];

export const LinkGameStore={
  GooglePlay: "/images/logos/google-play.png",
  AppStore: "/images/logos/app-store.png"
}

export type LinkGameStore =
  typeof LinkGameStore[keyof typeof LinkGameStore];

export const Platform = {
  Windows: "Windows",
  Mac: "Mac",
  Linux: "Linux",
  iOS: "iOS",
  Android: "Android",
} as const;

export type Platform = typeof Platform[keyof typeof Platform];

export const GameEngine = {
  Unity: "Unity",
  Unreal: "Unreal",
} as const;

export type GameEngine = typeof GameEngine[keyof typeof GameEngine];

export const MediaType = {
  Image: "image",
  YouTube: "youtube",
} as const;

export type MediaType = typeof MediaType[keyof typeof MediaType];

export interface MediaItem {
  source: string;
  type: MediaType;
}

export interface AboutMeData {
  name: string;
  role: string;
  description: string;
  introduction: string;
  image: string;
  cvUri: string;
  links: {
    github: string;
    // itchIO: string;
    // linkedIn: string;
  };
}

export interface Game {
  name: string;
  description: string;
  genres: string[];
  source?: { name: string; url: string };
  links: { source: LinkImageSource | LinkGameStore; url: string }[];
  media: MediaItem[];
  platforms: Platform[];
  engine: GameEngine;
  role: string;
}

export interface Experience {
  company: string;
  position: string;
  time: string;
  description?: string[];
}

export interface Skill {
  programming: string[];
  tools: string[];
  other?: string[];
}