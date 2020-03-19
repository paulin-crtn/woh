export interface Review {
    ratings: Rating;
    comments: Comment[];
}

export interface Rating {
    host: number;
    assigments: number;
    atmosphere: number;
    accomodation: number;
}

export interface Comment {
    user_firstname: string;
    user_profile_picture_url: string;
    content: string;
    date: string;
}