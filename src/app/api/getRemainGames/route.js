const STEAM_API_KEY = process.env.STEAM_API_KEY;
export async function GET() {
    try {
        const response = await fetch(`https://api.steampowered.com/ISteamChartsService/GetMostPlayedGames/v1/?key=${STEAM_API_KEY}&input_json=%7B%22context%22%3A%7B%22country_code%22%3A%22us%22%7D%2C%22data_request%22%3A%7B%22include_assets%22%3Atrue%2C%22include_release%22%3Atrue%2C%22include_ratings%22%3Atrue%2C%22include_reviews%22%3Atrue%2C%22include_basic_info%22%3Atrue%7D%7D`);
        const data = await response.json();
        const threeTopGames = data.response.ranks.slice(3, 48);
        return new Response(JSON.stringify(threeTopGames), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
    } catch (error) {
        console.error('Error fetching data:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch data from Steam API' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          });
    }

}