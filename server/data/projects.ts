export const projects = [
  {
    id: 1,
    title: "SaveUP - Budgeting Application for Children",
    description: "A simple budgeting app designed for kids.",
    image: "/images/projects/saveup.png",
    technologies: ["Figma", "Android Studio"],
    link: "https://www.behance.net/gallery/148981927/SaveUP-Budgeting-Application-for-Children",
    featured: true
  },
  {
    id: 2,
    title: "TeachEase",
    description: "A comprehensive learning management system for private tutors to manage classes easily.",
    image: "/images/projects/teachease.png",
    technologies: ["Figma"],
    link: "https://www.behance.net/gallery/165198635/TeachEase-Learning-Management-System-UIUX-Case-Study",
    featured: true
  },
  {
    id: 3,
    title: "Vigo Travel Website",
    description: "A modern travel website design for exploring destinations and booking trips.",
    image: "/images/projects/vigo-travel.png",
    technologies: ["Figma", "HTML", "CSS"],
    link: "https://vigo-travel-website.vercel.app/",
    featured: false
  },
  {
    id: 4,
    title: "Spotify Playlist Generator",
    description: "Quickly create Spotify playlists.",
    image: "/images/projects/spotify-playlist-generator.png",
    technologies: ["Nuxt.js", "Spotify API"],
    link: "https://spotify-playlist-generator-ten.vercel.app/",
    featured: false
  }
]

export function getProjects(featuredOnly = false) {
  return featuredOnly ? projects.filter(p => p.featured) : projects
}