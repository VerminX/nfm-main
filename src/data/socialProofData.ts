export const firstNames = [
  "Sarah", "Emily", "Jessica", "Amanda", "Rachel", "Lauren", "Megan", 
  "Ashley", "Hannah", "Olivia", "Madison", "Taylor", "Brittany", "Samantha",
  "Nicole", "Kayla", "Stephanie", "Courtney", "Heather", "Christina"
];

export const neighborhoods = [
  "East Nashville", "The Gulch", "12 South", "Germantown", "Belle Meade",
  "Franklin", "Brentwood", "Green Hills", "Sylvan Park", "Berry Hill",
  "Hillsboro Village", "Music Row", "Belmont", "Edgehill", "Wedgewood-Houston"
];

export const actions = [
  { text: "booked a wedding consultation", icon: "💒" },
  { text: "ordered Joy Jars for delivery", icon: "🌸" },
  { text: "signed up for a floral workshop", icon: "✂️" },
  { text: "scheduled a consultation", icon: "📅" },
  { text: "booked a custom bouquet session", icon: "💐" },
  { text: "reserved their wedding date", icon: "💍" }
];

export const timeframes = [
  "just now",
  "2 minutes ago",
  "5 minutes ago",
  "8 minutes ago",
  "12 minutes ago",
  "15 minutes ago"
];

export function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function generateNotification() {
  return {
    name: getRandomItem(firstNames),
    neighborhood: getRandomItem(neighborhoods),
    action: getRandomItem(actions),
    timeframe: getRandomItem(timeframes)
  };
}
