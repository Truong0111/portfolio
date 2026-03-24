import { type AboutMeData, type Game, LinkImageSource, Platform, GameEngine, MediaType, LinkGameStore, type Skill, type Experience } from "./types";
export const PersonalInfo: AboutMeData = {
  name: "Truong Quang Truong",
  role: "Unity Developer",
  introduction: "I'm Unity Developer.",
  description: "I’m a Unity Developer with experience working in C# and building game features such as gameplay mechanics and UI systems.. I’ve worked on several projects that helped me strengthen my problem-solving skills and understanding of game development workflows. I’m looking to continue learning and contribute to projects where I can grow as a developer.",
  image: `${import.meta.env.BASE_URL}/images/Profile.jpg`,
  cvUri: `${import.meta.env.BASE_URL}/files/CV_TQT.pdf`,
  links: {
    github: "https://github.com/Truong0111",
  }
};

export const skills: Skill[] = [
  {
    programming: ["C#", "Animation(2D/3D)", "UI", "DOTween", "Unity Editor"],
    tools: ["Git", "Figma"],
  }
]

export const experiences: Experience[] = [
  {
    company: "Rocket Studio",
    position: "Gameplay Programmer, UI Programmer",
    time: "06/2023 - 05/2024"
  },
  {
    company: "Percas Studio",
    position: "Gameplay Programmer, UI Programmer",
    time: "02/2025 - 10/2025"
  }
]

export const games: Game[] = [
  {
    name: "Tidy Time: Perfect ASMR Game",
    description: "Tidy Time: Perfect ASMR Game is a casual simulation and puzzle game where players clean, organize, and arrange objects in relaxing, level-based scenarios with satisfying ASMR feedback.",
    genres: ["Puzzle", "Simulation"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkGameStore.GooglePlay, url: "https://play.google.com/store/apps/details?id=com.pc.tidy.craze.diy.asmr.ocd.relax.cozy&hl=vi" },
      { source: LinkGameStore.AppStore, url: "https://apps.apple.com/vn/app/tidy-time-perfect-asmr/id6746779280?l=vi" },
    ],
    media: [
      { source: "/images/games/Tidy_Time/menu.png", type: MediaType.Image },
      { source: "/images/games/Tidy_Time/unlock.png", type: MediaType.Image },
      { source: "/images/games/Tidy_Time/win.png", type: MediaType.Image },
      { source: "/images/games/Tidy_Time/screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/Tidy_Time/screenshot_2.png", type: MediaType.Image },
    ],
    role: "Core game programmer, Gameplay programmer, UI programmer"
  },
  {
    name: "Baby Escape",
    description: "Baby Escape is a hyper-casual level-based runner game where players guide a baby character through obstacles, collect items, and make quick decisions to safely reach the finish line.",
    genres: ["Hyper-casual"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "/images/games/Baby_Escape/loading.png", type: MediaType.Image },
      { source: "/images/games/Baby_Escape/screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/watch?v=-Zk1brYKM1Y", type: MediaType.YouTube },
    ],
    role: "Gameplay Programmer, Level Design"
  },
  {
    name: "Prank the Thief: Hunt and Find",
    description: "Prank the Thief: Hunt and Find is a hyper-casual game where player set traps, hide, and interact with the environment to outsmart thieves in short, level-based challenges.",
    genres: ["Hyper-casual"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "/images/games/Prank_The_Thief/screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/Prank_The_Thief/screenshot_2.png", type: MediaType.Image },
      { source: "https://www.youtube.com/watch?v=5YuvkxCw-OA", type: MediaType.YouTube },
    ],
    role: "Gameplay Programmer, UI Programmer"
  },
  // {
  //   name: "Animal Shooter",
  //   description: "Animal Shooter is a hyper-casual shooting game where players control animal characters, defeat enemies, and progress through levels using simple controls and fast-paced gameplay.",
  //   genres: ["Hyper-casual"],
  //   platforms: [Platform.Android],
  //   engine: GameEngine.Unity,
  //   links: [
  //   ],
  //   media: [
  //     { source: "/images/games/Animal_Shooter/Screenshot_1.png", type: MediaType.Image },
  //     { source: "/images/games/Animal_Shooter/Screenshot_2.png", type: MediaType.Image },
  //     { source: "/images/games/Animal_Shooter/Screenshot_3.png", type: MediaType.Image },
  //     { source: "/images/games/Animal_Shooter/Screenshot_4.png", type: MediaType.Image },
  //   ],
  //   role: "Solo Programmer"
  // },
  {
    name: "Coffee Connect",
    description: "Coffee Connect is a casual puzzle game where players link matching items, clear levels, and complete objectives through simple, level-based gameplay.",
    genres: ["Puzzle"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      // { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
    ],
    media: [
      { source: "https://youtube.com/shorts/JIwKiWxzD4k", type: MediaType.YouTube },
    ],
    role: "Solo Programmer"
  },
  {
    name: "Grill Sizzle",
    description: "Grill Sizzle is a casual match-3 puzzle game where players drag and match items to clear levels, complete objectives, and progress through simple, level-based challenges.",
    genres: ["Puzzle"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      // { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
    ],
    media: [
      { source: "https://youtube.com/shorts/SgDiMc9O7Oo", type: MediaType.YouTube },
    ],
    role: "Solo Programmer"
  },
  {
    name: "Space Escape",
    description: "Space Escape is a casual puzzle game where players drag and place arrows to guide the character, avoid obstacles, collect keys, and reach the exit in level-based challenges.",
    genres: ["Puzzle"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/Truong0111/SpaceEscape" },
    ],
    media: [
      { source: "https://youtu.be/0TYZL4zUf9w", type: MediaType.YouTube },
    ],
    role: "Solo Programmer"
  },
  {
    name: "Gas Head Run",
    description: "Gas Head Run is a hyper-casual level-based runner game where players collect fuel, and manage energy to reach the finish line through fast-paced and simple gameplay.",
    genres: ["Hyper-casual"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "/images/games/Gas_Head_Run/menu.png", type: MediaType.Image },
      { source: "/images/games/Gas_Head_Run/spin.png", type: MediaType.Image },
      { source: "https://youtube.com/shorts/6s5LIzOlaR8?feature=share", type: MediaType.YouTube },
    ],
    role: "Solo Programmer"
  }
];