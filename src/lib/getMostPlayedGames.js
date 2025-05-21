import { desc } from "framer-motion/client";

function formatTimeToDate(time) {
    const date = new Date(time * 1000);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = (date.getDate()).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

export async function getThreeTopGamesSteam() {
    const response = await fetch('/api/getTopThreeGames');
    const data = await response.json();
    const threeTopGames = data.map(game => ({
        appid: game.item.appid,
        name: game.item.name,
        description: game.item.basic_info.short_description,
        peak_in_game: game.peak_in_game,
        rating: game.item.reviews.summary_filtered.review_score,
        score_label: game.item.reviews.summary_filtered.review_score_label,
        release_date: formatTimeToDate(game.item.release.steam_release_date)
    }));
    console.log(threeTopGames);
    return threeTopGames;
}

export async function getRemainGamesSteam(){
    const response = await fetch('/api/getRemainGames');
    const data = await response.json();
    const remainTopGames = data.map(game => ({
        appid: game.item.appid,
        rank: game.rank,
        name: game.item.name,
        description: game.item.basic_info.short_description,
        peak_in_game: game.peak_in_game,
        rating: game.item.reviews.summary_filtered.review_score,
        release_date: formatTimeToDate(game.item.release.steam_release_date)
    }));
    return remainTopGames;
} 