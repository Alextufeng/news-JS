export interface appViewClass {
    drawNews(data: ResponseNews): void;
    drawSources(data: ResponseSource): void;
}
export interface ResponseNews {
    articles?: Article[];
    status: string;
    totalResult: number;
}
export interface ResponseSource {
    sources?: SourceItem[];
    status: string;
}
export interface NewsClass {
    draw(data: Article[]): void;
}
export interface Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}
type Source = Pick<SourceItem, 'id' | 'name'>;
export interface SourceClass {
    draw(data: SourceItem[]): void;
}
export interface SourceItem {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
export type Callback<T> = (data: T) => void;
export interface GetR {
    endpoint: 'sources' | 'everything';
    options?: Options | Record<string, unknown>;
}
export interface Options {
    sources?: string;
    apiKey?: string;
}
export enum Methods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}
