import articles from '$lib/articles.js';
import {error} from "@sveltejs/kit";

export const load = ({ params }) => {
    // Check if the article exists
    const articleExists = articles.some(article => article.slug === params.slug);
    if (!articleExists) {
        error(404, "Article not found")
    }
    return articles.find(article => article.slug === params.slug);
}