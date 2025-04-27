// import { NextResponse } from "next/server";

// // to do get the youtube api key from google cloud console
// const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
// const CHANNEL_ID = "UCPxK_25wQCYK20nYhsxrmmw"; // Replace with your channel ID

// export async function GET() {
//   try {
//     // First, get the channel's uploads playlist ID
//     const channelResponse = await fetch(
//       `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
//     );
//     const channelData = await channelResponse.json();

//     const uploadsPlaylistId =
//       channelData.items[0].contentDetails.relatedPlaylists.uploads;

//     // Then, get the videos from the uploads playlist
//     const videosResponse = await fetch(
//       `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=6&key=${YOUTUBE_API_KEY}`
//     );
//     const videosData = await videosResponse.json();

//     // Get video statistics
//     const videoIds: string = videosData.items
//       .map((item: any) => item.snippet.resourceId.videoId)
//       .join(",");
//     const statsResponse = await fetch(
//       `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=${videoIds}&key=${YOUTUBE_API_KEY}`
//     );
//     const statsData: any = await statsResponse.json();

//     // Combine the data
//     const videos = videosData.items.map((item: any, index: number) => {
//       const stats = statsData.items[index];
//       return {
//         title: item.snippet.title,
//         description: item.snippet.description,
//         thumbnail:
//           item.snippet.thumbnails.maxres?.url ||
//           item.snippet.thumbnails.high.url,
//         duration: formatDuration(stats.contentDetails.duration),
//         views: formatNumber(stats.statistics.viewCount),
//         likes: formatNumber(stats.statistics.likeCount),
//         url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
//       };
//     });

//     return NextResponse.json({ videos });
//   } catch (error) {
//     console.error("YouTube API Error:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch YouTube data" },
//       { status: 500 }
//     );
//   }
// }

// function formatDuration(duration: string): string {
//   const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
//   if (!match) return "00:00";

//   const hours = (match[1] || "").replace("H", "");
//   const minutes = (match[2] || "").replace("M", "");
//   const seconds = (match[3] || "").replace("S", "");

//   if (hours) {
//     return `${hours}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
//   }
//   return `${minutes}:${seconds.padStart(2, "0")}`;
// }

// function formatNumber(num: string): string {
//   const number = parseInt(num);
//   if (number >= 1000000) {
//     return `${(number / 1000000).toFixed(1)}M`;
//   }
//   if (number >= 1000) {
//     return `${(number / 1000).toFixed(1)}K`;
//   }
//   return number.toString();
// }
