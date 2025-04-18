export interface Announcement {
    id: number;
    type: 'announcement' | 'event';
    title: string;
    short_description: string;
    description: string;
    date: string;
    formatted_date: string;
    created_at: string;
    updated_at: string;
    is_active: boolean;
    image: string;
    image_url: string;
}
