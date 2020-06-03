import { User } from '../app/core/user/user';

export const MOCK_USER: User = {
    is_valid: 1,
    is_complete: 1,
    is_host: 0,
    is_helper: 1,
    is_premium: 1,
    premium_until: null,
    firstname: 'Sophie',
    lastname: 'Cohen',
    email: 'sophie.cohen@gmail.com',
    phone: null,
    date_of_birth: '1989-10-15',
    description: 'Aenean fringilla laoreet congue. Sed molestie nulla sit amet risus tincidunt vehicula. In vestibulum augue ut vulputate gravida. Fusce pulvinar eleifend leo vel porta. Suspendisse at dapibus tellus. Ut sed justo vel diam ullamcorper ullamcorper at et ligula.',
    city: 'Bordeaux',
    country_alpha3: 'fra',
    profile_picture_url: 'https://c.wallhere.com/photos/51/f8/anime_girls_headphones_original_characters_face_profile_anime-216888.jpg!d',
    recently_online: 1,
    response_rate: null,
    response_time:  null,
}