
// interfaces for a standard blog. Might not need the header and section to be exported. They exist mainly for BlogData's local definition

// structure for blog header
export interface BlogHeader {
    title: string, // '?' indicates optional
    category: string,
    date: string,
    summary: string,
    featured_media_link: string,
    featured_media_caption: string,
    featured_media_attribution: string,
}

// structure for blog sectionals
export interface BlogSection {
    heading: string, // '?' indicates optional
    paragraph: string,
    media_link: string,
    media_caption: string,
    media_attribution: string,
}

// structure for a blog header and its sections
export interface BlogData {
    header: BlogHeader,
    sections: BlogSection[],
}

//structure for a BlogList item
export interface BlogListData {
    blog_id: string,
    header: BlogHeader, // see definition above
    creation_time: number // seconds (server time)
}